import type { Category } from './schema';

/**
 * Tom sólido e discreto de cada área, usado apenas como fundo quando ainda não
 * há imagem. Assim o espaço da arte fica reservado sem inventar ilustrações.
 */
const TONES: Record<Category['icon'], string> = {
  code: '#3b5674',
  settings: '#6a5847',
  zap: '#6f6338',
  package: '#3d6456',
  'clipboard-list': '#544e72',
  scissors: '#6e4658',
  trophy: '#6d4343',
  'graduation-cap': '#3c636c',
};

export function categoryTone(category: Pick<Category, 'icon'>): string {
  return TONES[category.icon];
}
