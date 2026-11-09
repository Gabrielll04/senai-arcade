import { Icon } from '../Icon/Icon';
import { StatusIndicator } from '../StatusIndicator/StatusIndicator';
import { Clock } from './Clock';
import './TopBar.css';

export function TopBar({ subtitle }: { subtitle?: string }) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <h1 className="topbar__logo" aria-label="SENAI Arcade">
          <span className="topbar__mark" aria-hidden="true">
            <Icon name="gamepad" />
          </span>
          SENAI <span className="topbar__logo-sub">Arcade</span>
        </h1>
        {subtitle ? (
          <p className="topbar__crumb">
            <span>{subtitle}</span>
          </p>
        ) : null}
      </div>
      <div className="topbar__right">
        <StatusIndicator />
        <Clock className="topbar__clock" />
      </div>
    </header>
  );
}
