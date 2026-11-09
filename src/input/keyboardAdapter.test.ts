import { describe, expect, it, vi } from 'vitest';
import { KeyboardAdapter, isEditableTarget, keyCodeToBinding } from './keyboardAdapter';
import type { RawInputChange } from './types';

function setup() {
  const target = new EventTarget() as unknown as Window;
  const adapter = new KeyboardAdapter(target);
  const changes: RawInputChange[] = [];
  adapter.start((change) => changes.push(change));
  const press = (code: string, init: KeyboardEventInit = {}) => {
    const event = new KeyboardEvent('keydown', { code, cancelable: true, ...init });
    target.dispatchEvent(event);
    return event;
  };
  const release = (code: string) => target.dispatchEvent(new KeyboardEvent('keyup', { code, cancelable: true }));
  return { target, adapter, changes, press, release };
}

describe('keyCodeToBinding', () => {
  it.each([
    ['KeyW', 1, 'up'],
    ['KeyS', 1, 'down'],
    ['KeyA', 1, 'left'],
    ['KeyD', 1, 'right'],
    ['KeyJ', 1, 'action1'],
    ['KeyK', 1, 'action2'],
    ['Enter', 1, 'confirm'],
    ['Space', 1, 'confirm'],
    ['Escape', 1, 'back'],
    ['Backspace', 1, 'back'],
    ['KeyH', 1, 'help'],
    ['ArrowUp', 2, 'up'],
    ['ArrowDown', 2, 'down'],
    ['ArrowLeft', 2, 'left'],
    ['ArrowRight', 2, 'right'],
    ['Numpad1', 2, 'action1'],
    ['Numpad2', 2, 'action2'],
    ['NumpadEnter', 2, 'confirm'],
    ['Numpad0', 2, 'back'],
  ])('%s → jogador %i, %s', (code, player, action) => {
    expect(keyCodeToBinding(code)).toEqual({ player, action });
  });

  it('retorna null para teclas não mapeadas e nomes herdados de Object', () => {
    expect(keyCodeToBinding('KeyZ')).toBeNull();
    expect(keyCodeToBinding('toString')).toBeNull();
    expect(keyCodeToBinding('')).toBeNull();
  });
});

describe('KeyboardAdapter', () => {
  it('emite pressionado e solto para teclas mapeadas, com preventDefault', () => {
    const { changes, press, release } = setup();
    const event = press('ArrowDown');
    release('ArrowDown');
    expect(event.defaultPrevented).toBe(true);
    expect(changes).toEqual([
      { source: 'keyboard', sourceId: 'keyboard', player: 2, action: 'down', control: 'ArrowDown', pressed: true },
      { source: 'keyboard', sourceId: 'keyboard', player: 2, action: 'down', control: 'ArrowDown', pressed: false },
    ]);
  });

  it('ignora keydown repetido pelo sistema operacional', () => {
    const { changes, press } = setup();
    press('Enter');
    press('Enter', { repeat: true });
    press('Enter'); // alguns sistemas não marcam repeat
    expect(changes.filter((c) => c.pressed)).toHaveLength(1);
  });

  it('não intercepta teclas não mapeadas', () => {
    const { changes, press } = setup();
    const event = press('KeyZ');
    expect(event.defaultPrevented).toBe(false);
    expect(changes).toHaveLength(0);
  });

  it('não intercepta teclas digitadas em campos de texto', () => {
    const target = new EventTarget() as unknown as Window;
    const adapter = new KeyboardAdapter(target);
    const sink = vi.fn();
    adapter.start(sink);
    const input = document.createElement('input');
    input.type = 'text';
    const event = new KeyboardEvent('keydown', { code: 'KeyW', cancelable: true });
    Object.defineProperty(event, 'target', { value: input });
    target.dispatchEvent(event);
    expect(sink).not.toHaveBeenCalled();
  });

  it('releaseAll solta todas as teclas pressionadas', () => {
    const { adapter, changes, press } = setup();
    press('KeyW');
    press('KeyJ');
    adapter.releaseAll();
    expect(changes.filter((c) => !c.pressed).map((c) => c.action).sort()).toEqual(['action1', 'up']);
  });

  it('escuta janelas adicionais e remove os listeners ao desanexar', () => {
    const { adapter, changes } = setup();
    const frameWindow = new EventTarget() as unknown as Window;
    const detach = adapter.attach(frameWindow);
    frameWindow.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyD' }));
    expect(changes).toHaveLength(1);
    detach();
    frameWindow.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyA' }));
    expect(changes).toHaveLength(1);
  });

  it('stop remove listeners', () => {
    const { adapter, changes, press } = setup();
    adapter.stop();
    press('KeyW');
    expect(changes).toHaveLength(0);
  });
});

describe('isEditableTarget', () => {
  it('identifica campos editáveis', () => {
    const text = document.createElement('input');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    expect(isEditableTarget(text)).toBe(true);
    expect(isEditableTarget(document.createElement('textarea'))).toBe(true);
    expect(isEditableTarget(checkbox)).toBe(false);
    expect(isEditableTarget(document.createElement('button'))).toBe(false);
    expect(isEditableTarget(null)).toBe(false);
  });
});
