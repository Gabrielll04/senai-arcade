/**
 * Configuração central de mapeamento de entradas.
 *
 * Para adaptar o fliperama a outro encoder ou gamepad, altere APENAS este
 * arquivo. Nenhum componente de interface conhece teclas ou botões crus.
 *
 * Teclado: usamos `KeyboardEvent.code` (posição física da tecla) em vez de
 * `event.key`, para que o mapeamento não mude com o layout (ABNT2, US, etc.)
 * nem com Shift/CapsLock/NumLock. Encoders arcade USB que emulam teclado
 * devem ser programados para enviar estas teclas.
 */
import type { ArcadeAction, PlayerNumber } from './types';

export interface KeyBinding {
  player: PlayerNumber;
  action: ArcadeAction;
}

export const KEYBOARD_MAP: Readonly<Record<string, KeyBinding>> = {
  // Jogador 1
  KeyW: { player: 1, action: 'up' },
  KeyS: { player: 1, action: 'down' },
  KeyA: { player: 1, action: 'left' },
  KeyD: { player: 1, action: 'right' },
  KeyJ: { player: 1, action: 'action1' },
  KeyK: { player: 1, action: 'action2' },
  Enter: { player: 1, action: 'confirm' },
  Space: { player: 1, action: 'confirm' },
  Escape: { player: 1, action: 'back' },
  Backspace: { player: 1, action: 'back' },
  KeyH: { player: 1, action: 'help' },

  // Jogador 2
  ArrowUp: { player: 2, action: 'up' },
  ArrowDown: { player: 2, action: 'down' },
  ArrowLeft: { player: 2, action: 'left' },
  ArrowRight: { player: 2, action: 'right' },
  Numpad1: { player: 2, action: 'action1' },
  Numpad2: { player: 2, action: 'action2' },
  NumpadEnter: { player: 2, action: 'confirm' },
  Numpad0: { player: 2, action: 'back' },
};

export interface GamepadMapping {
  /** Índices de botões (layout "standard" da Gamepad API). */
  buttons: Readonly<Partial<Record<number, ArcadeAction>>>;
  /** Eixo analógico horizontal (negativo = esquerda). */
  axisX: number;
  /** Eixo analógico vertical (negativo = cima). */
  axisY: number;
}

export const DEFAULT_GAMEPAD_MAPPING: GamepadMapping = {
  buttons: {
    0: 'action1',
    1: 'action2',
    8: 'back',
    9: 'start',
    12: 'up',
    13: 'down',
    14: 'left',
    15: 'right',
  },
  axisX: 0,
  axisY: 1,
};

export interface AxisConfig {
  /** Valores com módulo abaixo disto são tratados como 0 (evita drift). */
  deadZone: number;
  /** Módulo a partir do qual o eixo vira uma direção pressionada. */
  pressThreshold: number;
  /** Módulo abaixo do qual uma direção já pressionada é solta (histerese). */
  releaseThreshold: number;
  /** Valor de botão analógico a partir do qual ele conta como pressionado. */
  buttonThreshold: number;
}

export const DEFAULT_AXIS_CONFIG: AxisConfig = {
  deadZone: 0.2,
  pressThreshold: 0.55,
  releaseThreshold: 0.4,
  buttonThreshold: 0.5,
};

export interface RepeatConfig {
  /** Atraso antes da primeira repetição de uma direção mantida (ms). */
  initialDelayMs: number;
  /** Intervalo entre repetições seguintes (ms). */
  intervalMs: number;
}

export const DEFAULT_REPEAT_CONFIG: RepeatConfig = {
  initialDelayMs: 280,
  intervalMs: 120,
};

/** Rótulos amigáveis, usados na ajuda e no diagnóstico. */
export const ACTION_LABELS: Readonly<Record<ArcadeAction, string>> = {
  up: 'Cima',
  down: 'Baixo',
  left: 'Esquerda',
  right: 'Direita',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  start: 'Start',
  action1: 'Ação 1',
  action2: 'Ação 2',
  back: 'Voltar',
  help: 'Ajuda',
};

const KEY_LABELS: Readonly<Record<string, string>> = {
  ArrowUp: '↑',
  ArrowDown: '↓',
  ArrowLeft: '←',
  ArrowRight: '→',
  Space: 'Espaço',
  Escape: 'Esc',
  Backspace: 'Backspace',
  Enter: 'Enter',
  NumpadEnter: 'Enter (num)',
};

export function keyLabel(code: string): string {
  const known = KEY_LABELS[code];
  if (known) return known;
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Numpad')) return `${code.slice(6)} (num)`;
  if (code.startsWith('Digit')) return code.slice(5);
  return code;
}

/** Lista de teclas que geram uma ação para um jogador (para exibir na ajuda). */
export function keysFor(player: PlayerNumber, action: ArcadeAction): string[] {
  return Object.entries(KEYBOARD_MAP)
    .filter(([, binding]) => binding.player === player && binding.action === action)
    .map(([code]) => keyLabel(code));
}

export function gamepadButtonsFor(action: ArcadeAction, mapping = DEFAULT_GAMEPAD_MAPPING): number[] {
  return Object.entries(mapping.buttons)
    .filter(([, mapped]) => mapped === action)
    .map(([index]) => Number(index));
}
