import { modeLabel, playersLabel } from '../../features/catalog/catalog';
import type { Game } from '../../features/catalog/schema';
import { useScrollIntoViewWhenSelected } from '../../hooks/useScrollIntoViewWhenSelected';
import { keysFor } from '../../input/inputMap';
import { CoverImage } from '../CoverImage/CoverImage';
import { Icon } from '../Icon/Icon';
import './GameCard.css';

interface GameCardProps {
  game: Game;
  selected: boolean;
  onActivate: () => void;
}

export function GameCard({ game, selected, onActivate }: GameCardProps) {
  const ref = useScrollIntoViewWhenSelected<HTMLButtonElement>(selected);
  const openKeys = [...keysFor(1, 'action1'), ...keysFor(1, 'confirm').slice(0, 1)].join(' / ');
  return (
    <button
      ref={ref}
      type="button"
      className="game-card"
      data-selected={selected}
      aria-current={selected ? 'true' : undefined}
      data-testid={`game-${game.id}`}
      tabIndex={-1}
      onClick={onActivate}
    >
      <CoverImage src={game.cover} alt={`Capa de ${game.title}`} fallbackIcon="gamepad" fallbackLabel={game.title} />
      <span className="game-card__title">{game.title}</span>
      <span className="game-card__description">{game.description}</span>
      <ul className="game-card__meta">
        <li className="game-card__tag">
          <Icon name="users" /> {playersLabel(game)}
        </li>
        <li className="game-card__tag">{modeLabel(game.mode)}</li>
      </ul>
      {game.authors && game.authors.length > 0 ? (
        <span className="game-card__authors">Por: {game.authors.join(', ')}</span>
      ) : null}
      <span className="game-card__cta">Pressione Ação 1 ({openKeys}) para jogar</span>
    </button>
  );
}
