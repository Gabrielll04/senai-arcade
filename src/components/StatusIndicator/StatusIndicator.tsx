import { useEffect, useState } from 'react';
import { useInputServices } from '../../input/InputContext';
import './StatusIndicator.css';

/** Quantos gamepads estão conectados. Atualiza só em conexão/desconexão. */
export function StatusIndicator() {
  const { gamepads } = useInputServices();
  const [count, setCount] = useState(() => gamepads.getSnapshots().length);

  useEffect(() => {
    const update = () => setCount(gamepads.getSnapshots().length);
    update();
    return gamepads.onDevicesChanged(update);
  }, [gamepads]);

  const label = count === 0 ? 'Nenhum gamepad' : count === 1 ? '1 gamepad' : `${count} gamepads`;
  return (
    <span className="status" role="status" aria-live="polite" data-testid="gamepad-count">
      Teclado · {label}
    </span>
  );
}
