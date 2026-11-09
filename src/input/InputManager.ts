import { DEFAULT_REPEAT_CONFIG, type RepeatConfig } from './inputMap';
import {
  isDirection,
  type ArcadeAction,
  type ArcadeInputEvent,
  type Direction,
  type InputSource,
  type InputSourceKind,
  type PlayerNumber,
  type RawInputChange,
} from './types';

export type InputListener = (event: ArcadeInputEvent) => void;

export interface Timers {
  setTimeout(callback: () => void, ms: number): unknown;
  clearTimeout(handle: unknown): void;
  now(): number;
}

const defaultTimers: Timers = {
  setTimeout: (callback, ms) => globalThis.setTimeout(callback, ms),
  clearTimeout: (handle) => globalThis.clearTimeout(handle as ReturnType<typeof setTimeout>),
  now: () => (typeof performance !== 'undefined' ? performance.now() : Date.now()),
};

const OPPOSITES: Readonly<Record<Direction, Direction>> = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
};

interface Channel {
  source: InputSourceKind;
  sourceId: string;
  player: PlayerNumber;
  /** Ação → controles físicos atualmente pressionados que a geram. */
  raw: Map<ArcadeAction, Set<string>>;
  /** Ação → último controle que a ativou. */
  lastControl: Map<ArcadeAction, string>;
  /** Ações efetivamente ativas (já com conflitos resolvidos). */
  active: Set<ArcadeAction>;
}

/**
 * Resolve direções opostas pressionadas ao mesmo tempo pela mesma fonte/jogador:
 * o eixo conflitante é cancelado (nenhuma das duas fica ativa).
 */
export function resolveOpposites(actions: Iterable<ArcadeAction>): Set<ArcadeAction> {
  const set = new Set(actions);
  const result = new Set<ArcadeAction>();
  for (const action of set) {
    if (isDirection(action) && set.has(OPPOSITES[action])) continue;
    result.add(action);
  }
  return result;
}

export interface InputManagerOptions {
  sources: InputSource[];
  repeat?: RepeatConfig;
  timers?: Timers;
  /** Janela/documento para escutar perda de foco e `visibilitychange`. */
  focusTarget?: Pick<Window, 'addEventListener' | 'removeEventListener'> | null;
  visibilityTarget?: Pick<Document, 'addEventListener' | 'removeEventListener' | 'visibilityState'> | null;
}

/**
 * Une os adaptadores de entrada e entrega à interface eventos normalizados.
 *
 * - Resolve direções opostas.
 * - Gera repetição direcional controlada (atraso inicial + intervalo).
 * - Nunca repete confirm/cancel/start/action/back/help.
 * - Limpa estados pressionados ao perder foco ou ocultar a página.
 */
export class InputManager {
  private readonly listeners = new Set<InputListener>();
  private readonly channels = new Map<string, Channel>();
  private readonly repeatTimers = new Map<string, unknown>();
  private readonly sources: InputSource[];
  private readonly repeat: RepeatConfig;
  private readonly timers: Timers;
  private readonly focusTarget: InputManagerOptions['focusTarget'];
  private readonly visibilityTarget: InputManagerOptions['visibilityTarget'];
  private running = false;

  constructor(options: InputManagerOptions) {
    this.sources = options.sources;
    this.repeat = options.repeat ?? DEFAULT_REPEAT_CONFIG;
    this.timers = options.timers ?? defaultTimers;
    this.focusTarget = options.focusTarget === undefined ? globalThis.window : options.focusTarget;
    this.visibilityTarget =
      options.visibilityTarget === undefined ? globalThis.document : options.visibilityTarget;
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    for (const source of this.sources) source.start(this.handleChange);
    this.focusTarget?.addEventListener('blur', this.handleBlur);
    this.visibilityTarget?.addEventListener('visibilitychange', this.handleVisibility);
  }

