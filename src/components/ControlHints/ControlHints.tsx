import type { Hint } from './hints';
import './ControlHints.css';

export function ControlHints({ hints }: { hints: Hint[] }) {
  return (
    <ul className="hints" aria-label="Comandos disponíveis">
      {hints.map((hint) => (
        <li key={hint.id} className="hints__item">
          <span className="hints__controls">
            {hint.controls.map((control) => (
              <kbd key={control} className="keycap">
                {control}
              </kbd>
            ))}
          </span>
          <span className="hints__label">{hint.label}</span>
        </li>
      ))}
    </ul>
  );
}
