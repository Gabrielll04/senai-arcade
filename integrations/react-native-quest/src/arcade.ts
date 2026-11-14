/**
 * Ponte com o SENAI Arcade (protocolo "senai-arcade" v1, docs/ADDING-GAMES.md).
 *
 * Dentro do fliperama o launcher é dono do teclado/gamepad: as entradas chegam
 * por postMessage e este jogo não registra listeners de teclado.
 * Aberto direto no navegador (desenvolvimento), usa um teclado de reserva com
 * o mesmo mapeamento do launcher.
 */
import type { GameAction, PlayerNumber } from './game/state';

export const GAME_ID = 'react-native-quest';
const PROTOCOL = 'senai-arcade';
const VERSION = 1;

export const embedded = (() => {
  try {
    return window.parent !== window;
  } catch {
    return true;
  }
})();

const GAME_ACTIONS = new Set<string>(['up', 'down', 'left', 'right', 'confirm', 'action1', 'start', 'action2', 'cancel']);

export interface InputHandlers {
  onInput(player: PlayerNumber, action: GameAction): void;
  onBack(): void;
}

function send(type: string, payload: unknown) {
  if (!embedded) return;
  window.parent.postMessage({ protocol: PROTOCOL, version: VERSION, type, payload }, window.location.origin);
}

export const arcade = {
  ready: () => send('ready', { gameId: GAME_ID }),
  exit: () => send('exit', { reason: 'user-request' }),
  score: (scores: { player: 1 | 2; value: number }[]) =>
    send('score', {
      gameId: GAME_ID,
      scores: scores.map((s) => ({ player: s.player, value: Math.max(0, Math.min(1_000_000, Math.round(s.value))) })),
    }),
};

/** Valida e entrega as mensagens "input" do launcher (só "pressed"). */
export function listenToLauncher(handlers: InputHandlers): () => void {
  const onMessage = (event: MessageEvent) => {
    if (event.origin !== window.location.origin || event.source !== window.parent) return;
    const data = event.data as { protocol?: unknown; version?: unknown; type?: unknown; payload?: Record<string, unknown> };
    if (!data || data.protocol !== PROTOCOL || data.version !== VERSION || data.type !== 'input' || !data.payload) return;
    const { player, action, phase } = data.payload;
    if ((player !== 1 && player !== 2) || phase !== 'pressed' || typeof action !== 'string') return;
    if (action === 'back') handlers.onBack();
    else if (GAME_ACTIONS.has(action)) handlers.onInput(player, action as GameAction);
  };
  window.addEventListener('message', onMessage);
  return () => window.removeEventListener('message', onMessage);
}

/** Teclado de reserva para abrir o jogo fora do launcher (desenvolvimento). */
const DEV_KEYS: Record<string, [PlayerNumber, GameAction | 'back']> = {
  KeyW: [1, 'up'], KeyS: [1, 'down'], KeyA: [1, 'left'], KeyD: [1, 'right'],
  KeyJ: [1, 'action1'], KeyK: [1, 'action2'], Enter: [1, 'confirm'], Space: [1, 'confirm'], Escape: [1, 'back'],
  ArrowUp: [2, 'up'], ArrowDown: [2, 'down'], ArrowLeft: [2, 'left'], ArrowRight: [2, 'right'],
  Numpad1: [2, 'action1'], Numpad2: [2, 'action2'], NumpadEnter: [2, 'confirm'],
};

export function listenToDevKeyboard(handlers: InputHandlers): () => void {
  const onKey = (event: KeyboardEvent) => {
    const binding = DEV_KEYS[event.code];
    if (!binding || event.repeat) return;
    event.preventDefault();
    const [player, action] = binding;
    if (action === 'back') handlers.onBack();
    else handlers.onInput(player, action);
  };
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}
