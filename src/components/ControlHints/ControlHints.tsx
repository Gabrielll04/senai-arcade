import type { Hint } from './hints';
import './ControlHints.css';

function HintContent({ hint }: { hint: Hint }) {
  return (
    <>
      {hint.glyph ? (
        <span className="glyph" aria-hidden="true">
          {hint.glyph}
        </span>
      ) : null}
      <span className="hints__label">{hint.label}</span>
      {hint.keys.length > 0 ? <span className="hints__keys">{hint.keys.join(' / ')}</span> : null}
    </>
  );
}

export function ControlHints({ hints }: { hints: Hint[] }) {
  return (
    <ul className="hints" aria-label="Comandos disponíveis">
      {hints.map((hint) => (
        <li key={hint.id}>
          {hint.onActivate ? (
            <button type="button" className="hints__item" tabIndex={-1} onClick={hint.onActivate} data-testid={hint.testId}>
              <HintContent hint={hint} />
            </button>
          ) : (
            <span className="hints__item" data-testid={hint.testId}>
              <HintContent hint={hint} />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
