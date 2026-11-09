import { useMemo } from 'react';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { ArcadeShell } from '../../components/ArcadeShell/ArcadeShell';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import { HINTS } from '../../components/ControlHints/hints';
import { chunk } from '../navigation/grid';
import { useGridNavigation } from '../navigation/useGridNavigation';
import { publishedGamesIn } from './catalog';
import type { Catalog } from './schema';
import './screens.css';

export const HOME_COLUMNS = 4;
export const DIAGNOSTICS_ID = 'action:diagnostics';
export const HELP_ID = 'action:help';
const categoryKey = (id: string) => `category:${id}`;

interface HomeScreenProps {
  catalog: Catalog;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onOpenCategory: (categoryId: string) => void;
  onOpenDiagnostics: () => void;
  onOpenHelp: () => void;
  inputEnabled: boolean;
}

export function HomeScreen({
  catalog,
  selectedId,
  onSelect,
  onOpenCategory,
  onOpenDiagnostics,
  onOpenHelp,
  inputEnabled,
}: HomeScreenProps) {
  const layout = useMemo(
    () => [...chunk(catalog.categories.map((c) => categoryKey(c.id)), HOME_COLUMNS), [DIAGNOSTICS_ID, HELP_ID]],
    [catalog],
  );
  const current = selectedId && layout.some((row) => row.includes(selectedId)) ? selectedId : (layout[0]?.[0] ?? '');

  const activate = (id: string) => {
    if (id === DIAGNOSTICS_ID) onOpenDiagnostics();
    else if (id === HELP_ID) onOpenHelp();
    else onOpenCategory(id.slice('category:'.length));
  };

  useGridNavigation({ layout, selectedId: current, onSelect, onActivate: activate, enabled: inputEnabled });

  return (
    <ArcadeShell subtitle="Escolha uma área" hints={[HINTS.move(), HINTS.select(), HINTS.help()]}>
      <div className="screen">
        <div className="category-grid" role="list" aria-label="Categorias">
          {catalog.categories.map((category) => {
            const id = categoryKey(category.id);
            return (
              <div role="listitem" key={category.id}>
                <CategoryCard
                  category={category}
                  gameCount={publishedGamesIn(catalog, category.id).length}
                  selected={current === id}
                  onActivate={() => {
                    onSelect(id);
                    activate(id);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="screen__actions">
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
