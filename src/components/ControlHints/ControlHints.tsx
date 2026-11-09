import { Icon } from '../Icon/Icon';
import type { Hint } from './hints';
import './ControlHints.css';

export function Glyph({ glyph }: { glyph: Hint['glyph'] }) {
  if (glyph === 'dpad') {
    return (
      <span className="glyph" aria-hidden="true">
        <Icon name="dpad" />
      </span>
    );
  }
  const wide = glyph.label.length > 1 ? ' glyph--wide' : '';
  return (
    <span className={`glyph glyph--${glyph.variant}${wide}`} aria-hidden="true">
      {glyph.label}
    </span>
  );
}

export function ControlHints({ hints }: { hints: Hint[] }) {
  return (
    <ul className="hints" aria-label="Comandos disponíveis">
      {hints.map((hint) => (
        <li key={hint.id} className="hints__item">
          <Glyph glyph={hint.glyph} />
          <span className="hints__label">{hint.label}</span>
          {hint.keys.length > 0 ? <span className="hints__keys">{hint.keys.join(' · ')}</span> : null}
        </li>
      ))}
    </ul>
  );
}
