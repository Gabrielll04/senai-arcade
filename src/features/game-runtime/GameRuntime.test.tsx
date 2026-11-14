import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { InputProvider } from '../../input/InputProvider';
import { officialCatalog, tap } from '../../test/renderApp';
import { GameScreen } from './GameRuntime';

const game = officialCatalog().games[0]!;

function setup(timeout = 1000, target = game) {
  const onExit = vi.fn();
  render(
    <InputProvider>
      <GameScreen game={target} onExit={onExit} inputEnabled handshakeTimeoutMs={timeout} />
    </InputProvider>,
  );
  const frame = () => document.querySelector('iframe');
  const fromGame = (data: unknown, source: MessageEventSource | null = frame()?.contentWindow ?? null) => {
    act(() => {
      window.dispatchEvent(new MessageEvent('message', { data, origin: window.location.origin, source }));
    });
  };
  return { onExit, frame, fromGame };
}

const msg = (type: string, payload: unknown) => ({ protocol: 'senai-arcade', version: 1, type, payload });

beforeEach(() => {
  vi.useFakeTimers();
  vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 200 }));
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
});
afterEach(() => {
  vi.useRealTimers();
});

describe('GameRuntime', () => {
  it('carrega o jogo em iframe sandbox local e entra em execução ao receber ready', () => {
    const { frame, fromGame } = setup();
    expect(frame()).toHaveAttribute('src', '/games/duelo-de-reflexos/index.html');
    expect(frame()).toHaveAttribute('sandbox', 'allow-scripts allow-same-origin');
    expect(screen.getByTestId('game-runtime')).toHaveAttribute('data-status', 'loading');
    fromGame(msg('ready', { gameId: 'duelo-de-reflexos' }));
    expect(screen.getByTestId('game-runtime')).toHaveAttribute('data-status', 'running');
  });

  it('ignora mensagens de outra janela ou de outro jogo', () => {
    const { fromGame } = setup();
    fromGame(msg('ready', { gameId: 'duelo-de-reflexos' }), window);
    fromGame(msg('ready', { gameId: 'outro-jogo' }));
    expect(screen.getByTestId('game-runtime')).toHaveAttribute('data-status', 'loading');
  });

  it('encaminha entradas normalizadas ao jogo com o jogador correto', () => {
    const { frame, fromGame } = setup();
    fromGame(msg('ready', { gameId: 'duelo-de-reflexos' }));
    const post = vi.spyOn(frame()!.contentWindow!, 'postMessage');
    act(() => tap('Numpad1'));
    expect(post).toHaveBeenCalledWith(
      msg('input', { player: 2, action: 'action1', phase: 'pressed' }),
      window.location.origin,
    );
    expect(post).toHaveBeenCalledWith(
      msg('input', { player: 2, action: 'action1', phase: 'released' }),
      window.location.origin,
    );
    post.mockClear();
    act(() => tap('KeyH')); // ajuda nunca é encaminhada
    expect(post).not.toHaveBeenCalled();
  });

  it('exibe a pontuação recebida e sai quando o jogo envia exit', () => {
    const { fromGame, onExit } = setup();
    fromGame(msg('ready', { gameId: 'duelo-de-reflexos' }));
    fromGame(msg('score', { gameId: 'duelo-de-reflexos', scores: [{ player: 1, value: 3 }, { player: 2, value: 1 }] }));
    expect(screen.getByTestId('game-score')).toHaveTextContent('J1 3 × 1 J2');
    fromGame(msg('exit', { reason: 'user-request' }));
    expect(onExit).toHaveBeenCalledTimes(1);
  });

  it('em jogo de 1 jogador, mostra só a pontuação', () => {
    const solo = { ...game, id: 'stardust-runner', mode: 'solo' as const, minPlayers: 1, maxPlayers: 1 };
    const { fromGame } = setup(1000, solo);
    fromGame(msg('ready', { gameId: 'stardust-runner' }));
    fromGame(msg('score', { gameId: 'stardust-runner', scores: [{ player: 1, value: 4321 }] }));
    expect(screen.getByTestId('game-score')).toHaveTextContent('Pontuação: 4.321');
  });

  it('Escape pede saída ao jogo e encerra mesmo sem resposta', () => {
    const { frame, fromGame, onExit } = setup();
    fromGame(msg('ready', { gameId: 'duelo-de-reflexos' }));
    const post = vi.spyOn(frame()!.contentWindow!, 'postMessage');
    act(() => tap('Escape'));
    expect(post).toHaveBeenCalledWith(msg('input', { player: 1, action: 'back', phase: 'pressed' }), window.location.origin);
    expect(onExit).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(600));
    expect(onExit).toHaveBeenCalledTimes(1);
  });

  it('mostra erro recuperável quando o jogo não envia ready e permite tentar de novo', () => {
    const { onExit, fromGame } = setup(1000);
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByTestId('game-error')).toHaveTextContent('não respondeu a tempo');
    act(() => tap('KeyD'));
    act(() => tap('Enter'));
    expect(screen.getByTestId('game-runtime')).toHaveAttribute('data-status', 'loading');
    fromGame(msg('ready', { gameId: 'duelo-de-reflexos' }));
    expect(screen.getByTestId('game-runtime')).toHaveAttribute('data-status', 'running');
    expect(onExit).not.toHaveBeenCalled();
  });

  it('mostra erro quando o arquivo do jogo não existe e volta ao menu', async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(null, { status: 404 }));
    const { onExit } = setup(10_000);
    await act(async () => {
      await Promise.resolve();
    });
    expect(screen.getByTestId('game-error')).toHaveTextContent('não foram encontrados');
    fireEvent.click(screen.getByTestId('game-error-back'));
    expect(onExit).toHaveBeenCalledTimes(1);
  });

  it('Escape durante o carregamento volta imediatamente', () => {
    const { onExit } = setup();
    act(() => tap('Escape'));
    expect(onExit).toHaveBeenCalledTimes(1);
  });
});
