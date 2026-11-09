import { useMemo, useState } from 'react';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { ArcadeShell } from '../../components/ArcadeShell/ArcadeShell';
import { CategoryTile } from '../../components/CategoryTile/CategoryTile';
import { HINTS } from '../../components/ControlHints/hints';
import { keysFor } from '../../input/inputMap';
import { useGridNavigation } from '../navigation/useGridNavigation';
import { gameCountLabel, publishedGamesIn } from './catalog';
import { categoryTheme, themeStyle } from './categoryTheme';
import type { Catalog } from './schema';
import './screens.css';

export const DIAGNOSTICS_ID = 'action:diagnostics';
export const HELP_ID = 'action:help';
const CATEGORY_PREFIX = 'category:';
const categoryKey = (id: string) => `${CATEGORY_PREFIX}${id}`;

interface HomeScreenProps {
  catalog: Catalog;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onOpenCategory: (categoryId: string) => void;
  onOpenDiagnostics: () => void;
  onOpenHelp: () => void;
  inputEnabled: boolean;
}

/**
 * Tela inicial em estilo console: destaque da área selecionada no alto,
 * carrossel horizontal de áreas e, abaixo, atalhos de sistema.
 */
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

  // Última área selecionada: continua em destaque nos atalhos e é o destino ao subir deles.
  const [lastCategory, setLastCategory] = useState(() =>
    current.startsWith(CATEGORY_PREFIX) ? current : (categoryIds[0] ?? ''),
  );
  const select = (id: string) => {
    if (id.startsWith(CATEGORY_PREFIX)) setLastCategory(id);
    onSelect(id);
  };

  const featured = catalog.categories.find((c) => categoryKey(c.id) === lastCategory) ?? catalog.categories[0];
  const featuredIndex = featured ? catalog.categories.indexOf(featured) : 0;
  const featuredCount = featured ? publishedGamesIn(catalog, featured.id).length : 0;

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

  const theme = featured ? themeStyle(categoryTheme(featured)) : undefined;
  const openKeys = [...keysFor(1, 'action1'), ...keysFor(1, 'confirm').slice(0, 1)].join(' / ');

  return (
    <ArcadeShell
      subtitle="Início"
      hints={[HINTS.move(), HINTS.select(), HINTS.help()]}
      themeStyle={theme}
      watermark={featured?.icon}
    >
      <div className="home">
        {featured ? (
          <section className="home__hero" key={featured.id} aria-live="polite" data-testid="home-hero">
            <p className="home__kicker">
              Área {String(featuredIndex + 1).padStart(2, '0')} / {String(catalog.categories.length).padStart(2, '0')}
            </p>
            <h2 className="home__title">{featured.title}</h2>
            <p className="home__description">{featured.description}</p>
            <div className="home__meta">
              <span className={`home__count${featuredCount === 0 ? ' home__count--soon' : ''}`}>
                {featuredCount === 0 ? 'Em breve' : `${gameCountLabel(featuredCount)} disponível${featuredCount > 1 ? 'is' : ''}`}
              </span>
              <span className="home__cta">
                <span className="glyph glyph--a">A</span> {featuredCount === 0 ? 'Ver detalhes' : 'Abrir'}
                <span className="hints__keys">{openKeys}</span>
              </span>
            </div>
          </section>
        ) : null}

        <ul className="carousel" aria-label="Categorias" data-testid="category-carousel">
          {catalog.categories.map((category) => {
            const id = categoryKey(category.id);
            return (
              <li key={category.id}>
                <CategoryTile
                  category={category}
                  gameCount={publishedGamesIn(catalog, category.id).length}
                  selected={current === id}
                  onActivate={() => {
                    select(id);
                    activate(id);
                  }}
                />
              </li>
            );
          })}
        </ul>

        <div className="home__system">
          <ActionButton
            label="Diagnóstico de controles"
            icon="gamepad"
            selected={current === DIAGNOSTICS_ID}
            testId="open-diagnostics"
            onActivate={() => {
              onSelect(DIAGNOSTICS_ID);
              onOpenDiagnostics();
            }}
          />
          <ActionButton
            label="Ajuda"
            icon="help"
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
