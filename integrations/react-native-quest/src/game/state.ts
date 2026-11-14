/**
 * Máquina de estados da versão fliperama (pura: o tempo chega nas ações).
 *
 * título → módulos → pergunta ⇄ resposta → resultado
 *
 * Ações de controle (as mesmas do protocolo do SENAI Arcade):
 *  - direções movem a seleção (no jogo, cada jogador tem o seu cursor);
 *  - confirm / action1 / start escolhem;
 *  - action2 / cancel voltam um passo nos menus;
 *  - back (sair para o launcher) é tratado fora daqui.
 */
import type { Question } from './questions';

export type PlayerNumber = 1 | 2;
export type Direction = 'up' | 'down' | 'left' | 'right';
export type GameAction = Direction | 'confirm' | 'action1' | 'start' | 'action2' | 'cancel';

export const QUESTION_COUNT = 8;
export const HEARTS = 3;
export const TIME_LIMIT_MS = { quiz: 20_000, match: 20_000, bug: 30_000 } as const;
/** Tempo mínimo mostrando a resposta antes de aceitar "próxima". */
export const REVEAL_MIN_MS = 1_200;
/** Depois disso a próxima pergunta vem sozinha. */
export const REVEAL_AUTO_MS = 20_000;
export const POINTS_CORRECT = 100;
export const POINTS_SPEED_MAX = 50;

/** Índice especial do "desafio misto" na lista de módulos. */
export const MIXED = 'misto';
export type ModuleChoice = number | typeof MIXED;

export interface PlayerRound {
  cursor: number;
  locked: number | null;
  lockedAt: number | null;
  /** Resultado da última resposta (na tela de resposta). */
  correct: boolean | null;
  gained: number;
  score: number;
  hits: number;
}

export type Screen = 'title' | 'modules' | 'question' | 'reveal' | 'results';

export interface GameState {
  screen: Screen;
  players: 1 | 2;
  titleIndex: number;
  moduleIndex: number;
  moduleChoices: ModuleChoice[];
  choice: ModuleChoice | null;
  questions: Question[];
  qIndex: number;
  startedAt: number;
  revealAt: number;
  hearts: number;
  round: [PlayerRound, PlayerRound];
  resultsIndex: number;
  /** Incrementa a cada partida concluída (o App usa para enviar o placar uma vez). */
  finishedMatches: number;
}

export type GameEvent =
  | { type: 'input'; player: PlayerNumber; action: GameAction; now: number }
  | { type: 'tick'; now: number };

export type DrawQuestions = (choice: ModuleChoice) => Question[];

const freshPlayer = (score = 0): PlayerRound => ({
  cursor: 0,
  locked: null,
  lockedAt: null,
  correct: null,
  gained: 0,
  score,
  hits: 0,
});

export function initialState(moduleIds: number[]): GameState {
  return {
    screen: 'title',
    players: 1,
    titleIndex: 0,
    moduleIndex: 0,
    moduleChoices: [...moduleIds, MIXED],
    choice: null,
    questions: [],
    qIndex: 0,
    startedAt: 0,
    revealAt: 0,
    hearts: HEARTS,
    round: [freshPlayer(), freshPlayer()],
    resultsIndex: 0,
    finishedMatches: 0,
  };
}

export const isSelect = (a: GameAction) => a === 'confirm' || a === 'action1' || a === 'start';
export const isBack = (a: GameAction) => a === 'action2' || a === 'cancel';
const isDirection = (a: GameAction): a is Direction => a === 'up' || a === 'down' || a === 'left' || a === 'right';

export const MODULE_COLUMNS = 4;
/** Alternativas em grade 2×2: 0 1 / 2 3. */
const OPTION_COLUMNS = 2;

function moveGrid(index: number, count: number, columns: number, dir: Direction): number {
  const row = Math.floor(index / columns);
  const col = index % columns;
  let next = index;
  if (dir === 'left' && col > 0) next = index - 1;
  if (dir === 'right' && col < columns - 1 && index + 1 < count) next = index + 1;
  if (dir === 'up' && row > 0) next = index - columns;
  if (dir === 'down' && index + columns < count) next = index + columns;
  if (dir === 'down' && index + columns >= count && row < Math.floor((count - 1) / columns)) next = count - 1;
  return next;
}

export function timeLimit(q: Question | undefined): number {
  return q ? TIME_LIMIT_MS[q.kind] : TIME_LIMIT_MS.quiz;
}

export function currentQuestion(state: GameState): Question | undefined {
  return state.questions[state.qIndex];
}

/** Índices (0 ou 0,1) dos jogadores ativos. */
const active = (state: GameState) => (state.players === 2 ? [0, 1] : [0]) as (0 | 1)[];

/** No modo solo, os controles dos dois lados do fliperama comandam o mesmo jogador. */
const seat = (state: GameState, player: PlayerNumber): 0 | 1 => (state.players === 2 && player === 2 ? 1 : 0);

