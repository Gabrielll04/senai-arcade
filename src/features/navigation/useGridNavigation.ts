import { useArcadeInput } from '../../input/InputContext';
import { isBackAction, isDirection, isSelectAction, type ArcadeInputEvent } from '../../input/types';
import { moveInGrid, type GridLayout } from './grid';

interface GridNavigationOptions {
  layout: GridLayout;
  selectedId: string;
  onSelect: (id: string) => void;
  onActivate: (id: string) => void;
  onBack?: () => void;
  enabled: boolean;
}

/**
 * Navegação espacial padrão do launcher: direções movem a seleção (com repetição),
 * ação 1/confirmar/start abre e ação 2/cancelar/voltar sobe um nível.
 */
export function useGridNavigation({ layout, selectedId, onSelect, onActivate, onBack, enabled }: GridNavigationOptions) {
  useArcadeInput((event: ArcadeInputEvent) => {
    if (event.phase !== 'pressed') return;
    if (isDirection(event.action)) {
      const next = moveInGrid(layout, selectedId, event.action);
      if (next !== selectedId) onSelect(next);
      return;
    }
    if (event.repeat) return;
    if (isSelectAction(event.action)) onActivate(selectedId);
    else if (isBackAction(event.action)) onBack?.();
  }, enabled);
}
