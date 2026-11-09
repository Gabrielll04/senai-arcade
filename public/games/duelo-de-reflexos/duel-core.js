// Regras puras do Duelo de Reflexos (sem DOM, sem timers) — testadas em src/test/duelCore.test.ts.

/** Pontos necessários para vencer (melhor de 5 rodadas decisivas). */
export const TARGET_SCORE = 3;
export const COUNTDOWN_FROM = 3;
/** Tempo após o fim da partida em que start/confirm ainda não reiniciam (evita reinício acidental). */
export const RESTART_LOCK_MS = 1000;

/**
 * @typedef {'intro' | 'countdown' | 'waiting' | 'go' | 'round-result' | 'final'} Phase
 * @typedef {1 | 2} Player
 * @typedef {'reaction' | 'false-start' | 'no-reaction'} RoundReason
 * @typedef {{
 *   phase: Phase,
 *   scores: { 1: number, 2: number },
 *   round: number,
 *   countdown: number,
 *   goAt: number | null,
 *   roundWinner: Player | null,
 *   roundReason: RoundReason | null,
 *   offender: Player | null,
 *   reactionMs: number | null,
 *   finishedAt: number | null,
 * }} DuelState
 */

/** @returns {DuelState} */
export function createState() {
  return {
    phase: 'intro',
    scores: { 1: 0, 2: 0 },
    round: 0,
    countdown: COUNTDOWN_FROM,
    goAt: null,
    roundWinner: null,
    roundReason: null,
    offender: null,
    reactionMs: null,
    finishedAt: null,
  };
}

/** @param {Player} player @returns {Player} */
export function opponent(player) {
  return player === 1 ? 2 : 1;
}

/** @param {DuelState} state @param {number} now */
export function canStart(state, now) {
  if (state.phase === 'intro') return true;
  return state.phase === 'final' && state.finishedAt !== null && now - state.finishedAt >= RESTART_LOCK_MS;
}

/** Inicia uma nova partida. @param {DuelState} state @param {number} now @returns {DuelState} */
export function startMatch(state, now) {
  if (!canStart(state, now)) return state;
  return beginRound({ ...createState(), round: 0 });
}

/** @param {DuelState} state @returns {DuelState} */
function beginRound(state) {
  return {
    ...state,
    phase: 'countdown',
    round: state.round + 1,
    countdown: COUNTDOWN_FROM,
    goAt: null,
    roundWinner: null,
    roundReason: null,
    offender: null,
    reactionMs: null,
  };
}

/** Avança a contagem regressiva; ao chegar a zero, entra em espera. @param {DuelState} state @returns {DuelState} */
export function tickCountdown(state) {
  if (state.phase !== 'countdown') return state;
  if (state.countdown > 1) return { ...state, countdown: state.countdown - 1 };
  return { ...state, phase: 'waiting', countdown: 0 };
}

/** O sinal "AGORA!" aparece. @param {DuelState} state @param {number} now @returns {DuelState} */
export function showSignal(state, now) {
  if (state.phase !== 'waiting') return state;
  return { ...state, phase: 'go', goAt: now };
}

/**
 * Um jogador apertou Ação 1.
 * - Antes do sinal: queimou a largada, o adversário ganha o ponto.
 * - Depois do sinal: o primeiro a apertar ganha o ponto.
 * @param {DuelState} state @param {Player} player @param {number} now @returns {DuelState}
 */
export function press(state, player, now) {
  if (state.phase === 'countdown' || state.phase === 'waiting') {
    const winner = opponent(player);
    return finishRound(state, winner, 'false-start', player, null);
  }
  if (state.phase === 'go') {
    const reaction = state.goAt === null ? null : Math.max(0, Math.round(now - state.goAt));
    return finishRound(state, player, 'reaction', null, reaction);
  }
  return state;
}

/** Ninguém reagiu a tempo: rodada sem ponto. @param {DuelState} state @returns {DuelState} */
export function noReaction(state) {
  if (state.phase !== 'go') return state;
  return { ...state, phase: 'round-result', roundWinner: null, roundReason: 'no-reaction', offender: null, reactionMs: null };
}

/**
 * @param {DuelState} state @param {Player} winner @param {RoundReason} reason
 * @param {Player | null} offender @param {number | null} reactionMs @returns {DuelState}
 */
function finishRound(state, winner, reason, offender, reactionMs) {
  const scores = { ...state.scores, [winner]: state.scores[winner] + 1 };
  return { ...state, phase: 'round-result', scores, roundWinner: winner, roundReason: reason, offender, reactionMs };
}

/** @param {DuelState} state @returns {Player | null} */
export function matchWinner(state) {
  if (state.scores[1] >= TARGET_SCORE) return 1;
  if (state.scores[2] >= TARGET_SCORE) return 2;
  return null;
}

/** Depois de mostrar o resultado da rodada: próxima rodada ou fim. @param {DuelState} state @param {number} now @returns {DuelState} */
export function nextRound(state, now) {
  if (state.phase !== 'round-result') return state;
  if (matchWinner(state) !== null) return { ...state, phase: 'final', finishedAt: now };
  return beginRound(state);
}

/** Intervalo aleatório até o sinal, em ms. @param {() => number} random */
export function randomSignalDelay(random = Math.random) {
  return 1200 + Math.floor(random() * 2800);
}
