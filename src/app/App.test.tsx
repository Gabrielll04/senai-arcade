import { act, screen, waitFor, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { CatalogError } from '../features/catalog/catalog';
import { officialCatalog, renderApp, tap } from '../test/renderApp';

const selected = () => document.querySelector('[aria-current="true"]');

describe('App — navegação por teclado', () => {
  it('mostra as categorias com contagem vinda do manifesto e "Em breve"', async () => {
    renderApp();
    const ti = await screen.findByTestId('category-ti');
    expect(within(ti).getByTestId('category-count')).toHaveTextContent('1 jogo');
    expect(within(screen.getByTestId('category-mecanica')).getByTestId('category-count')).toHaveTextContent('Em breve');
    expect(screen.getAllByText('Em breve')).toHaveLength(7);
    expect(selected()).toBe(ti);
  });

  it('move a seleção com WASD (jogador 1) e setas (jogador 2)', async () => {
    renderApp();
    await screen.findByTestId('category-ti');
    act(() => tap('KeyD'));
    expect(selected()).toBe(screen.getByTestId('category-mecanica'));
    act(() => tap('ArrowDown'));
    expect(selected()).toBe(screen.getByTestId('category-costura'));
    act(() => tap('KeyA'));
    expect(selected()).toBe(screen.getByTestId('category-administrativo'));
    act(() => tap('ArrowUp'));
    expect(selected()).toBe(screen.getByTestId('category-ti'));
  });

  it('abre a categoria TI, mostra o jogo e volta às categorias', async () => {
    renderApp();
    await screen.findByTestId('category-ti');
    act(() => tap('Enter'));
    const card = await screen.findByTestId('game-duelo-de-reflexos');
    expect(card).toHaveTextContent('2 jogadores');
    expect(card).toHaveTextContent('Competitivo');
    expect(card).toHaveTextContent('SENAI Lab');
    expect(selected()).toBe(card);
    act(() => tap('KeyK'));
    expect(await screen.findByTestId('category-ti')).toBeInTheDocument();
    expect(selected()).toBe(screen.getByTestId('category-ti'));
  });

  it('categoria vazia mostra estado "Em breve" sem jogos', async () => {
    renderApp();
    await screen.findByTestId('category-ti');
    act(() => tap('KeyD'));
    act(() => tap('KeyJ'));
    expect(await screen.findByTestId('empty-category')).toHaveTextContent('Em breve');
    expect(screen.queryByTestId(/^game-/)).toBeNull();
    act(() => tap('Escape'));
    expect(selected()).toBe(await screen.findByTestId('category-mecanica'));
  });

  it('abre e fecha a ajuda sem mover a seleção por trás', async () => {
    renderApp();
    await screen.findByTestId('category-ti');
    act(() => tap('KeyH'));
    expect(screen.getByTestId('help-overlay')).toBeInTheDocument();
    act(() => tap('KeyD'));
    expect(selected()).toBe(screen.getByTestId('category-ti'));
    act(() => tap('Escape'));
    expect(screen.queryByTestId('help-overlay')).toBeNull();
    act(() => tap('KeyH'));
    act(() => tap('KeyH'));
    expect(screen.queryByTestId('help-overlay')).toBeNull();
  });

  it('abre a tela de diagnóstico pelo menu e mostra a última tecla', async () => {
    renderApp();
    await screen.findByTestId('category-ti');
    act(() => tap('KeyS'));
    act(() => tap('KeyS'));
    expect(selected()).toBe(screen.getByTestId('open-diagnostics'));
    act(() => tap('Enter'));
    const diagnostics = await screen.findByTestId('diagnostics');
    expect(diagnostics).toHaveTextContent('Nenhum gamepad detectado');
    act(() => tap('ArrowLeft'));
    expect(screen.getByTestId('diag-last-key')).toHaveTextContent('ArrowLeft');
    expect(screen.getByTestId('diag-last-key')).toHaveTextContent('Jogador 2 · Esquerda');
    // Ação 2 é apenas exibida (não sai imediatamente).
    act(() => tap('KeyK'));
    expect(screen.getByTestId('diagnostics')).toBeInTheDocument();
    act(() => tap('Escape'));
    expect(await screen.findByTestId('category-ti')).toBeInTheDocument();
  });

  it('mostra erro controlado se o manifesto for inválido e permite tentar de novo', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const loader = vi
      .fn()
      .mockRejectedValueOnce(new CatalogError('O catálogo de jogos contém erros.', ['games.0.entry: inválido']))
      .mockResolvedValueOnce(officialCatalog());
    renderApp({ loader });
    expect(await screen.findByTestId('catalog-error')).toHaveTextContent('O catálogo de jogos contém erros.');
    expect(errorSpy).toHaveBeenCalled();
    act(() => tap('Enter'));
    await waitFor(() => expect(screen.getByTestId('category-ti')).toBeInTheDocument());
  });
});
