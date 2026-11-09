import { ACTION_LABELS, gamepadButtonsFor, keysFor } from '../../input/inputMap';
import { useArcadeInput } from '../../input/InputContext';
import { isBackAction, type ArcadeAction } from '../../input/types';
import { Icon } from '../Icon/Icon';
import './HelpOverlay.css';

interface Row {
  label: string;
  actions: ArcadeAction[];
}

const ROWS: Row[] = [
  { label: 'Mover', actions: ['up', 'left', 'down', 'right'] },
  { label: `${ACTION_LABELS.action1} (abrir no menu)`, actions: ['action1'] },
  { label: `${ACTION_LABELS.action2} (voltar um nível)`, actions: ['action2'] },
  { label: 'Start / Confirmar', actions: ['start', 'confirm'] },
  { label: 'Sair do jogo / Voltar ao menu', actions: ['back'] },
  { label: 'Ajuda (esta tela)', actions: ['help'] },
];

function Keys({ keys }: { keys: string[] }) {
  if (keys.length === 0) return <span aria-label="sem tecla">—</span>;
  return (
    <>
      {keys.map((key) => (
        <kbd key={key} className="keycap">
          {key}
        </kbd>
      ))}
    </>
  );
}

function gamepadLabel(actions: ArcadeAction[]): string[] {
  if (actions.includes('up')) return ['D-pad', 'Analógico'];
  const buttons = actions.flatMap((action) => gamepadButtonsFor(action));
  return [...new Set(buttons)].map((button) => `Botão ${button}`);
}

interface HelpOverlayProps {
  onClose: () => void;
}

/** Sobreposição de ajuda. Fecha com a ação de ajuda ou com voltar/cancelar. */
export function HelpOverlay({ onClose }: HelpOverlayProps) {
  useArcadeInput((event) => {
    if (event.phase !== 'pressed' || event.repeat) return;
    if (event.action === 'help' || isBackAction(event.action) || event.action === 'confirm') onClose();
  });

  return (
    <div className="help-overlay" role="dialog" aria-modal="true" aria-labelledby="help-title" data-testid="help-overlay">
      <div className="help-overlay__panel">
        <h2 id="help-title" className="help-overlay__title">
          <Icon name="help" /> Como jogar
        </h2>
        <table className="help-overlay__table">
          <thead>
            <tr>
              <th scope="col">Comando</th>
              <th scope="col" className="help-overlay__p1">
                Jogador 1
              </th>
              <th scope="col" className="help-overlay__p2">
                Jogador 2
              </th>
              <th scope="col">Gamepad</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>
                  <Keys keys={[...new Set(row.actions.flatMap((action) => keysFor(1, action)))]} />
                </td>
                <td>
                  <Keys keys={[...new Set(row.actions.flatMap((action) => keysFor(2, action)))]} />
                </td>
                <td>
                  <Keys keys={gamepadLabel(row.actions)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="help-overlay__note">
          No fliperama, o joystick e os botões de cada lado correspondem às teclas do Jogador 1 e do Jogador 2.
          Pressione <kbd className="keycap">H</kbd> ou <kbd className="keycap">Esc</kbd> para fechar.
        </p>
      </div>
    </div>
  );
}
