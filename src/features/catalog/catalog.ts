import { catalogSchema, type Catalog, type Category, type Game } from './schema';

export const CATALOG_URL = '/catalog/games.json';

export class CatalogError extends Error {
  constructor(
    message: string,
    readonly details: string[] = [],
  ) {
    super(message);
    this.name = 'CatalogError';
  }
}

export type CatalogParseResult = { ok: true; catalog: Catalog } | { ok: false; errors: string[] };

/** Valida um objeto de manifesto. Nunca lança exceção. */
export function parseCatalog(data: unknown): CatalogParseResult {
  const result = catalogSchema.safeParse(data);
  if (result.success) return { ok: true, catalog: result.data };
  return {
    ok: false,
    errors: result.error.issues.map((issue) => `${issue.path.join('.') || '(raiz)'}: ${issue.message}`),
  };
}

export async function loadCatalog(fetchImpl: typeof fetch = fetch, url = CATALOG_URL): Promise<Catalog> {
  let response: Response;
  try {
    response = await fetchImpl(url, { cache: 'no-cache' });
  } catch (error) {
    throw new CatalogError('Não foi possível ler o catálogo de jogos.', [String(error)]);
  }
  if (!response.ok) {
    throw new CatalogError('Não foi possível ler o catálogo de jogos.', [`HTTP ${response.status} em ${url}`]);
  }
  let data: unknown;
  try {
    data = await response.json();
  } catch (error) {
    throw new CatalogError('O catálogo de jogos não é um JSON válido.', [String(error)]);
  }
  const parsed = parseCatalog(data);
  if (!parsed.ok) throw new CatalogError('O catálogo de jogos contém erros.', parsed.errors);
  return parsed.catalog;
}

/** Apenas jogos publicados podem ser exibidos e iniciados. */
export function publishedGamesIn(catalog: Catalog, categoryId: string): Game[] {
  return catalog.games.filter((game) => game.categoryId === categoryId && game.status === 'published');
}

export function findCategory(catalog: Catalog, categoryId: string): Category | undefined {
  return catalog.categories.find((category) => category.id === categoryId);
}

export function findLaunchableGame(catalog: Catalog, gameId: string): Game | undefined {
  return catalog.games.find((game) => game.id === gameId && game.status === 'published');
}

const MODE_LABELS: Record<Game['mode'], string> = {
  solo: 'Individual',
  cooperative: 'Cooperativo',
  competitive: 'Competitivo',
};

export function modeLabel(mode: Game['mode']): string {
  return MODE_LABELS[mode];
}

export function playersLabel(game: Pick<Game, 'minPlayers' | 'maxPlayers'>): string {
  if (game.minPlayers === game.maxPlayers) {
    return game.minPlayers === 1 ? '1 jogador' : `${game.minPlayers} jogadores`;
  }
  return `${game.minPlayers}–${game.maxPlayers} jogadores`;
}

export function gameCountLabel(count: number): string {
  if (count === 0) return 'Em breve';
  return count === 1 ? '1 jogo' : `${count} jogos`;
}
