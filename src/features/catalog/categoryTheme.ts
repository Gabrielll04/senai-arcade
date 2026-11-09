import type { Category } from './schema';

export interface CategoryTheme {
  /** Cor de destaque da área (seleção, brilho e fundo). */
  accent: string;
  /** Mesma cor com transparência, para brilhos suaves. */
  soft: string;
  /** Gradiente do tile no carrossel. */
  gradient: string;
}

const theme = (accent: string, rgb: string, from: string, to: string): CategoryTheme => ({
  accent,
  soft: `rgb(${rgb} / 28%)`,
  gradient: `linear-gradient(145deg, ${from} 0%, ${to} 100%)`,
});

/** Paleta por ícone da categoria: cada área tem uma cor própria. */
const THEMES: Record<Category['icon'], CategoryTheme> = {
  code: theme('#4f8dff', '79 141 255', '#3a6df0', '#1b2a7a'),
  settings: theme('#ff8a3d', '255 138 61', '#f07a2e', '#7a2d0e'),
  zap: theme('#ffd23f', '255 210 63', '#f0b81f', '#7a5208'),
  package: theme('#2fd6a3', '47 214 163', '#22b98a', '#0b5a45'),
  'clipboard-list': theme('#a77bff', '167 123 255', '#8a5cf0', '#3a1d7a'),
  scissors: theme('#ff5fa8', '255 95 168', '#f0478f', '#7a1640'),
  trophy: theme('#ff5d5d', '255 93 93', '#e84545', '#6e1212'),
  'graduation-cap': theme('#3ee6ff', '62 230 255', '#1fc4e0', '#0b4f6e'),
};

export function categoryTheme(category: Pick<Category, 'icon'>): CategoryTheme {
  return THEMES[category.icon];
}

/** Variáveis CSS para aplicar o tema em um elemento. */
export function themeStyle(t: CategoryTheme): Record<string, string> {
  return { '--accent': t.accent, '--accent-soft': t.soft, '--tile-gradient': t.gradient };
}
