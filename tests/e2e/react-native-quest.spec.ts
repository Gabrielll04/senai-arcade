import { expect, test, type Frame, type Page } from '@playwright/test';
import { openHome, patchCatalog, selected } from './helpers';

/** O Quest fica "draft" até ser aprovado; aqui ele é publicado só para o teste. */
async function openQuest(page: Page): Promise<Frame> {
  await patchCatalog(page, (catalog) => {
    catalog.games.find((g) => g.id === 'react-native-quest')!.status = 'published';
  });
  await openHome(page);
  await page.keyboard.press('Enter'); // TI
  await expect(page.getByTestId('game-react-native-quest')).toBeVisible();
  while ((await selected(page).getAttribute('data-testid')) !== 'game-react-native-quest') {
    await page.keyboard.press('KeyD');
  }
  await page.keyboard.press('KeyJ');
  await expect(page.getByTestId('game-runtime')).toHaveAttribute('data-status', 'running', { timeout: 15_000 });
  const frame = page.frames().find((f) => f.url().includes('/games/react-native-quest/'));
  expect(frame).toBeDefined();
  await expect(frame!.locator('.title__logo')).toBeVisible();
  return frame!;
}

/** Índice da alternativa em que está o marcador de um jogador. */
const markerAt = (frame: Frame, marker: string) =>
  frame.evaluate((cls) => {
    const options = Array.from(document.querySelectorAll('.option'));
    return options.findIndex((o) => o.querySelector(`.${cls}`));
  }, marker);

test.describe('React Native Quest (versão fliperama) no SENAI Arcade', () => {
  test('carrega pelo iframe, envia ready e navega pelos menus só com o controle', async ({ page }) => {
    const failed: string[] = [];
    page.on('response', (r) => {
      if (r.status() >= 400) failed.push(`${r.status()} ${new URL(r.url()).pathname}`);
    });
    const frame = await openQuest(page);
    await expect(frame.getByText('1 jogador')).toBeVisible();

    await page.keyboard.press('KeyJ'); // 1 jogador
    await expect(frame.getByText('Escolha o módulo')).toBeVisible();
    await expect(frame.locator('.module-card')).toHaveCount(7);
    await page.keyboard.press('KeyK'); // B volta ao título
    await expect(frame.locator('.title__logo')).toBeVisible();
    await page.keyboard.press('KeyJ');
    await page.keyboard.press('KeyJ'); // módulo 1
    await expect(frame.locator('.question__count')).toContainText('Pergunta 1 de');
    expect(failed).toEqual([]);
  });

  test('solo: escolhe, confirma, vê a resposta com explicação e segue contra o Guardião', async ({ page }) => {
    const frame = await openQuest(page);
    await page.keyboard.press('KeyJ');
    await page.keyboard.press('KeyJ');
    await expect(frame.locator('.hearts .heart')).toHaveCount(3);
    expect(await markerAt(frame, 'marker--p1')).toBe(0);
    await page.keyboard.press('KeyD');
    await expect.poll(() => markerAt(frame, 'marker--p1')).toBe(1);
    await page.keyboard.press('ArrowLeft'); // lado do jogador 2 também comanda o solo
    await expect.poll(() => markerAt(frame, 'marker--p1')).toBe(0);

    await page.keyboard.press('KeyJ');
    await expect(frame.locator('.question')).toHaveAttribute('data-revealed', 'true');
    await expect(frame.locator('.option[data-status="correct"]')).toHaveCount(1);
    await expect(frame.locator('.feedback__explanation')).not.toBeEmpty();

    await page.waitForTimeout(1300);
    await page.keyboard.press('KeyJ');
    await expect(frame.locator('.question__count')).toContainText('Pergunta 2 de');
  });

  test('dupla: cada jogador tem seu cursor e a resposta abre quando os dois confirmam', async ({ page }) => {
    const frame = await openQuest(page);
    await page.keyboard.press('KeyS'); // 2 jogadores
    await page.keyboard.press('KeyJ');
    await page.keyboard.press('KeyJ');
    await expect(frame.locator('.scoreboard__p2')).toBeVisible();

    await page.keyboard.press('KeyD'); // J1 → alternativa 1
    await page.keyboard.press('ArrowDown'); // J2 → alternativa 2
    await expect.poll(() => markerAt(frame, 'marker--p1')).toBe(1);
    await expect.poll(() => markerAt(frame, 'marker--p2')).toBe(2);

    await page.keyboard.press('KeyJ'); // J1 confirma
    await expect(frame.locator('.marker--p1')).toHaveAttribute('data-locked', 'true');
    await expect(frame.locator('.question')).toHaveAttribute('data-revealed', 'false');
    await page.keyboard.press('Numpad1'); // J2 confirma
    await expect(frame.locator('.question')).toHaveAttribute('data-revealed', 'true');
    await expect(frame.locator('.feedback__result')).toContainText('J1');
    await expect(frame.locator('.feedback__result')).toContainText('J2');
  });

  test('ao fim da partida envia a pontuação ao launcher', async ({ page }) => {
    test.setTimeout(90_000);
    const frame = await openQuest(page);
    await page.keyboard.press('KeyJ');
    await page.keyboard.press('KeyJ');
    // Responde sempre a primeira alternativa até a partida acabar.
    for (let i = 0; i < 10 && !(await frame.locator('.results').count()); i += 1) {
      await page.keyboard.press('KeyJ');
      await expect(frame.locator('.question')).toHaveAttribute('data-revealed', 'true');
      await page.waitForTimeout(1300);
      await page.keyboard.press('KeyJ');
      await page.waitForTimeout(200);
    }
    await expect(frame.locator('.results__title')).toBeVisible();
    await expect(page.getByTestId('game-score')).toHaveText(/^Pontuação: \d/);
  });

  test('Escape sai do jogo pelo protocolo e o launcher continua funcionando', async ({ page }) => {
    await openQuest(page);
    await page.evaluate(() => {
      const w = window as Window & { __types?: string[] };
      w.__types = [];
      window.addEventListener('message', (e) => {
        if ((e.data as { protocol?: string })?.protocol === 'senai-arcade') w.__types!.push((e.data as { type: string }).type);
      });
    });
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('game-react-native-quest')).toBeVisible();
    await expect(page.locator('iframe')).toHaveCount(0);
    expect(await page.evaluate(() => (window as Window & { __types?: string[] }).__types)).toContain('exit');
  });

  test('funciona offline: nenhuma requisição externa nem ao servidor do Quest', async ({ context, page }) => {
    const external: string[] = [];
    await context.route(/^(?!http:\/\/127\.0\.0\.1:4173\/).*/, (route) => {
      external.push(route.request().url());
      return route.abort('internetdisconnected');
    });
    const paths: string[] = [];
    page.on('request', (r) => paths.push(new URL(r.url()).pathname));
    const frame = await openQuest(page);
    await page.keyboard.press('KeyJ');
    await page.keyboard.press('KeyJ');
    await expect(frame.locator('.question__count')).toBeVisible();
    expect(external).toEqual([]);
    expect(paths.filter((p) => p.startsWith('/socket.io') || p.startsWith('/img/') || p.startsWith('/profile'))).toEqual([]);
  });
});
