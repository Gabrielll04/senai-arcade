import { describe, expect, it } from 'vitest';
import { acceptGameMessage, inputMessage, isForwardedAction, parseGameMessage } from './protocol';

const frame = {};
const context = {
  origin: 'http://127.0.0.1',
  source: frame,
  expectedOrigin: 'http://127.0.0.1',
  expectedSource: frame,
  gameId: 'duelo-de-reflexos',
};
const ready = { protocol: 'senai-arcade', version: 1, type: 'ready', payload: { gameId: 'duelo-de-reflexos' } };
const exit = { protocol: 'senai-arcade', version: 1, type: 'exit', payload: { reason: 'user-request' } };
const score = {
  protocol: 'senai-arcade',
  version: 1,
  type: 'score',
  payload: {
    gameId: 'duelo-de-reflexos',
    scores: [
      { player: 1, value: 3 },
      { player: 2, value: 2 },
    ],
  },
};

describe('parseGameMessage', () => {
  it('aceita ready, exit e score válidos', () => {
    expect(parseGameMessage(ready)?.type).toBe('ready');
    expect(parseGameMessage(exit)?.type).toBe('exit');
    expect(parseGameMessage(score)?.type).toBe('score');
  });

  it.each([
    ['nulo', null],
    ['string', 'ready'],
    ['protocolo errado', { ...ready, protocol: 'outro' }],
    ['versão errada', { ...ready, version: 2 }],
    ['tipo desconhecido', { ...ready, type: 'navigate' }],
    ['payload ausente', { protocol: 'senai-arcade', version: 1, type: 'ready' }],
    ['gameId inseguro', { ...ready, payload: { gameId: '../x' } }],
    ['campo extra (url)', { ...ready, payload: { gameId: 'duelo-de-reflexos', url: 'https://exemplo.com' } }],
    ['campo extra no envelope', { ...exit, url: 'https://exemplo.com' }],
    ['motivo de saída inválido', { ...exit, payload: { reason: 'qualquer' } }],
    ['jogador inválido', { ...score, payload: { ...score.payload, scores: [{ player: 3, value: 1 }] } }],
    ['pontuação negativa', { ...score, payload: { ...score.payload, scores: [{ player: 1, value: -1 }] } }],
    ['pontuação não numérica', { ...score, payload: { ...score.payload, scores: [{ player: 1, value: '3' }] } }],
    ['lista vazia', { ...score, payload: { ...score.payload, scores: [] } }],
  ])('rejeita mensagem com %s', (_, data) => {
    expect(parseGameMessage(data)).toBeNull();
  });
});

describe('acceptGameMessage', () => {
  it('aceita mensagem da janela e origem esperadas', () => {
    expect(acceptGameMessage(ready, context)?.type).toBe('ready');
  });

  it('rejeita outra janela de origem', () => {
    expect(acceptGameMessage(ready, { ...context, source: {} })).toBeNull();
    expect(acceptGameMessage(ready, { ...context, source: null, expectedSource: null })).toBeNull();
  });

  it('rejeita outra origem', () => {
    expect(acceptGameMessage(ready, { ...context, origin: 'https://exemplo.com' })).toBeNull();
    expect(acceptGameMessage(ready, { ...context, origin: 'null' })).toBeNull();
  });

  it('rejeita ready/score de outro jogo', () => {
    expect(acceptGameMessage(ready, { ...context, gameId: 'outro-jogo' })).toBeNull();
    expect(acceptGameMessage(score, { ...context, gameId: 'outro-jogo' })).toBeNull();
  });
});

describe('mensagens para o jogo', () => {
  it('monta a mensagem de entrada versionada', () => {
    expect(inputMessage(2, 'action1', 'pressed')).toEqual({
      protocol: 'senai-arcade',
      version: 1,
      type: 'input',
      payload: { player: 2, action: 'action1', phase: 'pressed' },
    });
  });

  it('não encaminha a ação de ajuda', () => {
    expect(isForwardedAction('help')).toBe(false);
    expect(isForwardedAction('action1')).toBe(true);
    expect(isForwardedAction('back')).toBe(true);
  });
});
