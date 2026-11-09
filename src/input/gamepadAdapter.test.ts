import { describe, expect, it } from 'vitest';
import {
  GamepadAdapter,
  applyDeadZone,
  assignPlayers,
  axisDirection,
  readGamepadActions,
  type FrameScheduler,
  type GamepadEnvironment,
  type GamepadLike,
} from './gamepadAdapter';
import { DEFAULT_AXIS_CONFIG } from './inputMap';
import type { RawInputChange } from './types';

function pad(index: number, options: { pressed?: number[]; axes?: number[]; values?: Record<number, number> } = {}): GamepadLike {
  return {
    index,
    id: `Pad de teste ${index}`,
    connected: true,
    mapping: 'standard',
    buttons: Array.from({ length: 17 }, (_, i) => ({
      pressed: options.pressed?.includes(i) ?? false,
      value: options.values?.[i] ?? (options.pressed?.includes(i) ? 1 : 0),
    })),
    axes: options.axes ?? [0, 0, 0, 0],
  };
}

class FakeEnvironment implements GamepadEnvironment {
  visible = true;
  listeners = new Map<string, Set<() => void>>();
  addEventListener(type: string, listener: () => void) {
    if (!this.listeners.has(type)) this.listeners.set(type, new Set());
    this.listeners.get(type)?.add(listener);
  }
  removeEventListener(type: string, listener: () => void) {
    this.listeners.get(type)?.delete(listener);
  }
  isVisible() {
    return this.visible;
  }
  fire(type: string) {
    for (const listener of this.listeners.get(type) ?? []) listener();
  }
}

class FakeScheduler implements FrameScheduler {
  queue = new Map<number, () => void>();
  next = 1;
  request(callback: () => void) {
    const id = this.next++;
    this.queue.set(id, callback);
    return id;
  }
  cancel(handle: number) {
    this.queue.delete(handle);
  }
  runFrame() {
    const callbacks = [...this.queue.values()];
    this.queue.clear();
    callbacks.forEach((cb) => cb());
  }
}

function setup(initial: (GamepadLike | null)[] = []) {
  let pads = initial;
  const environment = new FakeEnvironment();
  const scheduler = new FakeScheduler();
  const adapter = new GamepadAdapter({ provider: { getGamepads: () => pads }, scheduler, environment });
  const changes: RawInputChange[] = [];
  adapter.start((change) => changes.push(change));
  return {
    adapter,
    changes,
    environment,
    scheduler,
    setPads: (next: (GamepadLike | null)[]) => {
      pads = next;
    },
  };
}

describe('dead zone e limiar', () => {
  it('zera valores dentro da dead zone e valores inválidos', () => {
    expect(applyDeadZone(0.1, 0.2)).toBe(0);
    expect(applyDeadZone(-0.19, 0.2)).toBe(0);
    expect(applyDeadZone(0.3, 0.2)).toBe(0.3);
    expect(applyDeadZone(Number.NaN, 0.2)).toBe(0);
  });

  it('só vira direção acima do limiar e usa histerese para soltar', () => {
    const c = DEFAULT_AXIS_CONFIG;
    expect(axisDirection(0.3, false, false, c)).toBe(0); // drift
    expect(axisDirection(0.5, false, false, c)).toBe(0); // abaixo do limiar de pressão
    expect(axisDirection(0.6, false, false, c)).toBe(1);
    expect(axisDirection(-0.9, false, false, c)).toBe(-1);
    expect(axisDirection(0.45, false, true, c)).toBe(1); // mantém (histerese)
    expect(axisDirection(0.35, false, true, c)).toBe(0); // solta
  });
});

describe('readGamepadActions', () => {
  it('converte botões do layout padrão', () => {
    const actions = readGamepadActions(pad(0, { pressed: [0, 1, 8, 9, 12] }));
    expect([...actions.keys()].sort()).toEqual(['action1', 'action2', 'back', 'start', 'up']);
    expect(actions.get('action1')).toBe('botão 0');
  });

  it('converte o analógico esquerdo em direções', () => {
    expect([...readGamepadActions(pad(0, { axes: [-0.9, 0.8] })).keys()].sort()).toEqual(['down', 'left']);
    expect([...readGamepadActions(pad(0, { axes: [0.1, -0.15] })).keys()]).toEqual([]);
  });

  it('considera botões analógicos pelo valor', () => {
    expect(readGamepadActions(pad(0, { values: { 0: 0.8 } })).has('action1')).toBe(true);
    expect(readGamepadActions(pad(0, { values: { 0: 0.2 } })).has('action1')).toBe(false);
  });

  it('tolera gamepads com menos botões/eixos que o mapeamento', () => {
    const tiny: GamepadLike = { index: 0, id: 'x', connected: true, buttons: [{ pressed: true, value: 1 }], axes: [] };
    expect([...readGamepadActions(tiny).keys()]).toEqual(['action1']);
  });
});

