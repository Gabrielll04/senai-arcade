import { describe, expect, it, vi } from 'vitest';
import manifest from '../../../public/catalog/games.json';
import {
  CatalogError,
  findLaunchableGame,
  gameCountLabel,
  loadCatalog,
  parseCatalog,
  playersLabel,
  publishedGamesIn,
} from './catalog';
import { isSafeLocalPath } from './schema';

type Mutable = { categories: Record<string, unknown>[]; games: Record<string, unknown>[]; [key: string]: unknown };

function clone(): Mutable {
  return structuredClone(manifest) as unknown as Mutable;
}

function withGame(patch: Record<string, unknown>): Mutable {
  const data = clone();
  data.games[0] = { ...data.games[0], ...patch };
  return data;
}

function errorsOf(data: unknown): string[] {
  const result = parseCatalog(data);
  return result.ok ? [] : result.errors;
}

describe('manifesto oficial', () => {
  it('é válido e contém as 8 categorias previstas', () => {
    const result = parseCatalog(manifest);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.catalog.categories.map((c) => c.id)).toEqual([
      'ti',
      'mecanica',
      'eletrica',
      'logistica',
      'administrativo',
      'costura',
      'desafios-senai',
      'alunos',
    ]);
    expect(publishedGamesIn(result.catalog, 'ti').map((g) => g.id)).toEqual(['duelo-de-reflexos']);
    expect(publishedGamesIn(result.catalog, 'mecanica')).toEqual([]);
  });
});

describe('validação do manifesto', () => {
  it('rejeita versão desconhecida', () => {
    expect(errorsOf({ ...clone(), version: 2 }).length).toBeGreaterThan(0);
  });

  it('rejeita IDs duplicados', () => {
    const data = clone();
    data.games.push({ ...data.games[0] });
    expect(errorsOf(data).join()).toContain('ID de jogo duplicado');
    const data2 = clone();
    data2.categories.push({ ...data2.categories[0] });
    expect(errorsOf(data2).join()).toContain('ID de categoria duplicado');
  });

  it.each(['Duelo', 'duelo_reflexos', '../x', 'a--b', '', 'duelo de reflexos'])('rejeita ID inseguro "%s"', (id) => {
    expect(errorsOf(withGame({ id })).length).toBeGreaterThan(0);
  });

  it('rejeita categoryId inexistente', () => {
    expect(errorsOf(withGame({ categoryId: 'quimica' })).join()).toContain('categoryId inexistente');
  });

  it('rejeita quantidades de jogadores incoerentes', () => {
    expect(errorsOf(withGame({ minPlayers: 2, maxPlayers: 1 })).join()).toContain('minPlayers');
    expect(errorsOf(withGame({ minPlayers: 1.5 })).length).toBeGreaterThan(0);
    expect(errorsOf(withGame({ minPlayers: 0 })).length).toBeGreaterThan(0);
    expect(errorsOf(withGame({ maxPlayers: 8 })).length).toBeGreaterThan(0);
  });

  it('rejeita mode e status fora do conjunto permitido', () => {
    expect(errorsOf(withGame({ mode: 'versus' })).length).toBeGreaterThan(0);
    expect(errorsOf(withGame({ status: 'archived' })).length).toBeGreaterThan(0);
  });

  it.each([
    'https://exemplo.com/jogo.html',
    'http://127.0.0.1/games/x/index.html',
    '//exemplo.com/jogo.html',
    'javascript:alert(1)',
    'data:text/html,oi',
    '/games/../../etc/passwd.html',
    '/games/x/./index.html',
    'games/x/index.html',
    '/games\\x\\index.html',
    '/games/x/index.html?url=https://exemplo.com',
    '/games/x/index.js',
  ])('rejeita entry inválido "%s"', (entry) => {
    expect(errorsOf(withGame({ entry })).length).toBeGreaterThan(0);
  });

  it.each(['https://cdn.exemplo.com/capa.webp', '/images/../capa.webp', '/images/capa.exe'])(
    'rejeita cover inválido "%s"',
    (cover) => {
      expect(errorsOf(withGame({ cover })).length).toBeGreaterThan(0);
    },
  );

  it('aceita cover ausente', () => {
    expect(parseCatalog(withGame({ cover: undefined })).ok).toBe(true);
  });
});

describe('isSafeLocalPath', () => {
  it('aceita caminhos locais simples', () => {
    expect(isSafeLocalPath('/games/duelo-de-reflexos/index.html')).toBe(true);
    expect(isSafeLocalPath('/images/games/a_b.v2.webp')).toBe(true);
  });
});

describe('regras de exibição', () => {
  it('jogos em rascunho não aparecem nem podem ser iniciados', () => {
    const result = parseCatalog(withGame({ status: 'draft' }));
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(publishedGamesIn(result.catalog, 'ti')).toEqual([]);
    expect(findLaunchableGame(result.catalog, 'duelo-de-reflexos')).toBeUndefined();
  });

  it('rótulos de jogadores e contagem', () => {
    expect(playersLabel({ minPlayers: 2, maxPlayers: 2 })).toBe('2 jogadores');
    expect(playersLabel({ minPlayers: 1, maxPlayers: 1 })).toBe('1 jogador');
    expect(playersLabel({ minPlayers: 1, maxPlayers: 2 })).toBe('1–2 jogadores');
    expect(gameCountLabel(0)).toBe('Em breve');
    expect(gameCountLabel(1)).toBe('1 jogo');
    expect(gameCountLabel(3)).toBe('3 jogos');
  });
});

describe('loadCatalog', () => {
  it('carrega e valida o manifesto', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(manifest)));
    const catalog = await loadCatalog(fetchMock);
    expect(catalog.games).toHaveLength(1);
  });

  it('gera CatalogError com detalhes para manifesto inválido, JSON quebrado ou HTTP de erro', async () => {
    await expect(loadCatalog(vi.fn().mockResolvedValue(new Response('{"version":1}')))).rejects.toBeInstanceOf(
      CatalogError,
    );
    await expect(loadCatalog(vi.fn().mockResolvedValue(new Response('{oops')))).rejects.toThrow('JSON');
    await expect(loadCatalog(vi.fn().mockResolvedValue(new Response('', { status: 404 })))).rejects.toThrow(
      'Não foi possível',
    );
    await expect(loadCatalog(vi.fn().mockRejectedValue(new TypeError('offline')))).rejects.toThrow(
      'Não foi possível',
    );
  });
});
