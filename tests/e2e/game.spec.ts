import { expect, test, type FrameLocator, type Page } from '@playwright/test';
import { openDuel, openHome, patchCatalog } from './helpers';

async function waitPhase(frame: FrameLocator, phase: string) {
  await expect(frame.locator(`.duel[data-phase="${phase}"]`)).toBeVisible({ timeout: 15_000 });
}

async function winRound(page: Page, frame: FrameLocator, key: string) {
  await waitPhase(frame, 'go');
  await expect(frame.locator('[data-signal]')).toHaveText('AGORA!');
  await page.keyboard.press(key);
  await waitPhase(frame, 'round-result');
}

test('5, 6 e 7. inicia o jogo, joga uma partida com dois jogadores e volta ao menu com Escape', async ({ page }) => {
  test.setTimeout(90_000);
  const frame = await openDuel(page);
  await expect(frame.getByText('Pressione START')).toBeVisible();

  await page.keyboard.press('Enter'); // start
  // Rodada 1: jogador 1 queima a largada → ponto do jogador 2.
  await waitPhase(frame, 'waiting');
  await page.keyboard.press('KeyJ');
  await expect(frame.getByText('Queimou a largada!')).toBeVisible();
  await expect(frame.locator('[data-score="2"]')).toHaveText('1');

  // Rodada 2: jogador 2 reage primeiro.
  await winRound(page, frame, 'Numpad1');
  await expect(frame.locator('[data-score="2"]')).toHaveText('2');

  // Rodadas 3 a 5: jogador 1 vence.
  for (let i = 1; i <= 3; i += 1) {
    await winRound(page, frame, 'KeyJ');
    await expect(frame.locator('[data-score="1"]')).toHaveText(String(i));
  }

  await waitPhase(frame, 'final');
  await expect(frame.getByText('Jogador 1 venceu!')).toBeVisible();
  // O jogo enviou a pontuação ao launcher.
  await expect(page.getByTestId('game-score')).toHaveText('Placar: J1 3 × 2 J2');

  // Reinicia com start.
  await expect(frame.getByText('START (Enter) joga de novo')).toBeVisible();
  await page.keyboard.press('Enter');
  await waitPhase(frame, 'countdown');
  await expect(frame.locator('[data-score="1"]')).toHaveText('0');

  // Volta ao menu com Escape: só o jogo é encerrado.
  const url = page.url();
  await page.keyboard.press('Escape');
  await expect(page.getByTestId('game-duelo-de-reflexos')).toBeVisible();
  await expect(page.locator('iframe')).toHaveCount(0);
  expect(page.url()).toBe(url);

  // O launcher continua respondendo.
  await page.keyboard.press('KeyK');
  await expect(page.getByTestId('category-ti')).toBeVisible();
});

test('abre e fecha o jogo várias vezes sem perder controles', async ({ page }) => {
  await openHome(page);
  await page.keyboard.press('Enter');
  for (let i = 0; i < 5; i += 1) {
    await page.keyboard.press('KeyJ');
    await expect(page.getByTestId('game-runtime')).toHaveAttribute('data-status', 'running');
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('game-duelo-de-reflexos')).toBeVisible();
    await expect(page.locator('iframe')).toHaveCount(0);
  }
  await page.keyboard.press('Escape');
  await expect(page.getByTestId('category-ti')).toBeVisible();
});

test('11a. mostra erro quando o arquivo do jogo não existe', async ({ page }) => {
  await patchCatalog(page, (catalog) => {
    catalog.games[0]!.entry = '/games/nao-existe/index.html';
  });
  await openHome(page);
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('game-error')).toContainText('não foram encontrados');
  await page.keyboard.press('Enter'); // "Voltar ao menu" vem selecionado
  await expect(page.getByTestId('game-duelo-de-reflexos')).toBeVisible();
});

test('11b. mostra erro recuperável quando o jogo não envia ready', async ({ page }) => {
  await page.route('**/games/duelo-de-reflexos/index.html', (route) =>
    route.fulfill({ contentType: 'text/html', body: '<!doctype html><title>mudo</title><p>Jogo sem handshake</p>' }),
  );
  await openHome(page);
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('game-runtime')).toHaveAttribute('data-status', 'loading');
  await expect(page.getByTestId('game-error')).toContainText('não respondeu a tempo', { timeout: 15_000 });

  // Tentar novamente com o jogo real funcionando.
  await page.unroute('**/games/duelo-de-reflexos/index.html');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('game-runtime')).toHaveAttribute('data-status', 'running');
  await page.keyboard.press('Escape');
  await expect(page.getByTestId('game-duelo-de-reflexos')).toBeVisible();
});

test('não faz requisições fora do host local (funciona offline)', async ({ context, page }) => {
  // Qualquer requisição a outro host é bloqueada e registrada.
  const external: string[] = [];
  await context.route(/^(?!http:\/\/127\.0\.0\.1:4173\/).*/, (route) => {
    external.push(route.request().url());
    return route.abort('internetdisconnected');
  });
  await openHome(page);
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('game-runtime')).toHaveAttribute('data-status', 'running');
  expect(external).toEqual([]);
});
