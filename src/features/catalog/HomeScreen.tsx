import { useMemo, useState } from 'react';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { ArcadeShell } from '../../components/ArcadeShell/ArcadeShell';
import { Artwork } from '../../components/Artwork/Artwork';
import { HINTS } from '../../components/ControlHints/hints';
import { Tile } from '../../components/Tile/Tile';
import { useGridNavigation } from '../navigation/useGridNavigation';
import { gameCountLabel, publishedGamesIn } from './catalog';
import { categoryTone } from './categoryTheme';
import type { Catalog, Category } from './schema';
import './screens.css';

export const DIAGNOSTICS_ID = 'action:diagnostics';
export const HELP_ID = 'action:help';
const CATEGORY_PREFIX = 'category:';
const categoryKey = (id: string) => `${CATEGORY_PREFIX}${id}`;

/** Arte do tile da área: capa própria ou, se não houver, a capa do primeiro jogo publicado. */
function categoryArt(catalog: Catalog, category: Category): string | undefined {
  return category.cover ?? publishedGamesIn(catalog, category.id).find((game) => game.cover)?.cover;
}

interface HomeScreenProps {
  catalog: Catalog;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onOpenCategory: (categoryId: string) => void;
  onOpenDiagnostics: () => void;
  onOpenHelp: () => void;
  inputEnabled: boolean;
}

/** Tela inicial: fileira de áreas com arte grande e atalhos de sistema abaixo. */
export function HomeScreen({
  catalog,
  selectedId,
  onSelect,
  onOpenCategory,
  onOpenDiagnostics,
  onOpenHelp,
  inputEnabled,
}: HomeScreenProps) {
  const categoryIds = useMemo(() => catalog.categories.map((c) => categoryKey(c.id)), [catalog]);
  const layout = useMemo(() => [categoryIds, [DIAGNOSTICS_ID, HELP_ID]], [categoryIds]);
  const current = selectedId && layout.some((row) => row.includes(selectedId)) ? selectedId : (categoryIds[0] ?? '');

  // Última área selecionada: continua descrita nos atalhos e é o destino ao subir deles.
  const [lastCategory, setLastCategory] = useState(() =>
    current.startsWith(CATEGORY_PREFIX) ? current : (categoryIds[0] ?? ''),
  );
  const select = (id: string) => {
    if (id.startsWith(CATEGORY_PREFIX)) setLastCategory(id);
    onSelect(id);
  };

  const activate = (id: string) => {
    if (id === DIAGNOSTICS_ID) onOpenDiagnostics();
    else if (id === HELP_ID) onOpenHelp();
    else onOpenCategory(id.slice(CATEGORY_PREFIX.length));
  };

  useGridNavigation({
    layout,
    selectedId: current,
    onSelect: select,
    onActivate: activate,
    enabled: inputEnabled,
    adjustMove: (from, direction, next) =>
      direction === 'up' && !from.startsWith(CATEGORY_PREFIX) ? lastCategory : next,
  });

  const featured = catalog.categories.find((c) => categoryKey(c.id) === lastCategory) ?? catalog.categories[0];
  const featuredCount = featured ? publishedGamesIn(catalog, featured.id).length : 0;

  return (
    <ArcadeShell hints={[HINTS.select(), HINTS.help(onOpenHelp)]}>
      <div className="home">
        <ul className="shelf" aria-label="Áreas" data-testid="category-carousel">
          {catalog.categories.map((category) => {
            const id = categoryKey(category.id);
            const count = publishedGamesIn(catalog, category.id).length;
            return (
              <li key={category.id}>
                <Tile
                  label={category.title}
                  ariaLabel={`${category.title}: ${gameCountLabel(count)}`}
                  selected={current === id}
                  testId={`category-${category.id}`}
                  onActivate={() => {
                    select(id);
                    activate(id);
                  }}
                >
                  <Artwork
                    src={categoryArt(catalog, category)}
                    alt={category.title}
                    shape="square"
                    tone={categoryTone(category)}
                    name={category.title}
                    note={gameCountLabel(count)}
                  />
                  <span className="visually-hidden" data-testid="category-count">
                    {gameCountLabel(count)}
                  </span>
                </Tile>
              </li>
            );
          })}
        </ul>

        {featured ? (
          <section className="home__info" aria-live="polite" data-testid="home-hero">
            <h2 className="visually-hidden">{featured.title}</h2>
            <p>{featured.description}</p>
            <span className="home__count">{gameCountLabel(featuredCount)}</span>
          </section>
        ) : null}

        <div className="home__system">
          <ActionButton
            label="Testar controles"
            selected={current === DIAGNOSTICS_ID}
            testId="open-diagnostics"
            onActivate={() => {
              onSelect(DIAGNOSTICS_ID);
              onOpenDiagnostics();
            }}
          />
          <ActionButton
            label="Ajuda"
            selected={current === HELP_ID}
            testId="open-help"
            onActivate={() => {
              onSelect(HELP_ID);
              onOpenHelp();
            }}
          />
        </div>
      </div>
    </ArcadeShell>
  );
}
