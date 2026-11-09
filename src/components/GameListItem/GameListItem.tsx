import { modeLabel, playersLabel } from '../../features/catalog/catalog';
import type { Game } from '../../features/catalog/schema';
import { useScrollIntoViewWhenSelected } from '../../hooks/useScrollIntoViewWhenSelected';
import { CoverImage } from '../CoverImage/CoverImage';
import './GameListItem.css';

interface GameListItemProps {
  game: Game;
  selected: boolean;
  onActivate: () => void;
}

/** Item da lista de jogos (coluna direita da tela da categoria). */
export function GameListItem({ game, selected, onActivate }: GameListItemProps) {
  const ref = useScrollIntoViewWhenSelected<HTMLButtonElement>(selected);
  return (
    <button
      ref={ref}
      type="button"
      className="game-item"
      data-selected={selected}
      aria-current={selected ? 'true' : undefined}
      data-testid={`game-${game.id}`}
      tabIndex={-1}
      onClick={onActivate}
    >
      <span className="game-item__thumb">
        <CoverImage src={game.cover} alt={`Capa de ${game.title}`} fallbackIcon="gamepad" fallbackLabel="" />
      </span>
      <span className="game-item__text">
        <span className="game-item__title">{game.title}</span>
        <span className="game-item__meta">
          {playersLabel(game)} · {modeLabel(game.mode)}
        </span>
      </span>
    </button>
  );
}
