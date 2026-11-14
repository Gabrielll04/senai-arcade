import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { ControlHints } from '../../components/ControlHints/ControlHints';
import { HINTS } from '../../components/ControlHints/hints';
import { useArcadeInput, useInputServices } from '../../input/InputContext';
import { isBackAction, isSelectAction, type ArcadeInputEvent } from '../../input/types';
import type { Game } from '../catalog/schema';
import { acceptGameMessage, inputMessage, isForwardedAction, type ScoreMessage } from './protocol';
import './GameRuntime.css';

export const DEFAULT_HANDSHAKE_TIMEOUT_MS = 8000;
export const DEFAULT_EXIT_FALLBACK_MS = 600;

type ErrorReason = 'not-found' | 'timeout' | 'load-failed';
type Status = { kind: 'loading' } | { kind: 'running' } | { kind: 'error'; reason: ErrorReason };

const ERROR_TEXT: Record<ErrorReason, string> = {
  'not-found': 'Os arquivos deste jogo não foram encontrados no fliperama.',
  timeout: 'O jogo não respondeu a tempo. Ele pode estar com defeito.',
  'load-failed': 'Ocorreu uma falha ao carregar o jogo.',
};

type ErrorAction = 'back' | 'retry';

interface GameRuntimeProps {
  game: Game;
  onExit: () => void;
  onRetry: () => void;
  inputEnabled: boolean;
  handshakeTimeoutMs?: number;
  exitFallbackMs?: number;
}

/**
 * Executa um jogo local em iframe e fala com ele pelo protocolo `senai-arcade` v1.
 *
 * - O launcher continua dono dos controles: encaminha ações normalizadas ao jogo.
 * - `back` pede saída ao jogo; se ele não responder com `exit`, o launcher sai mesmo assim.
 * - Falha de carregamento ou ausência de `ready` geram erro recuperável.
 */
