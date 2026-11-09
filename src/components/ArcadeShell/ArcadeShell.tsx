import type { ReactNode } from 'react';
import { ControlHints } from '../ControlHints/ControlHints';
import type { Hint } from '../ControlHints/hints';
import { Header } from '../Header/Header';
import './ArcadeShell.css';

interface ArcadeShellProps {
  subtitle?: string;
  hints: Hint[];
  children: ReactNode;
}

/** Moldura comum das telas do launcher: cabeçalho, conteúdo e dicas de controle. */
export function ArcadeShell({ subtitle, hints, children }: ArcadeShellProps) {
  return (
    <div className="shell">
      <Header subtitle={subtitle} />
      <main className="shell__main">{children}</main>
      <footer className="shell__footer">
        <ControlHints hints={hints} />
      </footer>
    </div>
  );
}
