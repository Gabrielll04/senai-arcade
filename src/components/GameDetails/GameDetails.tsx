import { modeLabel, playersLabel } from '../../features/catalog/catalog';
import type { Game } from '../../features/catalog/schema';
import { keysFor } from '../../input/inputMap';
import { CoverImage } from '../CoverImage/CoverImage';
import { Icon } from '../Icon/Icon';
import './GameDetails.css';

/** Painel de destaque do jogo selecionado: capa grande e informações. */
export function GameDetails({ game }: { game: Game }) {
  const openKeys = [...keysFor(1, 'action1'), ...keysFor(1, 'confirm').slice(0, 1)].join(' / ');
  return (
    <article className="details" key={game.id} data-testid="game-details" aria-label={`Detalhes de ${game.title}`}>
      <div className="details__cover">
        <CoverImage src={game.cover} alt={`Capa de ${game.title}`} fallbackIcon="gamepad" fallbackLabel={game.title} />
      </div>
      <div className="details__body">
        <h3 className="details__title">{game.title}</h3>
        <ul className="details__chips">
          <li className="details__chip details__chip--accent">
            <Icon name="users" /> {playersLabel(game)}
          </li>
          <li className="details__chip">{modeLabel(game.mode)}</li>
          {game.authors && game.authors.length > 0 ? (
            <li className="details__chip">Por: {game.authors.join(', ')}</li>
          ) : null}
        </ul>
        <p className="details__description">{game.description}</p>
        {game.controls ? <p className="details__extra">Controles: {game.controls}</p> : null}
        <span className="details__cta">
          <span className="glyph glyph--a">A</span> Jogar <span className="hints__keys">{openKeys}</span>
        </span>
      </div>
    </article>
  );
}
