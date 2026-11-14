import type { ReactNode } from 'react';
import { ControlHints } from '../ControlHints/ControlHints';
import type { Hint } from '../ControlHints/hints';
import { TopBar } from '../TopBar/TopBar';
import './ArcadeShell.css';

interface ArcadeShellProps {
  section?: string;
  hints: Hint[];
  children: ReactNode;
}

/** Moldura comum: barra superior, conteúdo e dicas de botões no rodapé. */
export function ArcadeShell({ section, hints, children }: ArcadeShellProps) {
  return (
    <div className="shell">
      <TopBar section={section} />
      <main className="shell__main">{children}</main>
      <footer className="shell__footer">
        <ControlHints hints={hints} />
      </footer>
    </div>
  );
}
