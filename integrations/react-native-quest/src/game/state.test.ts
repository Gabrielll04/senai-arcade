import { describe, expect, it } from 'vitest';
import type { Question } from './questions';
import {
  HEARTS,
  MIXED,
  POINTS_CORRECT,
  POINTS_SPEED_MAX,
  REVEAL_AUTO_MS,
  REVEAL_MIN_MS,
  TIME_LIMIT_MS,
  initialState,
  reduce,
  summary,
  type GameAction,
  type GameState,
  type ModuleChoice,
  type PlayerNumber,
} from './state';

const q = (id: string, correct = 0): Question => ({
  id,
  kind: 'quiz',
  moduleId: 1,
  prompt: id,
  options: ['A', 'B', 'C', 'D'],
  correct,
  codeOptions: false,
  explanation: '',
});

const drawCalls: ModuleChoice[] = [];
const draw = (choice: ModuleChoice) => {
  drawCalls.push(choice);
  return [q('q1', 0), q('q2', 3), q('q3', 1)];
};

function play(state: GameState, steps: Array<[PlayerNumber, GameAction, number]>) {
  return steps.reduce((s, [player, action, now]) => reduce(s, { type: 'input', player, action, now }, draw), state);
}

function inQuestion(players: 1 | 2): GameState {
  const s = initialState([1, 2, 3, 4, 5, 6]);
  return play(s, [
    [1, players === 2 ? 'down' : 'up', 0],
    [1, 'confirm', 0],
    [1, 'confirm', 1000], // primeiro módulo
  ]);
}

describe('menus', () => {
  it('título escolhe 1 ou 2 jogadores e abre os módulos', () => {
    const s = initialState([1, 2, 3, 4, 5, 6]);
    expect(play(s, [[1, 'action1', 0]])).toMatchObject({ screen: 'modules', players: 1 });
    expect(play(s, [[2, 'down', 0], [2, 'start', 0]])).toMatchObject({ screen: 'modules', players: 2 });
  });

  it('módulos: grade com 6 módulos + misto, B volta ao título', () => {
    let s = play(initialState([1, 2, 3, 4, 5, 6]), [[1, 'confirm', 0]]);
    expect(s.moduleChoices).toEqual([1, 2, 3, 4, 5, 6, MIXED]);
    s = play(s, [[1, 'right', 0], [1, 'down', 0]]);
    expect(s.moduleIndex).toBe(5);
    s = play(s, [[1, 'right', 0], [1, 'right', 0], [1, 'right', 0]]);
    expect(s.moduleIndex).toBe(6); // não passa do último
    s = play(s, [[1, 'confirm', 500]]);
    expect(drawCalls.at(-1)).toBe(MIXED);
    expect(s).toMatchObject({ screen: 'question', choice: MIXED, startedAt: 500 });
    expect(play(initialState([1]), [[1, 'confirm', 0], [1, 'action2', 0]]).screen).toBe('title');
  });
});

describe('solo contra o Guardião', () => {
  it('acerto rápido vale mais; erro custa um coração', () => {
    let s = inQuestion(1);
    s = play(s, [[1, 'confirm', 1000]]); // trava "A" na hora (correta)
    expect(s.screen).toBe('reveal');
    expect(s.round[0]).toMatchObject({ correct: true, gained: POINTS_CORRECT + POINTS_SPEED_MAX, hits: 1 });
    // "próxima" só depois do tempo mínimo
    expect(play(s, [[1, 'confirm', 1000 + REVEAL_MIN_MS - 1]]).screen).toBe('reveal');
    s = play(s, [[1, 'confirm', 1000 + REVEAL_MIN_MS]]);
    expect(s).toMatchObject({ screen: 'question', qIndex: 1 });
    s = play(s, [[1, 'confirm', 5000]]); // trava "A", mas a correta é "D"
    expect(s.round[0].correct).toBe(false);
    expect(s.hearts).toBe(HEARTS - 1);
  });

  it('o lado do jogador 2 também comanda o jogador solo', () => {
    let s = inQuestion(1);
    s = play(s, [[2, 'right', 1100]]);
    expect(s.round[0].cursor).toBe(1);
  });

  it('tempo esgotado conta como erro', () => {
    let s = inQuestion(1);
    s = reduce(s, { type: 'tick', now: 1000 + TIME_LIMIT_MS.quiz }, draw);
    expect(s.screen).toBe('reveal');
    expect(s.round[0].correct).toBe(false);
    expect(s.hearts).toBe(HEARTS - 1);
    s = reduce(s, { type: 'tick', now: 1000 + TIME_LIMIT_MS.quiz + REVEAL_AUTO_MS }, draw);
    expect(s.screen).toBe('question');
  });

  it('sem corações a partida termina; com corações, o Guardião é derrotado', () => {
    let s = inQuestion(1);
    let now = 1000;
    for (let i = 0; i < HEARTS; i += 1) {
      s = play(s, [[1, 'down', now], [1, 'confirm', now]]); // sempre "C" (nunca é a correta)
      now += REVEAL_MIN_MS;
      s = play(s, [[1, 'confirm', now]]);
    }
    expect(s.screen).toBe('results');
    expect(summary(s).guardianDefeated).toBe(false);

    let w = inQuestion(1);
    for (const target of [0, 3, 1]) {
      const moves: Array<[PlayerNumber, GameAction, number]> =
        target === 3 ? [[1, 'right', now], [1, 'down', now]] : target === 1 ? [[1, 'right', now]] : [];
      w = play(w, [...moves, [1, 'confirm', now]]);
      now += REVEAL_MIN_MS;
      w = play(w, [[1, 'confirm', now]]);
    }
    expect(w.screen).toBe('results');
    expect(w.finishedMatches).toBe(1);
    expect(summary(w)).toMatchObject({ guardianDefeated: true, hits: [3], total: 3 });
  });
});

describe('dois jogadores', () => {
  it('cada jogador tem seu cursor e a resposta abre quando os dois travam', () => {
    let s = inQuestion(2);
    s = play(s, [[1, 'confirm', 2000], [2, 'right', 2000]]);
    expect(s.screen).toBe('question');
    expect(s.round[0].locked).toBe(0);
    expect(s.round[1].cursor).toBe(1);
    // jogador 1 travado não muda mais
    s = play(s, [[1, 'right', 2100]]);
    expect(s.round[0].cursor).toBe(0);
    s = play(s, [[2, 'confirm', 9000]]);
    expect(s.screen).toBe('reveal');
    expect(s.round[0].correct).toBe(true);
    expect(s.round[1].correct).toBe(false);
    expect(s.hearts).toBe(HEARTS); // sem corações no modo dupla
  });

  it('mostra o vencedor e permite jogar de novo ou trocar de módulo', () => {
    let s = inQuestion(2);
    let now = 1000;
    for (let i = 0; i < 3; i += 1) {
      s = play(s, [[1, 'confirm', now], [2, 'confirm', now]]);
      now += REVEAL_MIN_MS;
      s = play(s, [[1, 'confirm', now]]);
    }
    expect(s.screen).toBe('results');
    // Os dois sempre marcam "A" ao mesmo tempo: mesmos pontos, empate.
    expect(summary(s).winner).toBeNull();
    expect(summary(s).scores.map((x) => x.player)).toEqual([1, 2]);
    expect(play(s, [[1, 'down', now], [1, 'confirm', now]]).screen).toBe('modules');
    const again = play(s, [[1, 'confirm', now + 1]]);
    expect(again).toMatchObject({ screen: 'question', qIndex: 0, round: [{ score: 0 }, { score: 0 }] });
  });
});
