import { gameCountLabel } from '../../features/catalog/catalog';
import type { Category } from '../../features/catalog/schema';
import { useScrollIntoViewWhenSelected } from '../../hooks/useScrollIntoViewWhenSelected';
import { Icon } from '../Icon/Icon';
import './CategoryCard.css';

interface CategoryCardProps {
  category: Category;
  gameCount: number;
  selected: boolean;
  onActivate: () => void;
}

export function CategoryCard({ category, gameCount, selected, onActivate }: CategoryCardProps) {
  const ref = useScrollIntoViewWhenSelected<HTMLButtonElement>(selected);
  const empty = gameCount === 0;
  return (
    <button
      ref={ref}
      type="button"
      className={`category-card${empty ? ' category-card--empty' : ''}`}
      data-selected={selected}
      aria-current={selected ? 'true' : undefined}
      data-testid={`category-${category.id}`}
      tabIndex={-1}
      onClick={onActivate}
    >
      <span className="category-card__icon">
        <Icon name={category.icon} />
      </span>
      <span className="category-card__title">{category.title}</span>
      <span className="category-card__description">{category.description}</span>
      <span className="category-card__count" data-testid="category-count">
        {gameCountLabel(gameCount)}
      </span>
    </button>
  );
}