export function GameRuntime({
  game,
  onExit,
  onRetry,
  inputEnabled,
  handshakeTimeoutMs = DEFAULT_HANDSHAKE_TIMEOUT_MS,
  exitFallbackMs = DEFAULT_EXIT_FALLBACK_MS,
}: GameRuntimeProps) {
  const { keyboard } = useInputServices();
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<Status>({ kind: 'loading' });
  const [score, setScore] = useState<ScoreMessage['payload'] | null>(null);
  const [errorSelection, setErrorSelection] = useState<ErrorAction>('back');
  const statusRef = useRef(status);
  useLayoutEffect(() => {
    statusRef.current = status;
  });
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitedRef = useRef(false);
  const heldRef = useRef(new Set<string>());

  const exit = useCallback(() => {
    if (exitedRef.current) return;
    exitedRef.current = true;
    onExit();
  }, [onExit]);

  const post = useCallback((event: Pick<ArcadeInputEvent, 'player' | 'action' | 'phase'>) => {
    if (!isForwardedAction(event.action)) return;
    const target = frameRef.current?.contentWindow;
    if (!target) return;
    target.postMessage(inputMessage(event.player, event.action, event.phase), window.location.origin);
    const key = `${event.player}|${event.action}`;
    if (event.phase === 'pressed') heldRef.current.add(key);
    else heldRef.current.delete(key);
  }, []);

  /** Solta no jogo tudo que estava pressionado (ex.: ao abrir a ajuda). */
  const releaseHeld = useCallback(() => {
    for (const key of [...heldRef.current]) {
      const [player, action] = key.split('|') as [string, ArcadeInputEvent['action']];
      post({ player: Number(player) as 1 | 2, action, phase: 'released' });
    }
  }, [post]);

  useEffect(() => {
    if (!inputEnabled) releaseHeld();
  }, [inputEnabled, releaseHeld]);

  // Verifica se o arquivo existe e controla o timeout do handshake.
  useEffect(() => {
    let cancelled = false;
    fetch(game.entry, { method: 'HEAD', cache: 'no-cache' })
      .then((response) => {
        if (!cancelled && !response.ok) {
          console.error(`[SENAI Arcade] Jogo "${game.id}" não encontrado: HTTP ${response.status} em ${game.entry}`);
          setStatus({ kind: 'error', reason: 'not-found' });
        }
      })
      .catch((error: unknown) => {
        // Sem resposta HTTP; o timeout do handshake decide.
        if (import.meta.env.DEV) console.warn('[SENAI Arcade] Verificação do jogo falhou:', error);
      });

    const timer = setTimeout(() => {
      if (cancelled || statusRef.current.kind !== 'loading') return;
      console.error(`[SENAI Arcade] Jogo "${game.id}" não enviou "ready" em ${handshakeTimeoutMs} ms.`);
      setStatus({ kind: 'error', reason: 'timeout' });
    }, handshakeTimeoutMs);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [game.entry, game.id, handshakeTimeoutMs]);

  // Mensagens do jogo: valida janela, origem, protocolo, versão e payload.
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = acceptGameMessage(event.data, {
        origin: event.origin,
        source: event.source,
        expectedOrigin: window.location.origin,
        expectedSource: frameRef.current?.contentWindow ?? null,
        gameId: game.id,
      });
      if (!message) return;
      switch (message.type) {
        case 'ready':
          if (statusRef.current.kind === 'loading') setStatus({ kind: 'running' });
          break;
        case 'score':
          setScore(message.payload);
          break;
        case 'exit':
          exit();
          break;
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [game.id, exit]);

  // Limpeza geral ao sair da tela.
  useEffect(
    () => () => {
      if (exitTimer.current) clearTimeout(exitTimer.current);
    },
    [],
  );

  // Ao carregar o iframe: escuta o teclado também dentro dele (mesma origem)
  // e devolve o foco ao launcher, que é o dono dos controles.
  const [frameWindow, setFrameWindow] = useState<Window | null>(null);
  useEffect(() => {
    if (!frameWindow) return undefined;
    let detach: (() => void) | undefined;
    try {
      detach = keyboard.attach(frameWindow);
    } catch (error) {
      if (import.meta.env.DEV) console.warn('[SENAI Arcade] Não foi possível escutar o teclado no iframe:', error);
    }
    return () => detach?.();
  }, [frameWindow, keyboard]);

  const handleLoad = () => {
    setFrameWindow(frameRef.current?.contentWindow ?? null);
    window.focus();
  };

  const retry = onRetry;

  useArcadeInput((event) => {
    const current = statusRef.current;
    if (event.action === 'help') return; // tratada pelo App

    if (current.kind === 'error') {
      if (event.phase !== 'pressed') return;
      if (event.action === 'left' || event.action === 'right') {
        setErrorSelection(event.action === 'left' ? 'back' : 'retry');
      } else if (!event.repeat && isSelectAction(event.action)) {
        if (errorSelection === 'retry') retry();
        else exit();
      } else if (!event.repeat && isBackAction(event.action)) {
        exit();
      }
      return;
    }

    if (current.kind === 'loading') {
      if (event.phase === 'pressed' && event.action === 'back') exit();
      return;
    }

    // Jogo em execução.
    if (event.repeat) return; // jogos recebem apenas transições reais
    if (event.action === 'back' && event.phase === 'pressed') {
      post(event);
      if (!exitTimer.current) exitTimer.current = setTimeout(exit, exitFallbackMs);
      return;
    }
    post(event);
  }, inputEnabled);

  return (
    <div className="runtime" data-testid="game-runtime" data-status={status.kind}>
      {status.kind !== 'error' ? (
        <iframe
          ref={frameRef}
          className="runtime__frame"
          src={game.entry}
          title={game.title}
          sandbox="allow-scripts allow-same-origin"
          allow="autoplay"
          tabIndex={-1}
          data-hidden={status.kind !== 'running'}
          onLoad={handleLoad}
          onError={() => setStatus({ kind: 'error', reason: 'load-failed' })}
        />
      ) : null}

      {status.kind === 'loading' ? (
        <div className="runtime__overlay" role="status" aria-live="polite">
          <div className="runtime__spinner" aria-hidden="true" />
          <p className="runtime__title">Carregando {game.title}…</p>
        </div>
      ) : null}

      {status.kind === 'error' ? (
        <div className="runtime__overlay" role="alert" data-testid="game-error">
          <h2 className="runtime__title">Não foi possível abrir {game.title}</h2>
          <p className="runtime__text">{ERROR_TEXT[status.reason]} Você pode voltar ao menu ou tentar novamente.</p>
          <div className="runtime__actions">
            <ActionButton
              label="Voltar ao menu"
              selected={errorSelection === 'back'}
              testId="game-error-back"
              onActivate={exit}
            />
            <ActionButton label="Tentar novamente" selected={errorSelection === 'retry'} onActivate={retry} />
          </div>
        </div>
      ) : null}

      <div className="runtime__bar">
        <span className="runtime__game-title">{game.title}</span>
        {score && game.maxPlayers === 1 ? (
          <span className="runtime__score" data-testid="game-score">
            Pontuação: {(score.scores[0]?.value ?? 0).toLocaleString('pt-BR')}
          </span>
        ) : null}
        {score && game.maxPlayers > 1 ? (
          <span className="runtime__score" data-testid="game-score">
            Placar: <span className="runtime__score-p1">J1 {score.scores.find((s) => s.player === 1)?.value ?? 0}</span>
            {' × '}
            <span className="runtime__score-p2">{score.scores.find((s) => s.player === 2)?.value ?? 0} J2</span>
          </span>
        ) : null}
        <ControlHints hints={[HINTS.exitGame(), HINTS.help()]} />
      </div>
    </div>
  );
}

interface GameScreenProps {
  game: Game;
  onExit: () => void;
  inputEnabled: boolean;
  handshakeTimeoutMs?: number;
}

/** Tela do jogo. "Tentar novamente" remonta o runtime do zero (novo iframe, timers e estado). */
export function GameScreen({ game, onExit, inputEnabled, handshakeTimeoutMs }: GameScreenProps) {
  const [attempt, setAttempt] = useState(0);
  return (
    <GameRuntime
      key={`${game.id}:${attempt}`}
      game={game}
      onExit={onExit}
      onRetry={() => setAttempt((value) => value + 1)}
      inputEnabled={inputEnabled}
      handshakeTimeoutMs={handshakeTimeoutMs}
    />
  );
}
