import { useMemo } from 'react';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { ArcadeShell } from '../../components/ArcadeShell/ArcadeShell';
import { HINTS } from '../../components/ControlHints/hints';
import { GameDetails } from '../../components/GameDetails/GameDetails';
import { GameListItem } from '../../components/GameListItem/GameListItem';
import { Icon } from '../../components/Icon/Icon';
import { useGridNavigation } from '../navigation/useGridNavigation';
import { gameCountLabel, publishedGamesIn } from './catalog';
import { categoryTheme, themeStyle } from './categoryTheme';
import type { Catalog, Category } from './schema';
import './screens.css';

export const BACK_ID = 'action:back';
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

/** Tela da área: destaque do jogo selecionado à esquerda e lista de jogos à direita. */
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
  // Lista vertical: um jogo por linha e, por último, "Voltar".
  const layout = useMemo(() => [...games.map((g) => [gameKey(g.id)]), [BACK_ID]], [games]);
  const current = selectedId && layout.some((row) => row.includes(selectedId)) ? selectedId : (layout[0]?.[0] ?? '');
  const featured = games.find((g) => gameKey(g.id) === current) ?? games[0];

  const activate = (id: string) => {
    if (id === BACK_ID) onBack();
    else onOpenGame(id.slice(GAME_PREFIX.length));
  };

  useGridNavigation({ layout, selectedId: current, onSelect, onActivate: activate, onBack, enabled: inputEnabled });

  const hints =
    games.length > 0 ? [HINTS.move(), HINTS.select('Jogar'), HINTS.back(), HINTS.help()] : [HINTS.back(), HINTS.help()];
  const theme = categoryTheme(category);

  return (
    <ArcadeShell
      subtitle={category.title}
      hints={hints}
      themeStyle={themeStyle(theme)}
      backdropArt={featured?.cover}
      watermark={featured ? undefined : category.icon}
    >
      <div className="browse">
        <section className="browse__main">
          {featured ? (
            <GameDetails game={featured} />
          ) : (
            <div className="empty-state" data-testid="empty-category">
              <span className="empty-state__icon">
                <Icon name={category.icon} />
              </span>
              <span className="empty-state__badge">Em breve</span>
              <p className="empty-state__title">{category.title}</p>
              <p className="empty-state__text">
                Ainda não há jogos publicados nesta área. Novos jogos serão adicionados pela equipe do Senai Lab.
              </p>
            </div>
          )}
        </section>

        <aside className="browse__side">
          <h2 className="browse__heading">
            <Icon name={category.icon} /> {category.title}
            <span className="browse__count">{gameCountLabel(games.length)}</span>
          </h2>
          <ul className="browse__list" aria-label={`Jogos de ${category.title}`}>
            {games.map((game) => (
              <li key={game.id}>
                <GameListItem
                  game={game}
                  selected={current === gameKey(game.id)}
                  onActivate={() => {
                    onSelect(gameKey(game.id));
                    onOpenGame(game.id);
                  }}
                />
              </li>
            ))}
            {games.length === 0 ? <li className="browse__empty-list">Nenhum jogo disponível ainda.</li> : null}
          </ul>
          <div>
            <ActionButton
              label="Voltar às categorias"
              icon="arrow-left"
              selected={current === BACK_ID}
              testId="back-to-categories"
              onActivate={onBack}
            />
          </div>
        </aside>
      </div>
    </ArcadeShell>
  );
}
