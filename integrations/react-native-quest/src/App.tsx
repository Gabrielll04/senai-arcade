import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { arcade, embedded, listenToDevKeyboard, listenToLauncher } from './arcade';
import { QUEST_CONTENT, QUEST_MODULES } from './game/content';
import { buildMatch } from './game/questions';
import { createRng } from './game/rng';
import {
  MIXED,
  QUESTION_COUNT,
  currentQuestion,
  initialState,
  reduce,
  summary,
  timeLimit,
  type GameAction,
  type GameEvent,
  type GameState,
  type ModuleChoice,
} from './game/state';
import { playSound, preloadSounds, stopSounds } from './sound';
import { ModulesScreen } from './ui/ModulesScreen';
import { QuestionScreen } from './ui/QuestionScreen';
import { ResultsScreen } from './ui/ResultsScreen';
import { TitleScreen } from './ui/TitleScreen';

const TICK_MS = 200;

const draw = (choice: ModuleChoice) =>
  buildMatch(QUEST_CONTENT, choice === MIXED ? null : choice, QUESTION_COUNT, createRng(Date.now()));

const reducer = (state: GameState, event: GameEvent) => reduce(state, event, draw);

function guardianName(choice: ModuleChoice | null): string | null {
  if (choice === null || choice === MIXED) return 'Guardião Supremo';
  const boss = QUEST_CONTENT.stations[`m${choice}_boss`] as { bossName?: string } | undefined;
  return boss?.bossName ?? null;
}

function moduleName(choice: ModuleChoice | null, moduleId: number | undefined): string {
  if (choice === MIXED) {
    const m = QUEST_MODULES.find((x) => x.id === moduleId);
    return m ? `Desafio misto · ${m.name}` : 'Desafio misto';
  }
  return QUEST_MODULES.find((m) => m.id === choice)?.name ?? '';
}

export function App() {
  const [state, dispatch] = useReducer(reducer, QUEST_MODULES.map((m) => m.id), initialState);
  const [now, setNow] = useState(() => performance.now());
  const exited = useRef(false);

  const exit = useCallback(() => {
    if (exited.current) return;
    exited.current = true;
    stopSounds();
    arcade.exit();
  }, []);

  // Entradas: launcher (fliperama) ou teclado de reserva (desenvolvimento).
  useEffect(() => {
    const handlers = {
      onInput: (player: 1 | 2, action: GameAction) => {
        if (exited.current) return;
        dispatch({ type: 'input', player, action, now: performance.now() });
      },
      onBack: exit,
    };
    return embedded ? listenToLauncher(handlers) : listenToDevKeyboard(handlers);
  }, [exit]);

  // Relógio da partida: só roda durante pergunta/resposta.
  const timed = state.screen === 'question' || state.screen === 'reveal';
  useEffect(() => {
    if (!timed) return undefined;
    const timer = setInterval(() => {
      if (exited.current) return;
      const t = performance.now();
      setNow(t);
      dispatch({ type: 'tick', now: t });
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [timed]);

  // Pronto para receber entradas.
  useEffect(() => {
    preloadSounds();
    arcade.ready();
  }, []);

  // Sons nas transições (o feedback também é sempre visual).
  const previous = useRef(state);
  useEffect(() => {
    const before = previous.current;
    previous.current = state;
    if (state.screen === 'reveal' && before.screen !== 'reveal') {
      const anyCorrect = state.round.slice(0, state.players).some((p) => p.correct);
      playSound(anyCorrect ? 'correct' : 'wrong');
    } else if (state.screen === 'results' && before.screen !== 'results') {
      const s = summary(state);
      playSound(s.players === 1 && !s.guardianDefeated ? 'boss' : 'achievement');
    } else if (
      state.titleIndex !== before.titleIndex ||
      state.moduleIndex !== before.moduleIndex ||
      state.resultsIndex !== before.resultsIndex ||
      (state.screen !== before.screen && state.screen !== 'question')
    ) {
      playSound('click');
    }
  }, [state]);

  // Placar final para o launcher (uma vez por partida).
  const sentMatches = useRef(0);
  useEffect(() => {
    if (state.finishedMatches > sentMatches.current) {
      sentMatches.current = state.finishedMatches;
      arcade.score(summary(state).scores);
    }
  }, [state]);

  const question = currentQuestion(state);
  switch (state.screen) {
    case 'title':
      return <TitleScreen index={state.titleIndex} />;
    case 'modules':
      return <ModulesScreen choices={state.moduleChoices} index={state.moduleIndex} players={state.players} />;
    case 'results':
      return <ResultsScreen state={state} guardian={guardianName(state.choice)} />;
    default:
      if (!question) return null;
      return (
        <QuestionScreen
          state={state}
          question={question}
          moduleName={moduleName(state.choice, question.moduleId)}
          guardian={guardianName(state.choice)}
          timeLeft={Math.max(0, 1 - (now - state.startedAt) / timeLimit(question))}
        />
      );
  }
}
