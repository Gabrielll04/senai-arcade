/**
 * Tipos normalizados de entrada do SENAI Arcade.
 *
 * Componentes de interface e jogos consomem apenas estes tipos — nunca
 * `KeyboardEvent`, índices de botões ou eixos crus de gamepad.
 */

export type PlayerNumber = 1 | 2;

export type Direction = 'up' | 'down' | 'left' | 'right';

export type ArcadeAction =
  | Direction
  | 'confirm'
  | 'cancel'
  | 'start'
  | 'action1'
  | 'action2'
  | 'back'
  | 'help';

export type InputPhase = 'pressed' | 'released';

export type InputSourceKind = 'keyboard' | 'gamepad';

export interface ArcadeInputEvent {
  player: PlayerNumber;
  action: ArcadeAction;
  phase: InputPhase;
  source: InputSourceKind;
  /** Identifica o dispositivo: `keyboard` ou `gamepad-<índice>`. */
  sourceId: string;
  /** Controle físico que originou a ação (ex.: `KeyW`, `botão 0`, `eixo 1-`). Usado no diagnóstico. */
  control: string;
  /** `true` quando o evento é uma repetição direcional gerada pela aplicação. */
  repeat: boolean;
  timestamp: number;
}

/**
 * Mudança de estado crua reportada por um adaptador (teclado ou gamepad)
 * ao InputManager, já traduzida para ação normalizada.
 */
export interface RawInputChange {
  source: InputSourceKind;
  sourceId: string;
  player: PlayerNumber;
  action: ArcadeAction;
  control: string;
  pressed: boolean;
}

export type RawInputSink = (change: RawInputChange) => void;

/** Interface comum de adaptadores de entrada. */
export interface InputSource {
  start(sink: RawInputSink): void;
  stop(): void;
  /** Solta todos os controles conhecidos (perda de foco, aba oculta). */
  releaseAll(): void;
}

export const DIRECTIONS: readonly Direction[] = ['up', 'down', 'left', 'right'];

export function isDirection(action: ArcadeAction): action is Direction {
  return action === 'up' || action === 'down' || action === 'left' || action === 'right';
}

/** Ações que, nos menus, selecionam/abrem o item atual. */
export function isSelectAction(action: ArcadeAction): boolean {
  return action === 'confirm' || action === 'start' || action === 'action1';
}

/** Ações que, nos menus, voltam um nível. */
export function isBackAction(action: ArcadeAction): boolean {
  return action === 'cancel' || action === 'action2' || action === 'back';
}
