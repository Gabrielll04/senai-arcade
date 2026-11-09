import { StatusIndicator } from '../StatusIndicator/StatusIndicator';
import './Header.css';

export function Header({ subtitle }: { subtitle?: string }) {
  return (
    <header className="header">
      <div className="header__brand">
        <h1 className="header__logo" aria-label="SENAI Arcade">
          <span>Senai</span> <span>Arcade</span>
        </h1>
        {subtitle ? <p className="header__subtitle">{subtitle}</p> : null}
      </div>
      <StatusIndicator />
    </header>
  );
}
