import { describe, expect, it } from 'vitest';
import {
  RESTART_LOCK_MS,
  TARGET_SCORE,
  canStart,
  createState,
  matchWinner,
  nextRound,
  noReaction,
  press,
  randomSignalDelay,
  showSignal,
  startMatch,
  tickCountdown,
} from '../../public/games/duelo-de-reflexos/duel-core.js';

type State = ReturnType<typeof createState>;

function toSignal(state: State, at = 1000): State {
  let s = state;
  while (s.phase === 'countdown') s = tickCountdown(s);
  return showSignal(s, at);
}

describe('Duelo de Reflexos — regras', () => {
  it('começa na introdução e só inicia com start', () => {
    const s = createState();
    expect(s.phase).toBe('intro');
    const started = startMatch(s, 0);
    expect(started).toMatchObject({ phase: 'countdown', round: 1, countdown: 3 });
  });

  it('contagem regressiva leva à espera e depois ao sinal', () => {
    let s = startMatch(createState(), 0);
    s = tickCountdown(s);
    expect(s.countdown).toBe(2);
    s = tickCountdown(tickCountdown(s));
    expect(s.phase).toBe('waiting');
    s = showSignal(s, 500);
    expect(s).toMatchObject({ phase: 'go', goAt: 500 });
  });

  it('o primeiro a apertar após o sinal ganha o ponto e registra o tempo de reação', () => {
    let s = toSignal(startMatch(createState(), 0), 1000);
    s = press(s, 2, 1234.4);
    expect(s).toMatchObject({ phase: 'round-result', roundWinner: 2, roundReason: 'reaction', reactionMs: 234 });
    expect(s.scores).toEqual({ 1: 0, 2: 1 });
    // O segundo aperto não muda nada.
    expect(press(s, 1, 1300)).toBe(s);
  });

  it('apertar antes do sinal queima a largada e dá o ponto ao adversário', () => {
    let s = startMatch(createState(), 0);
    s = tickCountdown(tickCountdown(tickCountdown(s)));
    expect(s.phase).toBe('waiting');
    s = press(s, 1, 10);
    expect(s).toMatchObject({ roundWinner: 2, roundReason: 'false-start', offender: 1 });
    expect(s.scores).toEqual({ 1: 0, 2: 1 });
  });

  it('apertar durante a contagem também é queimar a largada', () => {
    const s = press(startMatch(createState(), 0), 2, 5);
    expect(s).toMatchObject({ roundWinner: 1, roundReason: 'false-start', offender: 2 });
  });

  it('se ninguém reagir, a rodada não dá ponto', () => {
    const s = noReaction(toSignal(startMatch(createState(), 0)));
    expect(s).toMatchObject({ phase: 'round-result', roundWinner: null, roundReason: 'no-reaction' });
    expect(s.scores).toEqual({ 1: 0, 2: 0 });
  });

  it(`a partida termina quando alguém chega a ${TARGET_SCORE} pontos e bloqueia reinício imediato`, () => {
    let s = startMatch(createState(), 0);
    for (let round = 1; round <= TARGET_SCORE; round += 1) {
      s = press(toSignal(s), 1, 2000);
      s = nextRound(s, 5000);
    }
    expect(s.phase).toBe('final');
    expect(matchWinner(s)).toBe(1);
    expect(s.scores).toEqual({ 1: 3, 2: 0 });
    expect(canStart(s, 5000 + RESTART_LOCK_MS - 1)).toBe(false);
    expect(startMatch(s, 5000)).toBe(s);
    const restarted = startMatch(s, 5000 + RESTART_LOCK_MS);
    expect(restarted).toMatchObject({ phase: 'countdown', round: 1, scores: { 1: 0, 2: 0 } });
  });

  it('próxima rodada incrementa o contador enquanto ninguém venceu', () => {
    let s = press(toSignal(startMatch(createState(), 0)), 2, 1500);
    s = nextRound(s, 3000);
    expect(s).toMatchObject({ phase: 'countdown', round: 2, roundWinner: null });
  });

  it('ignora start durante a partida', () => {
    const s = startMatch(createState(), 0);
    expect(startMatch(s, 100)).toBe(s);
  });

  it('o intervalo até o sinal é aleatório dentro de limites', () => {
    expect(randomSignalDelay(() => 0)).toBe(1200);
    expect(randomSignalDelay(() => 0.999)).toBeLessThan(4000);
  });
});
