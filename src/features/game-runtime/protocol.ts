import { z } from 'zod';
import type { ArcadeAction, InputPhase, PlayerNumber } from '../../input/types';

/**
 * Protocolo `senai-arcade` versão 1 entre launcher e jogos (iframe + postMessage).
 * Documentado em docs/ADDING-GAMES.md.
 */
export const PROTOCOL = 'senai-arcade';
export const PROTOCOL_VERSION = 1;

/**
 * Ações encaminhadas ao jogo. `back` é um pedido de saída: o jogo deve responder
 * com `exit`; se não responder rapidamente, o launcher encerra o jogo mesmo assim.
 * `help` nunca é encaminhada (é tratada pelo launcher).
 */
export const FORWARDED_ACTIONS = [
  'up',
  'down',
  'left',
  'right',
  'confirm',
  'cancel',
  'start',
  'action1',
  'action2',
  'back',
] as const satisfies readonly ArcadeAction[];

export type ForwardedAction = (typeof FORWARDED_ACTIONS)[number];

export function isForwardedAction(action: ArcadeAction): action is ForwardedAction {
  return (FORWARDED_ACTIONS as readonly ArcadeAction[]).includes(action);
}

export interface InputMessage {
  protocol: typeof PROTOCOL;
  version: typeof PROTOCOL_VERSION;
  type: 'input';
  payload: { player: PlayerNumber; action: ForwardedAction; phase: InputPhase };
}

export function inputMessage(player: PlayerNumber, action: ForwardedAction, phase: InputPhase): InputMessage {
  return { protocol: PROTOCOL, version: PROTOCOL_VERSION, type: 'input', payload: { player, action, phase } };
}

const envelope = { protocol: z.literal(PROTOCOL), version: z.literal(PROTOCOL_VERSION) };
const gameId = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(64);

const readyMessage = z.strictObject({
  ...envelope,
  type: z.literal('ready'),
  payload: z.strictObject({ gameId }),
});

const exitMessage = z.strictObject({
  ...envelope,
  type: z.literal('exit'),
  payload: z.strictObject({ reason: z.enum(['user-request', 'game-over', 'error']) }),
});

const scoreMessage = z.strictObject({
  ...envelope,
  type: z.literal('score'),
  payload: z.strictObject({
    gameId,
    scores: z
      .array(z.strictObject({ player: z.union([z.literal(1), z.literal(2)]), value: z.number().int().min(0).max(1_000_000) }))
      .min(1)
      .max(2),
  }),
});

export const gameMessageSchema = z.discriminatedUnion('type', [readyMessage, exitMessage, scoreMessage]);

export type GameMessage = z.infer<typeof gameMessageSchema>;
export type ScoreMessage = z.infer<typeof scoreMessage>;

/** Valida o formato de uma mensagem recebida do jogo. Retorna `null` se inválida. */
export function parseGameMessage(data: unknown): GameMessage | null {
  const result = gameMessageSchema.safeParse(data);
  return result.success ? result.data : null;
}

export interface MessageContext {
  /** `MessageEvent.origin` recebido. */
  origin: string;
  /** `MessageEvent.source` recebido. */
  source: unknown;
  /** Origem do launcher (`window.location.origin`). */
  expectedOrigin: string;
  /** `contentWindow` do iframe do jogo em execução. */
  expectedSource: unknown;
  /** ID do jogo em execução. */
  gameId: string;
}

/**
 * Validação completa de uma mensagem: janela de origem, origem, protocolo,
 * versão, tipo, payload e correspondência com o jogo em execução.
 */
export function acceptGameMessage(data: unknown, context: MessageContext): GameMessage | null {
  if (!context.expectedSource || context.source !== context.expectedSource) return null;
  if (context.origin !== context.expectedOrigin) return null;
  const message = parseGameMessage(data);
  if (!message) return null;
  if ((message.type === 'ready' || message.type === 'score') && message.payload.gameId !== context.gameId) return null;
  return message;
}