describe('assignPlayers', () => {
  it('atribui jogadores pela ordem do índice, ignorando nulls e desconectados', () => {
    const disconnected = { ...pad(1), connected: false };
    const result = assignPlayers([null, disconnected, pad(3), pad(2), pad(5)]);
    expect([...result.entries()]).toEqual([
      [2, 1],
      [3, 2],
    ]);
  });

  it('retorna vazio sem gamepads', () => {
    expect(assignPlayers([null, null]).size).toBe(0);
  });
});

describe('GamepadAdapter', () => {
  it('emite apenas transições de estado', () => {
    const { adapter, changes, setPads } = setup([pad(0)]);
    adapter.poll();
    expect(changes).toHaveLength(0);
    setPads([pad(0, { pressed: [0] })]);
    adapter.poll();
    adapter.poll();
    adapter.poll();
    expect(changes).toEqual([
      { source: 'gamepad', sourceId: 'gamepad-0', player: 1, action: 'action1', control: 'botão 0', pressed: true },
    ]);
    setPads([pad(0)]);
    adapter.poll();
    expect(changes.at(-1)).toMatchObject({ action: 'action1', pressed: false });
  });

  it('separa jogador 1 e jogador 2', () => {
    const { adapter, changes, setPads } = setup();
    setPads([pad(0, { pressed: [0] }), pad(1, { pressed: [0] })]);
    adapter.poll();
    expect(changes.map((c) => [c.sourceId, c.player])).toEqual([
      ['gamepad-0', 1],
      ['gamepad-1', 2],
    ]);
  });

  it('solta ações ao desconectar sem quebrar (posições null)', () => {
    const { adapter, changes, setPads } = setup([pad(0, { pressed: [12] })]);
    adapter.poll();
    setPads([null]);
    expect(() => adapter.poll()).not.toThrow();
    expect(changes.at(-1)).toMatchObject({ action: 'up', pressed: false });
  });

  it('faz polling apenas com gamepad conectado e página visível', () => {
    const { adapter, environment, scheduler, setPads } = setup();
    expect(adapter.isPolling()).toBe(false);
    setPads([pad(0)]);
    environment.fire('gamepadconnected');
    expect(adapter.isPolling()).toBe(true);
    scheduler.runFrame();
    expect(adapter.isPolling()).toBe(true);

    environment.visible = false;
    environment.fire('visibilitychange');
    expect(adapter.isPolling()).toBe(false);

    environment.visible = true;
    environment.fire('visibilitychange');
    expect(adapter.isPolling()).toBe(true);

    setPads([null]);
    environment.fire('gamepaddisconnected');
    scheduler.runFrame();
    expect(adapter.isPolling()).toBe(false);
  });

  it('gera snapshots para o diagnóstico', () => {
    const { adapter } = setup([pad(4, { pressed: [1], axes: [0.123, -1, 0, 0] })]);
    const [snapshot] = adapter.getSnapshots();
    expect(snapshot).toMatchObject({
      index: 4,
      player: 1,
      buttonCount: 17,
      axisCount: 4,
      pressedButtons: [1],
      axes: [0.12, -1, 0, 0],
    });
    expect(snapshot?.actions.sort()).toEqual(['action2', 'up']);
  });

  it('não falha se o provedor lançar erro', () => {
    const adapter = new GamepadAdapter({
      provider: {
        getGamepads: () => {
          throw new Error('sem permissão');
        },
      },
      scheduler: new FakeScheduler(),
      environment: new FakeEnvironment(),
    });
    adapter.start(() => undefined);
    expect(() => adapter.poll()).not.toThrow();
    expect(adapter.getSnapshots()).toEqual([]);
  });
});
