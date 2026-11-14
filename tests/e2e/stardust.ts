import { expect, type Frame, type Page } from '@playwright/test';
import { openHome, patchCatalog, selected } from './helpers';

/**
 * STARDUST RUNNER fica como "draft" no catálogo até ser aprovado; aqui ele é
 * publicado apenas para o teste (o manifesto real não muda).
 */
export async function openStardust(page: Page): Promise<Frame> {
  await patchCatalog(page, (catalog) => {
    const game = catalog.games.find((g) => g.id === 'stardust-runner')!;
    game.status = 'published';
  });
  await openHome(page);
  await page.keyboard.press('Enter'); // categoria TI
  await expect(page.getByTestId('game-stardust-runner')).toBeVisible();
  await page.keyboard.press('KeyD'); // Duelo → STARDUST RUNNER
  await expect(selected(page)).toHaveAttribute('data-testid', 'game-stardust-runner');
  await page.keyboard.press('KeyJ');
  // "running" só acontece depois do ready com gameId stardust-runner.
  await expect(page.getByTestId('game-runtime')).toHaveAttribute('data-status', 'running', { timeout: 15_000 });
  const frame = page.frames().find((f) => f.url().includes('/games/stardust-runner/'));
  expect(frame).toBeDefined();
  await frame!.waitForFunction(() => Boolean((window as GameWindow).stardust?.jogo()));
  return frame!;
}

export interface GameWindow extends Window {
  stardust?: {
    jogo(): {
      estado: string;
      modoBot: boolean;
      mundo: { jogador: { pistaDestino: number; noChao: boolean; deslizando: boolean } };
      resumo(): Record<string, unknown>;
      eventos: { morte(resumo: Record<string, unknown>): void };
    };
    audio(): { contexto: string };
  };
}

export const audioState = (frame: Frame) =>
  frame.evaluate(() => (window as GameWindow).stardust!.audio().contexto);