  stop(): void {
    if (!this.running) return;
    this.releaseAll();
    for (const source of this.sources) source.stop();
    this.focusTarget?.removeEventListener('blur', this.handleBlur);
    this.visibilityTarget?.removeEventListener('visibilitychange', this.handleVisibility);
    this.running = false;
  }

  subscribe(listener: InputListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  listenerCount(): number {
    return this.listeners.size;
  }

  /** Solta tudo: pede aos adaptadores e limpa o estado interno. */
  releaseAll(): void {
    for (const source of this.sources) source.releaseAll();
    for (const channel of this.channels.values()) {
      channel.raw.clear();
      this.update(channel);
    }
    for (const handle of this.repeatTimers.values()) this.timers.clearTimeout(handle);
    this.repeatTimers.clear();
  }

  private readonly handleBlur = (): void => this.releaseAll();

  private readonly handleVisibility = (): void => {
    if (this.visibilityTarget?.visibilityState === 'hidden') this.releaseAll();
  };

  private readonly handleChange = (change: RawInputChange): void => {
    const key = `${change.source}|${change.sourceId}|${change.player}`;
    let channel = this.channels.get(key);
    if (!channel) {
      channel = {
        source: change.source,
        sourceId: change.sourceId,
        player: change.player,
        raw: new Map(),
        lastControl: new Map(),
        active: new Set(),
      };
      this.channels.set(key, channel);
    }

    const controls = channel.raw.get(change.action) ?? new Set<string>();
    if (change.pressed) {
      controls.add(change.control);
      channel.lastControl.set(change.action, change.control);
    } else {
      controls.delete(change.control);
    }
    if (controls.size > 0) channel.raw.set(change.action, controls);
    else channel.raw.delete(change.action);

    this.update(channel);
  };

  private update(channel: Channel): void {
    const next = resolveOpposites(channel.raw.keys());
    for (const action of [...channel.active]) {
      if (!next.has(action)) {
        channel.active.delete(action);
        this.cancelRepeat(channel, action);
        this.emit(channel, action, 'released', false);
      }
    }
    for (const action of next) {
      if (!channel.active.has(action)) {
        channel.active.add(action);
        this.emit(channel, action, 'pressed', false);
        if (isDirection(action)) this.scheduleRepeat(channel, action, this.repeat.initialDelayMs);
      }
    }
  }

  private repeatKey(channel: Channel, action: ArcadeAction): string {
    return `${channel.source}|${channel.sourceId}|${channel.player}|${action}`;
  }

  private scheduleRepeat(channel: Channel, action: Direction, delay: number): void {
    const key = this.repeatKey(channel, action);
    this.cancelRepeat(channel, action);
    const handle = this.timers.setTimeout(() => {
      this.repeatTimers.delete(key);
      if (!channel.active.has(action)) return;
      this.emit(channel, action, 'pressed', true);
      this.scheduleRepeat(channel, action, this.repeat.intervalMs);
    }, delay);
    this.repeatTimers.set(key, handle);
  }

  private cancelRepeat(channel: Channel, action: ArcadeAction): void {
    const key = this.repeatKey(channel, action);
    const handle = this.repeatTimers.get(key);
    if (handle !== undefined) {
      this.timers.clearTimeout(handle);
      this.repeatTimers.delete(key);
    }
  }

  private emit(channel: Channel, action: ArcadeAction, phase: ArcadeInputEvent['phase'], repeat: boolean): void {
    const event: ArcadeInputEvent = {
      player: channel.player,
      action,
      phase,
      source: channel.source,
      sourceId: channel.sourceId,
      control: channel.lastControl.get(action) ?? action,
      repeat,
      timestamp: this.timers.now(),
    };
    // Cópia: ouvintes adicionados/removidos durante o despacho não afetam este evento.
    for (const listener of [...this.listeners]) {
      try {
        listener(event);
      } catch (error) {
        console.error('[SENAI Arcade] Erro em ouvinte de entrada:', error);
      }
    }
  }
}
