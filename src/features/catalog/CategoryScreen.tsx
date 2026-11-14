import { useMemo } from 'react';
import { ArcadeShell } from '../../components/ArcadeShell/ArcadeShell';
import { Artwork } from '../../components/Artwork/Artwork';
import { HINTS } from '../../components/ControlHints/hints';
import { Tile } from '../../components/Tile/Tile';
import { useGridNavigation } from '../navigation/useGridNavigation';
import { gameCountLabel, modeLabel, playersLabel, publishedGamesIn } from './catalog';
import { categoryTone } from './categoryTheme';
import type { Catalog, Category, Game } from './schema';
import './screens.css';

const GAME_PREFIX = 'game:';
const gameKey = (id: string) => `${GAME_PREFIX}${id}`;

interface CategoryScreenProps {
  catalog: Catalog;
  category: Category;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onOpenGame: (gameId: string) => void;
  onBack: () => void;
  inputEnabled: boolean;
}

function GameFeature({ game, tone }: { game: Game; tone: string }) {
  return (
    <div className="area__feature" key={game.id} data-testid="game-details">
      <div className="area__hero">
        <Artwork src={game.hero ?? game.cover} alt={game.title} shape="wide" tone={tone} name={game.title} />
      </div>
      <div className="area__info">
        <h2 className="area__title">{game.title}</h2>
        <p className="area__meta">
          {playersLabel(game)} · {modeLabel(game.mode)}
        </p>
        <p className="area__description">{game.description}</p>
        {game.controls ? <p className="area__detail">{game.controls}</p> : null}
        {game.authors && game.authors.length > 0 ? (
          <p className="area__detail">Por {game.authors.join(', ')}</p>
        ) : null}
      </div>
    </div>
  );
}

/** Tela da área: destaque do jogo selecionado e fileira de jogos abaixo. */
export function CategoryScreen({
  catalog,
  category,
  selectedId,
  onSelect,
  onOpenGame,
  onBack,
  inputEnabled,
}: CategoryScreenProps) {
  const games = useMemo(() => publishedGamesIn(catalog, category.id), [catalog, category.id]);
  const layout = useMemo(() => [games.map((g) => gameKey(g.id))], [games]);
  const current = selectedId && layout[0]?.includes(selectedId) ? selectedId : (layout[0]?.[0] ?? '');
  const featured = games.find((g) => gameKey(g.id) === current);
  const tone = categoryTone(category);

  useGridNavigation({
    layout,
    selectedId: current,
    onSelect,
    onActivate: (id) => {
      if (id.startsWith(GAME_PREFIX)) onOpenGame(id.slice(GAME_PREFIX.length));
    },
    onBack,
    enabled: inputEnabled,
  });

  const hints = games.length > 0 ? [HINTS.select('Jogar'), HINTS.back(onBack), HINTS.help()] : [HINTS.back(onBack), HINTS.help()];

  return (
    <ArcadeShell section={category.title} hints={hints}>
      <div className="area">
        {featured ? (
          <GameFeature game={featured} tone={tone} />
        ) : (
          <div className="area__feature" data-testid="empty-category">
            <div className="area__hero">
              <Artwork alt={category.title} shape="wide" tone={tone} name={category.title} />
            </div>
            <div className="area__info">
              <h2 className="area__title">{category.title}</h2>
              <span className="area__status">Em breve</span>
              <p className="area__description">{category.description}</p>
              <p className="area__detail">
                Ainda não há jogos publicados nesta área. Novos jogos serão adicionados pela equipe do Senai Lab.
              </p>
            </div>
          </div>
        )}

        {games.length > 0 ? (
          <ul className="shelf" aria-label={`Jogos de ${category.title} (${gameCountLabel(games.length)})`}>
            {games.map((game) => (
              <li key={game.id}>
                <Tile
                  label={game.title}
                  ariaLabel={`${game.title}: ${playersLabel(game)}, ${modeLabel(game.mode)}`}
                  selected={current === gameKey(game.id)}
                  testId={`game-${game.id}`}
                  onActivate={() => {
                    onSelect(gameKey(game.id));
                    onOpenGame(game.id);
                  }}
                >
                  <Artwork src={game.cover} alt={game.title} shape="square" tone={tone} name={game.title} />
                </Tile>
              </li>
            ))}
          </ul>
        ) : (
          <p className="area__empty-shelf">Nenhum jogo publicado ainda.</p>
        )}
      </div>
    </ArcadeShell>
  );
}
