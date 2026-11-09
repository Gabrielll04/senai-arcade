import { useEffect, useState } from 'react';
import { useInputServices } from '../../input/InputContext';
import { Icon } from '../Icon/Icon';
import './StatusIndicator.css';

/** Mostra quantos gamepads estão conectados. Atualiza só em conexão/desconexão. */
export function StatusIndicator() {
  const { gamepads } = useInputServices();
  const [count, setCount] = useState(() => gamepads.getSnapshots().length);

  useEffect(() => {
    const update = () => setCount(gamepads.getSnapshots().length);
    update();
    return gamepads.onDevicesChanged(update);
  }, [gamepads]);

  return (
    <div className="status" role="status" aria-live="polite">
      <span className="status__item status__item--active">
        <Icon name="keyboard" />
        Teclado
      </span>
      <span className={`status__item${count > 0 ? ' status__item--active' : ''}`} data-testid="gamepad-count">
        <Icon name="gamepad" />
        {count === 0 ? 'Nenhum gamepad' : count === 1 ? '1 gamepad' : `${count} gamepads`}
      </span>
    </div>
  );
}
