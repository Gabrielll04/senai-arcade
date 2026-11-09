import { ActionButton } from '../../components/ActionButton/ActionButton';
import { ArcadeShell } from '../../components/ArcadeShell/ArcadeShell';
import { HINTS } from '../../components/ControlHints/hints';
import { Icon } from '../../components/Icon/Icon';
import { useArcadeInput } from '../../input/InputContext';
import { isSelectAction } from '../../input/types';
import type { CatalogError } from './catalog';
import './screens.css';

interface CatalogErrorScreenProps {
  error: CatalogError;
  onRetry: () => void;
}

/** Erro controlado quando o manifesto não pode ser lido ou é inválido. */
export function CatalogErrorScreen({ error, onRetry }: CatalogErrorScreenProps) {
  useArcadeInput((event) => {
    if (event.phase === 'pressed' && !event.repeat && isSelectAction(event.action)) onRetry();
  });

  return (
    <ArcadeShell subtitle="Manutenção" hints={[HINTS.select('Tentar novamente')]}>
      <div className="screen">
        <div className="empty-state empty-state--error" role="alert" data-testid="catalog-error">
          <Icon name="alert" className="empty-state__icon" />
          <h2 className="screen__heading">Catálogo indisponível</h2>
          <p className="empty-state__text">{error.message} Avise a equipe responsável pelo fliperama.</p>
          {import.meta.env.DEV && error.details.length > 0 ? (
            <ul className="empty-state__details">
              {error.details.slice(0, 5).map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          ) : null}
          <ActionButton label="Tentar novamente" selected onActivate={onRetry} />
        </div>
      </div>
    </ArcadeShell>
  );
}