function startMatch(state: GameState, choice: ModuleChoice, draw: DrawQuestions, now: number): GameState {
  return {
    ...state,
    screen: 'question',
    choice,
    questions: draw(choice),
    qIndex: 0,
    startedAt: now,
    hearts: HEARTS,
    round: [freshPlayer(), freshPlayer()],
    resultsIndex: 0,
  };
}

function resolve(state: GameState, now: number): GameState {
  const q = currentQuestion(state);
  if (!q) return state;
  const limit = timeLimit(q);
  let hearts = state.hearts;
  const round = state.round.map((p, i) => {
    if (!active(state).includes(i as 0 | 1)) return p;
    const correct = p.locked === q.correct;
    const remaining = p.lockedAt === null ? 0 : Math.max(0, limit - (p.lockedAt - state.startedAt));
    const gained = correct ? POINTS_CORRECT + Math.round((POINTS_SPEED_MAX * remaining) / limit) : 0;
    if (!correct && state.players === 1) hearts -= 1;
    return { ...p, correct, gained, score: p.score + gained, hits: p.hits + (correct ? 1 : 0) };
  }) as [PlayerRound, PlayerRound];
  return { ...state, screen: 'reveal', revealAt: now, round, hearts: Math.max(0, hearts) };
}

function advance(state: GameState, now: number): GameState {
  const last = state.qIndex + 1 >= state.questions.length;
  if (last || (state.players === 1 && state.hearts === 0)) {
    return { ...state, screen: 'results', resultsIndex: 0, finishedMatches: state.finishedMatches + 1 };
  }
  return {
    ...state,
    screen: 'question',
    qIndex: state.qIndex + 1,
    startedAt: now,
    round: state.round.map((p) => ({ ...freshPlayer(p.score), hits: p.hits })) as [PlayerRound, PlayerRound],
  };
}

export function reduce(state: GameState, event: GameEvent, draw: DrawQuestions): GameState {
  if (event.type === 'tick') {
    if (state.screen === 'question' && event.now - state.startedAt >= timeLimit(currentQuestion(state))) {
      return resolve(state, event.now);
    }
    if (state.screen === 'reveal' && event.now - state.revealAt >= REVEAL_AUTO_MS) {
      return advance(state, event.now);
    }
    return state;
  }

  const { action, now } = event;
  switch (state.screen) {
    case 'title': {
      if (action === 'up' || action === 'down') return { ...state, titleIndex: action === 'up' ? 0 : 1 };
      if (isSelect(action)) return { ...state, screen: 'modules', players: state.titleIndex === 0 ? 1 : 2 };
      return state;
    }

    case 'modules': {
      if (isDirection(action)) {
        const count = state.moduleChoices.length;
        return { ...state, moduleIndex: moveGrid(state.moduleIndex, count, MODULE_COLUMNS, action) };
      }
      if (isBack(action)) return { ...state, screen: 'title' };
      if (isSelect(action)) {
        const choice = state.moduleChoices[state.moduleIndex];
        return choice === undefined ? state : startMatch(state, choice, draw, now);
      }
      return state;
    }

    case 'question': {
      const q = currentQuestion(state);
      if (!q) return state;
      const i = seat(state, event.player);
      const player = state.round[i];
      if (player.locked !== null) return state;
      let next: PlayerRound = player;
      if (isDirection(action)) next = { ...player, cursor: moveGrid(player.cursor, q.options.length, OPTION_COLUMNS, action) };
      else if (isSelect(action)) next = { ...player, locked: player.cursor, lockedAt: now };
      else return state;
      const round = [...state.round] as [PlayerRound, PlayerRound];
      round[i] = next;
      const updated = { ...state, round };
      const everyoneLocked = active(updated).every((k) => updated.round[k].locked !== null);
      return everyoneLocked ? resolve(updated, now) : updated;
    }

    case 'reveal': {
      if (isSelect(action) && now - state.revealAt >= REVEAL_MIN_MS) return advance(state, now);
      return state;
    }

    case 'results': {
      if (action === 'up' || action === 'down') return { ...state, resultsIndex: action === 'up' ? 0 : 1 };
      if (isBack(action)) return { ...state, screen: 'modules' };
      if (isSelect(action)) {
        if (state.resultsIndex === 1 || state.choice === null) return { ...state, screen: 'modules' };
        return startMatch(state, state.choice, draw, now);
      }
      return state;
    }
  }
}

/** Resumo para a tela final e para a mensagem "score" do launcher. */
export function summary(state: GameState) {
  const total = state.questions.length;
  if (state.players === 1) {
    const p = state.round[0];
    return {
      players: 1 as const,
      scores: [{ player: 1 as const, value: p.score }],
      hits: [p.hits],
      total,
      guardianDefeated: state.hearts > 0 && p.hits > 0,
      winner: null,
    };
  }
  const [a, b] = state.round;
  return {
    players: 2 as const,
    scores: [
      { player: 1 as const, value: a.score },
      { player: 2 as const, value: b.score },
    ],
    hits: [a.hits, b.hits],
    total,
    guardianDefeated: false,
    winner: a.score === b.score ? null : a.score > b.score ? (1 as const) : (2 as const),
  };
}
