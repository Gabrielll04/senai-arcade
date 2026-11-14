import type { ReactNode } from 'react';
import { useScrollIntoViewWhenSelected } from '../../hooks/useScrollIntoViewWhenSelected';
import './Tile.css';

interface TileProps {
  label: string;
  ariaLabel: string;
  selected: boolean;
  onActivate: () => void;
  testId: string;
  children: ReactNode;
}

/** Item quadrado de uma fileira horizontal (áreas na tela inicial, jogos na tela da área). */
export function Tile({ label, ariaLabel, selected, onActivate, testId, children }: TileProps) {
  const ref = useScrollIntoViewWhenSelected<HTMLButtonElement>(selected);
  return (
    <button
      ref={ref}
      type="button"
      className="tile"
      data-selected={selected}
      aria-current={selected ? 'true' : undefined}
      aria-label={ariaLabel}
      data-testid={testId}
      tabIndex={-1}
      onClick={onActivate}
    >
      <span className="tile__label" aria-hidden="true">
        {label}
      </span>
      {children}
    </button>
  );
}
