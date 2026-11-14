import { z } from 'zod';

/** IDs em kebab-case: letras minúsculas, números e hífens. */
export const SAFE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Caminho local absoluto no próprio host (ex.: `/games/x/index.html`).
 * Rejeita protocolos (`http:`, `javascript:`, `data:`), `//host`, `..`,
 * barras invertidas, query strings e caracteres fora de um conjunto seguro.
 */
export function isSafeLocalPath(value: string): boolean {
  if (!value.startsWith('/') || value.startsWith('//')) return false;
  if (!/^\/[A-Za-z0-9._\-/]*$/.test(value)) return false;
  const segments = value.split('/').slice(1);
  return segments.every((segment) => segment !== '..' && segment !== '.');
}

const localPath = (extensions: RegExp, label: string) =>
  z
    .string()
    .max(200)
    .refine(isSafeLocalPath, { message: 'deve ser um caminho local iniciado por "/" sem "..", protocolo ou host' })
    .refine((value) => extensions.test(value), { message: `deve apontar para ${label}` });

const imagePath = localPath(/\.(webp|avif|png|jpe?g|svg)$/i, 'uma imagem (.webp, .avif, .png, .jpg ou .svg)');
const entryPath = localPath(/\.html$/i, 'um arquivo .html');

const id = z.string().regex(SAFE_ID, 'deve usar apenas letras minúsculas, números e hífens').max(64);

export const CATEGORY_ICONS = [
  'code',
  'settings',
  'zap',
  'package',
  'clipboard-list',
  'scissors',
  'trophy',
  'graduation-cap',
] as const;

export const categorySchema = z.object({
  id,
  title: z.string().trim().min(1).max(60),
  description: z.string().trim().min(1).max(160),
  icon: z.enum(CATEGORY_ICONS),
  cover: imagePath.optional(),
});

export const GAME_MODES = ['solo', 'cooperative', 'competitive'] as const;
export const GAME_STATUSES = ['published', 'draft'] as const;

const playerCount = z.number().int().min(1).max(2);

export const gameSchema = z
  .object({
    id,
    title: z.string().trim().min(1).max(60),
    description: z.string().trim().min(1).max(200),
    categoryId: id,
    entry: entryPath,
    /** Capa quadrada (1:1), usada nos tiles. Recomendado 512×512. */
    cover: imagePath.optional(),
    /** Imagem de destaque (16:9), usada na tela da área. Recomendado 1280×720. */
    hero: imagePath.optional(),
    minPlayers: playerCount,
    maxPlayers: playerCount,
    mode: z.enum(GAME_MODES),
    authors: z.array(z.string().trim().min(1).max(60)).max(10).optional(),
    status: z.enum(GAME_STATUSES),
    controls: z.string().trim().max(200).optional(),
  })
  .refine((game) => game.minPlayers <= game.maxPlayers, {
    message: 'minPlayers não pode ser maior que maxPlayers',
    path: ['minPlayers'],
  });

export const catalogSchema = z
  .object({
    version: z.literal(1),
    categories: z.array(categorySchema).min(1),
    games: z.array(gameSchema),
  })
  .superRefine((catalog, ctx) => {
    const categoryIds = new Set<string>();
    catalog.categories.forEach((category, index) => {
      if (categoryIds.has(category.id)) {
        ctx.addIssue({ code: 'custom', message: `ID de categoria duplicado: "${category.id}"`, path: ['categories', index, 'id'] });
      }
      categoryIds.add(category.id);
    });
    const gameIds = new Set<string>();
    catalog.games.forEach((game, index) => {
      if (gameIds.has(game.id)) {
        ctx.addIssue({ code: 'custom', message: `ID de jogo duplicado: "${game.id}"`, path: ['games', index, 'id'] });
      }
      gameIds.add(game.id);
      if (!categoryIds.has(game.categoryId)) {
        ctx.addIssue({
          code: 'custom',
          message: `categoryId inexistente: "${game.categoryId}"`,
          path: ['games', index, 'categoryId'],
        });
      }
    });
  });

export type Category = z.infer<typeof categorySchema>;
export type Game = z.infer<typeof gameSchema>;
export type Catalog = z.infer<typeof catalogSchema>;
export type GameMode = Game['mode'];
