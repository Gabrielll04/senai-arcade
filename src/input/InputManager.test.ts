import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { InputManager, resolveOpposites } from './InputManager';
import type { ArcadeInputEvent, InputSource, RawInputChange, RawInputSink } from './types';

class FakeSource implements InputSource {
  sink: RawInputSink | null = null;
  pressed = new Map<string, RawInputChange>();
  start(sink: RawInputSink) {
    this.sink = sink;
  }
  stop() {
    this.sink = null;
  }
  releaseAll() {
    for (const change of this.pressed.values()) this.sink?.({ ...change, pressed: false });
    this.pressed.clear();
  }
  send(partial: Partial<RawInputChange> & Pick<RawInputChange, 'action' | 'pressed'>) {
    const change: RawInputChange = {
      source: 'keyboard',
      sourceId: 'keyboard',
      player: 1,
      control: partial.action,
      ...partial,
    };
    const key = `${change.player}|${change.control}`;
    if (change.pressed) this.pressed.set(key, change);
    else this.pressed.delete(key);
    this.sink?.(change);
  }
}

function setup() {
  const source = new FakeSource();
  const focus = new EventTarget() as unknown as Window;
  const visibility = Object.assign(new EventTarget(), { visibilityState: 'visible' }) as unknown as Document;
  const manager = new InputManager({
    sources: [source],
    repeat: { initialDelayMs: 300, intervalMs: 100 },
    focusTarget: focus,
    visibilityTarget: visibility,
  });
  const events: ArcadeInputEvent[] = [];
  manager.subscribe((event) => events.push(event));
  manager.start();
  const summary = () => events.map((e) => `${e.player}:${e.action}:${e.phase}${e.repeat ? ':r' : ''}`);
  return { source, manager, events, focus, visibility, summary };
}

beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

describe('resolveOpposites', () => {
  it('cancela o eixo conflitante e mantém o restante', () => {
    expect([...resolveOpposites(['up', 'down', 'left', 'confirm'])].sort()).toEqual(['confirm', 'left']);
    expect([...resolveOpposites(['left', 'right'])]).toEqual([]);
  });
});

describe('InputManager', () => {
  it('processa a primeira direção imediatamente e repete com atraso controlado', () => {
    const { source, summary } = setup();
    source.send({ action: 'down', pressed: true });
    expect(summary()).toEqual(['1:down:pressed']);
    vi.advanceTimersByTime(299);
    expect(summary()).toHaveLength(1);
    vi.advanceTimersByTime(1);
    expect(summary()).toEqual(['1:down:pressed', '1:down:pressed:r']);
    vi.advanceTimersByTime(200);
    expect(summary()).toHaveLength(4);
    source.send({ action: 'down', pressed: false });
    vi.advanceTimersByTime(1000);
    expect(summary().at(-1)).toBe('1:down:released');
    expect(summary()).toHaveLength(5);
  });

  it('não repete confirm, cancel, start ou back enquanto pressionados', () => {
    const { source, summary } = setup();
    for (const action of ['confirm', 'cancel', 'start', 'back', 'action1'] as const) {
      source.send({ action, pressed: true });
    }
    vi.advanceTimersByTime(5000);
    expect(summary().filter((s) => s.endsWith(':r'))).toEqual([]);
    expect(summary()).toHaveLength(5);
  });

  it('resolve direções opostas do mesmo jogador cancelando o eixo', () => {
    const { source, summary } = setup();
    source.send({ action: 'up', pressed: true });
    source.send({ action: 'down', pressed: true });
    expect(summary()).toEqual(['1:up:pressed', '1:up:released']);
    source.send({ action: 'up', pressed: false });
    expect(summary().at(-1)).toBe('1:down:pressed');
  });

  it('não confunde direções de jogadores diferentes', () => {
    const { source, summary } = setup();
    source.send({ action: 'up', pressed: true, player: 1 });
    source.send({ action: 'down', pressed: true, player: 2 });
    expect(summary()).toEqual(['1:up:pressed', '2:down:pressed']);
  });

  it('duas teclas com a mesma ação só soltam quando ambas são soltas', () => {
    const { source, summary } = setup();
    source.send({ action: 'confirm', pressed: true, control: 'Enter' });
    source.send({ action: 'confirm', pressed: true, control: 'Space' });
    source.send({ action: 'confirm', pressed: false, control: 'Enter' });
    expect(summary()).toEqual(['1:confirm:pressed']);
    source.send({ action: 'confirm', pressed: false, control: 'Space' });
    expect(summary()).toEqual(['1:confirm:pressed', '1:confirm:released']);
  });

  it('limpa estados ao perder o foco e interrompe repetições', () => {
    const { source, focus, summary } = setup();
    source.send({ action: 'right', pressed: true });
    focus.dispatchEvent(new Event('blur'));
    expect(summary()).toEqual(['1:right:pressed', '1:right:released']);
    vi.advanceTimersByTime(2000);
    expect(summary()).toHaveLength(2);
  });

  it('limpa estados quando a página fica oculta', () => {
    const { source, visibility, summary } = setup();
    source.send({ action: 'left', pressed: true });
    (visibility as { visibilityState: string }).visibilityState = 'hidden';
    visibility.dispatchEvent(new Event('visibilitychange'));
    expect(summary().at(-1)).toBe('1:left:released');
  });

  it('cancela inscrição e isola erros de ouvintes', () => {
    const { source, manager, events } = setup();
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const unsubscribe = manager.subscribe(() => {
      throw new Error('falha');
    });
    source.send({ action: 'confirm', pressed: true });
    expect(events).toHaveLength(1);
    expect(errorSpy).toHaveBeenCalled();
    unsubscribe();
    expect(manager.listenerCount()).toBe(1);
  });

  it('stop solta tudo e para de emitir', () => {
    const { source, manager, summary } = setup();
    source.send({ action: 'up', pressed: true });
    manager.stop();
    expect(summary().at(-1)).toBe('1:up:released');
    source.send({ action: 'down', pressed: true });
    expect(summary()).toHaveLength(2);
  });
});
