// Duelo de Reflexos — jogo de demonstração do SENAI Arcade.
// Recebe controles exclusivamente pelo protocolo postMessage "senai-arcade" v1;
// não registra listeners de teclado/gamepad próprios.
import {
  COUNTDOWN_FROM,
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
} from './duel-core.js';

const GAME_ID = 'duelo-de-reflexos';
const PROTOCOL = 'senai-arcade';
const VERSION = 1;
const COUNTDOWN_STEP_MS = 700;
const NO_REACTION_MS = 3000;
const ROUND_RESULT_MS = 2000;

const root = document.querySelector('.duel');
const ui = {
  round: document.querySelector('[data-round]'),
  signal: document.querySelector('[data-signal]'),
  message: document.querySelector('[data-message]'),
  prompt: document.querySelector('[data-prompt]'),
  score1: document.querySelector('[data-score="1"]'),
  score2: document.querySelector('[data-score="2"]'),
  player1: document.querySelector('.player--1'),
  player2: document.querySelector('.player--2'),
};

let state = createState();
const timers = new Set();
const isEmbedded = window.parent !== window;

// ---------- Timers (sempre rastreados para limpeza) ----------

function schedule(callback, ms) {
  const id = setTimeout(() => {
    timers.delete(id);
    callback();
  }, ms);
  timers.add(id);
}

function clearTimers() {
  for (const id of timers) clearTimeout(id);
  timers.clear();
}

// ---------- Protocolo ----------

function send(type, payload) {
  if (!isEmbedded) return;
  window.parent.postMessage({ protocol: PROTOCOL, version: VERSION, type, payload }, window.location.origin);
}

function isValidInput(data) {
  return (
    data !== null &&
    typeof data === 'object' &&
    data.protocol === PROTOCOL &&
    data.version === VERSION &&
    data.type === 'input' &&
    data.payload !== null &&
    typeof data.payload === 'object' &&
    (data.payload.player === 1 || data.payload.player === 2) &&
    typeof data.payload.action === 'string' &&
    (data.payload.phase === 'pressed' || data.payload.phase === 'released')
  );
}

function handleMessage(event) {
  // Aceita apenas o launcher: mesma origem e janela pai.
  if (event.origin !== window.location.origin || event.source !== window.parent) return;
  if (!isValidInput(event.data)) return;
  const { player, action, phase } = event.data.payload;
  if (phase !== 'pressed') return;
  handleAction(player, action);
}

// ---------- Fluxo do jogo ----------

function transition(next) {
  const previousPhase = state.phase;
  state = next;
  if (state.phase !== previousPhase || state.phase === 'countdown') enterPhase();
  render();
}

function enterPhase() {
  clearTimers();
  switch (state.phase) {
    case 'countdown':
      schedule(() => transition(tickCountdown(state)), COUNTDOWN_STEP_MS);
      break;
    case 'waiting':
      schedule(() => transition(showSignal(state, performance.now())), randomSignalDelay());
      break;
    case 'go':
      schedule(() => transition(noReaction(state)), NO_REACTION_MS);
      break;
    case 'round-result':
      schedule(() => transition(nextRound(state, performance.now())), ROUND_RESULT_MS);
      break;
    case 'final':
      send('score', {
        gameId: GAME_ID,
        scores: [
          { player: 1, value: state.scores[1] },
          { player: 2, value: state.scores[2] },
        ],
      });
      // Reabilita o reinício após o bloqueio anti-acidente.
      schedule(render, RESTART_LOCK_MS);
      break;
  }
}

function handleAction(player, action) {
  if (action === 'back') {
    exitGame();
    return;
  }
  const now = performance.now();
  if (action === 'start' || action === 'confirm') {
    if (canStart(state, now)) transition(startMatch(state, now));
    return;
  }
  if (action === 'action1') {
    transition(press(state, player, now));
  }
}

function exitGame() {
  clearTimers();
  send('exit', { reason: 'user-request' });
}

// ---------- Renderização ----------

function playerName(player) {
  return `Jogador ${player}`;
}

function render() {
  root.dataset.phase = state.phase;
  ui.score1.textContent = String(state.scores[1]);
  ui.score2.textContent = String(state.scores[2]);
  ui.player1.dataset.highlight = '';
  ui.player2.dataset.highlight = '';
  ui.round.textContent = state.round > 0 ? `Rodada ${state.round} · primeiro a ${TARGET_SCORE} pontos` : '';
  ui.signal.textContent = '';
  ui.message.textContent = '';
  ui.prompt.textContent = '';

  switch (state.phase) {
    case 'intro':
      ui.prompt.textContent = 'Pressione START (Enter) para começar';
      break;
    case 'countdown':
      ui.signal.textContent = String(state.countdown || COUNTDOWN_FROM);
      ui.message.textContent = 'Preparem-se…';
      break;
    case 'waiting':
      ui.signal.textContent = 'ESPERE…';
      ui.message.textContent = 'Não aperte antes do sinal!';
      break;
    case 'go':
      ui.signal.textContent = 'AGORA!';
      ui.message.textContent = 'Aperte Ação 1!';
      break;
    case 'round-result':
      renderRoundResult();
      break;
    case 'final': {
      const winner = matchWinner(state);
      ui.signal.textContent = winner ? `${playerName(winner)} venceu!` : 'Fim de jogo';
      ui.message.textContent = `Placar final: ${state.scores[1]} × ${state.scores[2]}`;
      if (winner) ui[`player${winner}`].dataset.highlight = 'win';
      ui.prompt.textContent = canStart(state, performance.now())
        ? 'START (Enter) joga de novo · Esc volta ao menu'
        : '';
      break;
    }
  }
}

function renderRoundResult() {
  if (state.roundReason === 'no-reaction') {
    ui.signal.textContent = 'Ninguém reagiu';
    ui.message.textContent = 'Rodada sem ponto.';
    return;
  }
  const winner = state.roundWinner;
  if (winner) ui[`player${winner}`].dataset.highlight = 'win';
  if (state.roundReason === 'false-start' && state.offender) {
    ui[`player${state.offender}`].dataset.highlight = 'foul';
    ui.signal.textContent = 'Queimou a largada!';
    ui.message.textContent = `${playerName(state.offender)} apertou antes do sinal. Ponto para ${playerName(winner)}.`;
    return;
  }
  ui.signal.textContent = `Ponto: ${playerName(winner)}!`;
  ui.message.textContent = state.reactionMs !== null ? `Tempo de reação: ${state.reactionMs} ms` : '';
}

// ---------- Inicialização e limpeza ----------

window.addEventListener('message', handleMessage);
window.addEventListener('pagehide', () => {
  clearTimers();
  window.removeEventListener('message', handleMessage);
});

render();
if (isEmbedded) {
  send('ready', { gameId: GAME_ID });
} else {
  document.querySelector('[data-standalone]').hidden = false;
}
