import type { CSSProperties } from 'react';
import { gameCountLabel } from '../../features/catalog/catalog';
import { categoryTheme, themeStyle } from '../../features/catalog/categoryTheme';
import type { Category } from '../../features/catalog/schema';
import { useScrollIntoViewWhenSelected } from '../../hooks/useScrollIntoViewWhenSelected';
import { Icon } from '../Icon/Icon';
import './CategoryTile.css';

interface CategoryTileProps {
  category: Category;
  gameCount: number;
  selected: boolean;
  onActivate: () => void;
}

/** Tile de área no carrossel horizontal da tela inicial. */
export function CategoryTile({ category, gameCount, selected, onActivate }: CategoryTileProps) {
  const ref = useScrollIntoViewWhenSelected<HTMLButtonElement>(selected, true);
  return (
    <button
      ref={ref}
      type="button"
      className={`tile${gameCount === 0 ? ' tile--empty' : ''}`}
      style={themeStyle(categoryTheme(category)) as CSSProperties}
      data-selected={selected}
      aria-current={selected ? 'true' : undefined}
      aria-label={`${category.title}: ${gameCountLabel(gameCount)}`}
      data-testid={`category-${category.id}`}
      tabIndex={-1}
      onClick={onActivate}
    >
      <span className="tile__art">
        <Icon name={category.icon} />
        <span className="tile__badge" data-testid="category-count">
          {gameCountLabel(gameCount)}
        </span>
      </span>
      <span className="tile__title">{category.title}</span>
    </button>
  );
}
