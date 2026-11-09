import { useMemo } from 'react';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { ArcadeShell } from '../../components/ArcadeShell/ArcadeShell';
import { HINTS } from '../../components/ControlHints/hints';
import { GameCard } from '../../components/GameCard/GameCard';
import { Icon } from '../../components/Icon/Icon';
import { chunk } from '../navigation/grid';
import { useGridNavigation } from '../navigation/useGridNavigation';
import { publishedGamesIn } from './catalog';
import type { Catalog, Category } from './schema';
import './screens.css';

export const GAME_COLUMNS = 3;
export const BACK_ID = 'action:back';
const gameKey = (id: string) => `game:${id}`;

interface CategoryScreenProps {
  catalog: Catalog;
  category: Category;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onOpenGame: (gameId: string) => void;
  onBack: () => void;
  inputEnabled: boolean;
}

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
  const layout = useMemo(() => [...chunk(games.map((g) => gameKey(g.id)), GAME_COLUMNS), [BACK_ID]], [games]);
  const current = selectedId && layout.some((row) => row.includes(selectedId)) ? selectedId : (layout[0]?.[0] ?? '');

  const activate = (id: string) => {
    if (id === BACK_ID) onBack();
    else onOpenGame(id.slice('game:'.length));
  };

  useGridNavigation({ layout, selectedId: current, onSelect, onActivate: activate, onBack, enabled: inputEnabled });

  const hints = games.length > 0 ? [HINTS.move(), HINTS.select('Jogar'), HINTS.back(), HINTS.help()] : [HINTS.back(), HINTS.help()];

  return (
    <ArcadeShell subtitle={category.title} hints={hints}>
      <div className="screen">
        <h2 className="screen__heading">
          <Icon name={category.icon} /> {category.title}
        </h2>
        {games.length > 0 ? (
          <div className="game-grid" role="list" aria-label={`Jogos de ${category.title}`}>
            {games.map((game) => (
              <div role="listitem" key={game.id}>
                <GameCard
                  game={game}
                  selected={current === gameKey(game.id)}
                  onActivate={() => {
                    onSelect(gameKey(game.id));
                    onOpenGame(game.id);
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state" data-testid="empty-category">
            <Icon name={category.icon} className="empty-state__icon" />
            <span className="empty-state__badge">Em breve</span>
            <p className="empty-state__text">
              Ainda não há jogos publicados em {category.title}. Novos jogos desta área serão adicionados pela equipe do
              Senai Lab.
            </p>
          </div>
        )}
        <div className="screen__actions">
          <ActionButton
            label="Voltar às categorias"
            icon="arrow-left"
            selected={current === BACK_ID}
            testId="back-to-categories"
            onActivate={onBack}
          />
        </div>
      </div>
    </ArcadeShell>
  );
}
