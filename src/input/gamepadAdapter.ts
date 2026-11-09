import {
  DEFAULT_AXIS_CONFIG,
  DEFAULT_GAMEPAD_MAPPING,
  type AxisConfig,
  type GamepadMapping,
} from './inputMap';
import type { ArcadeAction, InputSource, PlayerNumber, RawInputSink } from './types';

/** Subconjunto da interface `Gamepad` usado pelo launcher (facilita simulação em testes). */
export interface GamepadLike {
  readonly index: number;
  readonly id: string;
  readonly connected: boolean;
  readonly mapping?: string;
  readonly buttons: ReadonlyArray<{ readonly pressed: boolean; readonly value: number }>;
  readonly axes: ReadonlyArray<number>;
}

/** Fonte do estado dos gamepads. Em produção usa `navigator.getGamepads()`. */
export interface GamepadProvider {
  getGamepads(): ReadonlyArray<GamepadLike | null>;
}

export interface FrameScheduler {
  request(callback: () => void): number;
  cancel(handle: number): void;
}

/** Eventos de ciclo de vida usados para iniciar/parar o polling. */
export interface GamepadEnvironment {
  addEventListener(type: string, listener: () => void): void;
  removeEventListener(type: string, listener: () => void): void;
  isVisible(): boolean;
}

/** Aplica a dead zone: valores pequenos (drift) viram 0. */
export function applyDeadZone(value: number, deadZone: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.abs(value) < deadZone ? 0 : value;
}

/** Converte um eixo em direção negativa/positiva, com histerese. */
export function axisDirection(
  value: number,
  wasNegative: boolean,
  wasPositive: boolean,
  config: AxisConfig,
): -1 | 0 | 1 {
  const v = applyDeadZone(value, config.deadZone);
  if (v <= -config.pressThreshold || (wasNegative && v <= -config.releaseThreshold)) return -1;
  if (v >= config.pressThreshold || (wasPositive && v >= config.releaseThreshold)) return 1;
  return 0;
}

export interface GamepadControlState {
  /** Ação normalizada → controle físico que a ativou. */
  actions: Map<ArcadeAction, string>;
}

/**
 * Lê o estado atual de um gamepad e devolve as ações ativas.
 * Direções opostas simultâneas são resolvidas depois, no InputManager.
 */
export function readGamepadActions(
  pad: GamepadLike,
  previous: ReadonlySet<ArcadeAction> = new Set(),
  mapping: GamepadMapping = DEFAULT_GAMEPAD_MAPPING,
  config: AxisConfig = DEFAULT_AXIS_CONFIG,
): Map<ArcadeAction, string> {
  const active = new Map<ArcadeAction, string>();

  for (const [indexText, action] of Object.entries(mapping.buttons)) {
    const index = Number(indexText);
    const button = pad.buttons[index];
    if (!action || !button) continue;
    if (button.pressed || button.value >= config.buttonThreshold) {
      if (!active.has(action)) active.set(action, `botão ${index}`);
    }
  }

  const x = axisDirection(pad.axes[mapping.axisX] ?? 0, previous.has('left'), previous.has('right'), config);
  const y = axisDirection(pad.axes[mapping.axisY] ?? 0, previous.has('up'), previous.has('down'), config);
  if (x === -1 && !active.has('left')) active.set('left', `eixo ${mapping.axisX}-`);
  if (x === 1 && !active.has('right')) active.set('right', `eixo ${mapping.axisX}+`);
  if (y === -1 && !active.has('up')) active.set('up', `eixo ${mapping.axisY}-`);
  if (y === 1 && !active.has('down')) active.set('down', `eixo ${mapping.axisY}+`);

  return active;
}

/**
 * Atribui jogadores de forma previsível: gamepads conectados em ordem crescente
 * de índice; o primeiro é o Jogador 1 e o segundo, o Jogador 2. Os demais ficam
 * sem jogador (aparecem apenas no diagnóstico).
 */
