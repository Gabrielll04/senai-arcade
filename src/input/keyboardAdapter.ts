import { KEYBOARD_MAP, type KeyBinding } from './inputMap';
import type { InputSource, RawInputSink } from './types';

/** Converte o `code` físico de uma tecla em ação normalizada (ou `null`). */
export function keyCodeToBinding(
  code: string,
  map: Readonly<Record<string, KeyBinding>> = KEYBOARD_MAP,
): KeyBinding | null {
  return Object.prototype.hasOwnProperty.call(map, code) ? (map[code] ?? null) : null;
}

/** Não intercepta teclas enquanto o usuário digita em um campo editável. */
export function isEditableTarget(target: EventTarget | null): boolean {
  if (!target || typeof (target as Partial<HTMLElement>).tagName !== 'string') return false;
  const element = target as HTMLElement;
  if (element.isContentEditable) return true;
  const tag = element.tagName;
  if (tag === 'TEXTAREA' || tag === 'SELECT') return true;
  if (tag === 'INPUT') {
    const type = (element as HTMLInputElement).type;
    return !['button', 'checkbox', 'radio', 'range', 'submit', 'reset', 'color'].includes(type);
  }
  return false;
}

type KeyTarget = Pick<Window, 'addEventListener' | 'removeEventListener'>;

/**
 * Adaptador de teclado (inclui encoders arcade USB que se apresentam como teclado HID).
 *
 * - Ignora `keydown` repetido pelo sistema operacional (`event.repeat` ou tecla já pressionada).
 * - Chama `preventDefault` em teclas mapeadas, evitando scroll e ativação nativa de botões.
 * - Pode escutar janelas adicionais (ex.: o iframe de mesma origem de um jogo) para
 *   não perder entradas se o foco for parar dentro do jogo.
 */
export class KeyboardAdapter implements InputSource {
  private sink: RawInputSink | null = null;
  private readonly pressed = new Map<string, KeyBinding>();
  private readonly targets = new Set<KeyTarget>();

  constructor(
    private readonly primaryTarget: KeyTarget,
    private readonly map: Readonly<Record<string, KeyBinding>> = KEYBOARD_MAP,
  ) {}

  start(sink: RawInputSink): void {
    this.sink = sink;
    this.listen(this.primaryTarget);
  }

  stop(): void {
    this.releaseAll();
    for (const target of [...this.targets]) this.unlisten(target);
    this.sink = null;
  }

  /** Escuta uma janela extra; retorna função para remover os listeners. */
  attach(target: KeyTarget): () => void {
    this.listen(target);
    return () => this.unlisten(target);
  }

  releaseAll(): void {
    for (const [code, binding] of [...this.pressed]) {
      this.pressed.delete(code);
      this.emit(code, binding, false);
    }
  }

  private listen(target: KeyTarget): void {
    if (this.targets.has(target)) return;
    this.targets.add(target);
    target.addEventListener('keydown', this.handleKeyDown, true);
    target.addEventListener('keyup', this.handleKeyUp, true);
  }

  private unlisten(target: KeyTarget): void {
    if (!this.targets.delete(target)) return;
    target.removeEventListener('keydown', this.handleKeyDown, true);
    target.removeEventListener('keyup', this.handleKeyUp, true);
  }

  private readonly handleKeyDown = (event: Event): void => {
    const keyEvent = event as KeyboardEvent;
    if (isEditableTarget(keyEvent.target)) return;
    const binding = keyCodeToBinding(keyEvent.code, this.map);
    if (!binding) return;
    keyEvent.preventDefault();
    if (keyEvent.repeat || this.pressed.has(keyEvent.code)) return;
    this.pressed.set(keyEvent.code, binding);
    this.emit(keyEvent.code, binding, true);
  };

  private readonly handleKeyUp = (event: Event): void => {
    const keyEvent = event as KeyboardEvent;
    const binding = this.pressed.get(keyEvent.code);
    if (!binding) return;
    keyEvent.preventDefault();
    this.pressed.delete(keyEvent.code);
    this.emit(keyEvent.code, binding, false);
  };

  private emit(code: string, binding: KeyBinding, pressed: boolean): void {
    this.sink?.({
      source: 'keyboard',
      sourceId: 'keyboard',
      player: binding.player,
      action: binding.action,
      control: code,
      pressed,
    });
  }
}
