import type { CSSProperties, ReactNode } from 'react';
import { Backdrop } from '../Backdrop/Backdrop';
import { ControlHints } from '../ControlHints/ControlHints';
import type { Hint } from '../ControlHints/hints';
import type { IconName } from '../Icon/Icon';
import { TopBar } from '../TopBar/TopBar';
import './ArcadeShell.css';

interface ArcadeShellProps {
  subtitle?: string;
  hints: Hint[];
  children: ReactNode;
  /** Variáveis de tema (--accent etc.) aplicadas à tela inteira. */
  themeStyle?: Record<string, string>;
  backdropArt?: string;
  watermark?: IconName;
}

/** Moldura comum das telas: fundo dinâmico, barra superior, conteúdo e dicas de botões. */
export function ArcadeShell({ subtitle, hints, children, themeStyle, backdropArt, watermark }: ArcadeShellProps) {
  return (
    <div className="shell" style={themeStyle as CSSProperties | undefined}>
      <Backdrop art={backdropArt} watermark={watermark} />
      <TopBar subtitle={subtitle} />
      <main className="shell__main">{children}</main>
      <footer className="shell__footer">
        <ControlHints hints={hints} />
      </footer>
    </div>
  );
}
