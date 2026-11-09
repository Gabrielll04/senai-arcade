import { expect, test } from '@playwright/test';
import { openHome, patchCatalog, selected } from './helpers';

const CATEGORIES = [
  'Tecnologia da Informação',
  'Mecânica',
  'Elétrica',
  'Logística',
  'Auxiliar Administrativo',
  'Costura',
  'Desafios SENAI',
  'Jogos dos Alunos',
];

test('1. abre a aplicação e mostra as categorias', async ({ page }) => {
  await openHome(page);
  const carousel = page.getByTestId('category-carousel');
  for (const title of CATEGORIES) await expect(carousel.getByRole('button', { name: new RegExp(`^${title}:`) })).toBeVisible();
  await expect(page.getByTestId('home-hero')).toContainText('Tecnologia da Informação');
  await expect(page.getByTestId('category-ti').getByTestId('category-count')).toHaveText('1 jogo');
  await expect(page.getByText('Em breve', { exact: true })).toHaveCount(7);
  // Sem rolagem vertical em 720p.
  const overflow = await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
  expect(overflow).toBeLessThanOrEqual(0);
});

test('2. navega pelas categorias com WASD', async ({ page }) => {
  await openHome(page);
  await expect(selected(page)).toHaveAttribute('data-testid', 'category-ti');
  await page.keyboard.press('KeyD');
  await page.keyboard.press('KeyD');
  await expect(selected(page)).toHaveAttribute('data-testid', 'category-eletrica');
  await expect(page.getByTestId('home-hero')).toContainText('Elétrica');
  await page.keyboard.press('KeyS');
  await expect(selected(page)).toHaveAttribute('data-testid', 'open-diagnostics');
  await page.keyboard.press('KeyW');
  await expect(selected(page)).toHaveAttribute('data-testid', 'category-eletrica');
  await page.keyboard.press('KeyA');
  await expect(selected(page)).toHaveAttribute('data-testid', 'category-mecanica');
});

test('3. navega pelas categorias com as setas', async ({ page }) => {
  await openHome(page);
  for (let i = 0; i < 7; i += 1) await page.keyboard.press('ArrowRight');
  await expect(selected(page)).toHaveAttribute('data-testid', 'category-alunos');
  await expect(selected(page)).toBeInViewport();
  await page.keyboard.press('ArrowRight'); // não dá a volta
  await expect(selected(page)).toHaveAttribute('data-testid', 'category-alunos');
  await page.keyboard.press('ArrowLeft');
  await expect(selected(page)).toHaveAttribute('data-testid', 'category-desafios-senai');
  await page.keyboard.press('ArrowDown');
  await expect(selected(page)).toHaveAttribute('data-testid', 'open-help');
  await page.keyboard.press('ArrowUp');
  await expect(selected(page)).toHaveAttribute('data-testid', 'category-desafios-senai');
  // As setas não rolam a página.
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
});

test('4 e 8. abre a categoria de TI e volta às categorias', async ({ page }) => {
  await openHome(page);
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { name: 'Tecnologia da Informação' })).toBeVisible();
  await expect(page.getByTestId('game-duelo-de-reflexos')).toContainText('2 jogadores');
  await expect(page.getByTestId('game-details')).toContainText('SENAI Lab');
  await expect(page.getByText('Voltar', { exact: true })).toBeVisible();
  await page.keyboard.press('KeyK');
  await expect(page.getByTestId('category-ti')).toBeVisible();
  await expect(selected(page)).toHaveAttribute('data-testid', 'category-ti');

  await page.keyboard.press('KeyJ');
  await expect(page.getByTestId('game-duelo-de-reflexos')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByTestId('category-ti')).toBeVisible();
});

test('9. abre e usa a tela de diagnóstico', async ({ page }) => {
  await openHome(page);
  await page.keyboard.press('KeyS');
  await expect(selected(page)).toHaveAttribute('data-testid', 'open-diagnostics');
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('diagnostics')).toBeVisible();
  await expect(page.getByTestId('diag-gamepads')).toContainText('Nenhum gamepad detectado');

  await page.keyboard.press('Numpad2');
  await expect(page.getByTestId('diag-last-key')).toContainText('Numpad2');
  await expect(page.getByTestId('diag-last-key')).toContainText('Jogador 2 · Ação 2');
  await page.keyboard.press('KeyW');
  await expect(page.getByTestId('diag-log')).toContainText('J1 Cima');

  await page.keyboard.press('Escape');
  await expect(page.getByTestId('category-ti')).toBeVisible();
});

test('ajuda abre e fecha com H', async ({ page }) => {
  await openHome(page);
  await page.keyboard.press('KeyH');
  await expect(page.getByTestId('help-overlay')).toBeVisible();
  await expect(page.getByTestId('help-overlay')).toContainText('Jogador 2');
  await page.keyboard.press('KeyH');
  await expect(page.getByTestId('help-overlay')).toBeHidden();
});

test('10. mostra categoria vazia e fallback de imagem ausente', async ({ page }) => {
  await patchCatalog(page, (catalog) => {
    catalog.games.push({
      ...catalog.games[0]!,
      id: 'jogo-sem-capa',
      title: 'Jogo sem capa',
      cover: '/images/games/nao-existe.webp',
    });
  });
  await openHome(page);
  await expect(page.getByTestId('category-ti').getByTestId('category-count')).toHaveText('2 jogos');

  await page.keyboard.press('Enter');
  const card = page.getByTestId('game-jogo-sem-capa');
  await expect(card.getByTestId('cover-fallback')).toBeVisible();
  await expect(card.locator('img')).toHaveCount(0);
  await expect(page.getByTestId('game-duelo-de-reflexos').locator('img')).toBeVisible();

  await page.keyboard.press('Escape');
  await page.keyboard.press('KeyD');
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('empty-category')).toContainText('Em breve');
  await expect(page.getByTestId('empty-category')).toContainText('Mecânica');
});

test('manifesto inválido mostra erro controlado', async ({ page }) => {
  await patchCatalog(page, (catalog) => {
    catalog.games[0]!.entry = 'https://exemplo.com/jogo.html';
  });
  await page.goto('/');
  await expect(page.getByTestId('catalog-error')).toContainText('Catálogo indisponível');
});
