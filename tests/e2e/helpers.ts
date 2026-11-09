import { expect, type Page } from '@playwright/test';

export const selected = (page: Page) => page.locator('[aria-current="true"]');

export async function openHome(page: Page) {
  await page.goto('/');
  await expect(page.getByTestId('category-ti')).toBeVisible();
}

export async function openDuel(page: Page) {
  await openHome(page);
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('game-duelo-de-reflexos')).toBeVisible();
  await page.keyboard.press('KeyJ');
  await expect(page.getByTestId('game-runtime')).toHaveAttribute('data-status', 'running');
  return page.frameLocator('iframe[title="Duelo de Reflexos"]');
}

/** Lê o manifesto oficial e permite alterá-lo apenas para este teste. */
export async function patchCatalog(page: Page, patch: (catalog: CatalogJson) => void) {
  await page.route('**/catalog/games.json', async (route) => {
    const response = await route.fetch();
    const catalog = (await response.json()) as CatalogJson;
    patch(catalog);
    await route.fulfill({ response, json: catalog });
  });
}

export interface CatalogJson {
  version: number;
  categories: Array<Record<string, unknown> & { id: string }>;
  games: Array<Record<string, unknown> & { id: string }>;
}
