import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { HelpOverlay } from '../components/HelpOverlay/HelpOverlay';
import { findCategory, findLaunchableGame, loadCatalog } from '../features/catalog/catalog';
import { CatalogErrorScreen } from '../features/catalog/CatalogErrorScreen';
import { CategoryScreen } from '../features/catalog/CategoryScreen';
import { HomeScreen } from '../features/catalog/HomeScreen';
import type { Catalog } from '../features/catalog/schema';
import { useCatalog } from '../features/catalog/useCatalog';
import { DiagnosticsScreen } from '../features/controller-diagnostics/DiagnosticsScreen';
import { GameScreen } from '../features/game-runtime/GameRuntime';
import { useAutoHideCursor } from '../hooks/useAutoHideCursor';
import { useArcadeInput } from '../input/InputContext';
import { HOME, type Route } from './routes';

/** Rota inválida (ex.: jogo removido do catálogo): volta a uma tela segura. */
function Redirect({ to }: { to: () => void }) {
  useEffect(() => {
    to();
  }, [to]);
  return null;
}

interface AppProps {
  catalogLoader?: () => Promise<Catalog>;
  handshakeTimeoutMs?: number;
}

export function App({ catalogLoader = loadCatalog, handshakeTimeoutMs }: AppProps) {
  const { state, reload } = useCatalog(catalogLoader);
  const [route, setRoute] = useState<Route>(HOME);
  const [helpOpen, setHelpOpen] = useState(false);
  // Seleção lembrada por tela, para voltar ao mesmo item.
  const [homeSelection, setHomeSelection] = useState<string | null>(null);
  const [categorySelection, setCategorySelection] = useState<Record<string, string>>({});

  useAutoHideCursor();

  // A ajuda é global: abre em qualquer tela (fecha pelo próprio overlay).
  useArcadeInput((event) => {
    if (event.action === 'help' && event.phase === 'pressed' && !event.repeat) setHelpOpen(true);
  }, !helpOpen);

  const closeHelp = useCallback(() => setHelpOpen(false), []);
  const goHome = useCallback(() => setRoute(HOME), []);
  const inputEnabled = !helpOpen;

  let screen: ReactNode = null;
  if (state.status === 'error') {
    screen = <CatalogErrorScreen error={state.error} onRetry={reload} />;
  } else if (state.status === 'ready') {
    const { catalog } = state;
    switch (route.name) {
      case 'home':
        screen = (
          <HomeScreen
            catalog={catalog}
            selectedId={homeSelection}
            onSelect={setHomeSelection}
            onOpenCategory={(categoryId) => setRoute({ name: 'category', categoryId })}
            onOpenDiagnostics={() => setRoute({ name: 'diagnostics' })}
            onOpenHelp={() => setHelpOpen(true)}
            inputEnabled={inputEnabled}
          />
        );
        break;
      case 'category': {
        const category = findCategory(catalog, route.categoryId);
        if (!category) {
          screen = <Redirect to={goHome} />;
          break;
        }
        screen = (
          <CategoryScreen
            catalog={catalog}
            category={category}
            selectedId={categorySelection[category.id] ?? null}
            onSelect={(id) => setCategorySelection((current) => ({ ...current, [category.id]: id }))}
            onOpenGame={(gameId) => setRoute({ name: 'game', categoryId: category.id, gameId })}
            onBack={goHome}
            inputEnabled={inputEnabled}
          />
        );
        break;
      }
      case 'game': {
        const game = findLaunchableGame(catalog, route.gameId);
        const backToCategory = () => setRoute({ name: 'category', categoryId: route.categoryId });
        if (!game) {
          screen = <Redirect to={backToCategory} />;
          break;
        }
        screen = (
          <GameScreen
            game={game}
            onExit={backToCategory}
            inputEnabled={inputEnabled}
            handshakeTimeoutMs={handshakeTimeoutMs}
          />
        );
        break;
      }
      case 'diagnostics':
        screen = <DiagnosticsScreen onBack={goHome} inputEnabled={inputEnabled} />;
        break;
    }
  }

  return (
    <div className="app" data-route={route.name}>
      {state.status === 'loading' ? (
        <p className="visually-hidden" role="status">
          Carregando catálogo…
        </p>
      ) : null}
      {screen}
      {helpOpen ? <HelpOverlay onClose={closeHelp} /> : null}
    </div>
  );
}