export function assignPlayers(pads: ReadonlyArray<GamepadLike | null>): Map<number, PlayerNumber> {
  const connected = pads
    .filter((pad): pad is GamepadLike => pad !== null && pad !== undefined && pad.connected)
    .map((pad) => pad.index)
    .sort((a, b) => a - b);
  const result = new Map<number, PlayerNumber>();
  const [first, second] = connected;
  if (first !== undefined) result.set(first, 1);
  if (second !== undefined) result.set(second, 2);
  return result;
}

export interface GamepadSnapshot {
  index: number;
  id: string;
  mapping: string;
  player: PlayerNumber | null;
  buttonCount: number;
  axisCount: number;
  pressedButtons: number[];
  axes: number[];
  actions: ArcadeAction[];
}

export function summarizeGamepadId(id: string, max = 48): string {
  const clean = id.replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max - 1)}…` : clean || 'Gamepad sem nome';
}

function browserProvider(): GamepadProvider {
  return {
    getGamepads: () =>
      typeof navigator !== 'undefined' && typeof navigator.getGamepads === 'function'
        ? navigator.getGamepads()
        : [],
  };
}

function browserScheduler(): FrameScheduler {
  return {
    request: (callback) => window.requestAnimationFrame(callback),
    cancel: (handle) => window.cancelAnimationFrame(handle),
  };
}

function browserEnvironment(): GamepadEnvironment {
  return {
    addEventListener: (type, listener) =>
      (type === 'visibilitychange' ? document : window).addEventListener(type, listener),
    removeEventListener: (type, listener) =>
      (type === 'visibilitychange' ? document : window).removeEventListener(type, listener),
    isVisible: () => document.visibilityState !== 'hidden',
  };
}

export interface GamepadAdapterOptions {
  provider?: GamepadProvider;
  scheduler?: FrameScheduler;
  environment?: GamepadEnvironment;
  mapping?: GamepadMapping;
  axisConfig?: AxisConfig;
}

/**
 * Adaptador da Gamepad API.
 *
 * Faz polling por `requestAnimationFrame` somente enquanto há gamepad conectado
 * e a página está visível. Emite mudanças apenas em transições de estado — o
 * React nunca é atualizado a cada frame.
 */
export class GamepadAdapter implements InputSource {
  private sink: RawInputSink | null = null;
  private frame: number | null = null;
  /** Chave `índice:jogador` → ações ativas (com o controle físico). */
  private state = new Map<string, Map<ArcadeAction, string>>();
  private readonly provider: GamepadProvider;
  private readonly scheduler: FrameScheduler;
  private readonly environment: GamepadEnvironment;
  private readonly mapping: GamepadMapping;
  private readonly axisConfig: AxisConfig;
  private readonly changeListeners = new Set<() => void>();

  constructor(options: GamepadAdapterOptions = {}) {
    this.provider = options.provider ?? browserProvider();
    this.scheduler = options.scheduler ?? browserScheduler();
    this.environment = options.environment ?? browserEnvironment();
    this.mapping = options.mapping ?? DEFAULT_GAMEPAD_MAPPING;
    this.axisConfig = options.axisConfig ?? DEFAULT_AXIS_CONFIG;
  }

  start(sink: RawInputSink): void {
    this.sink = sink;
    this.environment.addEventListener('gamepadconnected', this.handleConnection);
    this.environment.addEventListener('gamepaddisconnected', this.handleConnection);
    this.environment.addEventListener('visibilitychange', this.handleVisibility);
    this.ensurePolling();
  }

  stop(): void {
    this.environment.removeEventListener('gamepadconnected', this.handleConnection);
    this.environment.removeEventListener('gamepaddisconnected', this.handleConnection);
    this.environment.removeEventListener('visibilitychange', this.handleVisibility);
    this.stopPolling();
    this.releaseAll();
    this.sink = null;
  }

  releaseAll(): void {
    for (const [key, actions] of this.state) {
      const [index, player] = key.split(':').map(Number) as [number, PlayerNumber];
      for (const [action, control] of actions) this.emit(index, player, action, control, false);
    }
    this.state = new Map();
  }

  /** Notifica conexões/desconexões (usado pelo indicador de status). */
  onDevicesChanged(listener: () => void): () => void {
    this.changeListeners.add(listener);
    return () => this.changeListeners.delete(listener);
  }

  isPolling(): boolean {
    return this.frame !== null;
  }

  /** Executa uma leitura imediata (usado pelo loop e pelos testes). */
  poll(): void {
    const pads = this.connectedPads();
    const players = assignPlayers(pads);
    const next = new Map<string, Map<ArcadeAction, string>>();

    for (const pad of pads) {
      const player = players.get(pad.index);
      if (!player) continue;
      const key = `${pad.index}:${player}`;
      const previous = this.state.get(key) ?? new Map<ArcadeAction, string>();
      const actions = readGamepadActions(pad, new Set(previous.keys()), this.mapping, this.axisConfig);
      next.set(key, actions);
    }

    // Solta ações que deixaram de estar ativas (inclui desconexão e troca de jogador).
    for (const [key, actions] of this.state) {
      const [index, player] = key.split(':').map(Number) as [number, PlayerNumber];
      const current = next.get(key);
      for (const [action, control] of actions) {
        if (!current?.has(action)) this.emit(index, player, action, control, false);
      }
    }
    // Pressiona ações novas.
    for (const [key, actions] of next) {
      const [index, player] = key.split(':').map(Number) as [number, PlayerNumber];
      const previous = this.state.get(key);
      for (const [action, control] of actions) {
        if (!previous?.has(action)) this.emit(index, player, action, control, true);
      }
    }
    this.state = next;
  }

  getSnapshots(): GamepadSnapshot[] {
    const pads = this.connectedPads();
    const players = assignPlayers(pads);
    return pads.map((pad) => ({
      index: pad.index,
      id: summarizeGamepadId(pad.id),
      mapping: pad.mapping || 'desconhecido',
      player: players.get(pad.index) ?? null,
      buttonCount: pad.buttons.length,
      axisCount: pad.axes.length,
      pressedButtons: pad.buttons.flatMap((button, index) =>
        button.pressed || button.value >= this.axisConfig.buttonThreshold ? [index] : [],
      ),
      axes: pad.axes.map((value) => Math.round(value * 100) / 100),
      actions: [...readGamepadActions(pad, new Set(), this.mapping, this.axisConfig).keys()],
    }));
  }

  private connectedPads(): GamepadLike[] {
    let pads: ReadonlyArray<GamepadLike | null>;
    try {
      pads = this.provider.getGamepads() ?? [];
    } catch (error) {
      if (import.meta.env.DEV) console.warn('[SENAI Arcade] Falha ao ler gamepads:', error);
      pads = [];
    }
    return pads
      .filter((pad): pad is GamepadLike => pad !== null && pad !== undefined && pad.connected)
      .sort((a, b) => a.index - b.index);
  }

  private readonly handleConnection = (): void => {
    this.poll();
    this.ensurePolling();
    for (const listener of this.changeListeners) listener();
  };

  private readonly handleVisibility = (): void => {
    if (this.environment.isVisible()) {
      this.ensurePolling();
    } else {
      this.stopPolling();
      this.releaseAll();
    }
  };

  private ensurePolling(): void {
    if (this.frame !== null || !this.sink) return;
    if (!this.environment.isVisible() || this.connectedPads().length === 0) return;
    this.frame = this.scheduler.request(this.tick);
  }

  private stopPolling(): void {
    if (this.frame !== null) this.scheduler.cancel(this.frame);
    this.frame = null;
  }

  private readonly tick = (): void => {
    this.frame = null;
    this.poll();
    this.ensurePolling();
  };

  private emit(index: number, player: PlayerNumber, action: ArcadeAction, control: string, pressed: boolean): void {
    this.sink?.({
      source: 'gamepad',
      sourceId: `gamepad-${index}`,
      player,
      action,
      control,
      pressed,
    });
  }
}
