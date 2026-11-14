import { StatusIndicator } from '../StatusIndicator/StatusIndicator';
import { Clock } from './Clock';
import './TopBar.css';

export function TopBar({ section }: { section?: string }) {
  return (
    <header className="topbar">
      <div className="topbar__title">
        <h1 className="topbar__brand">SENAI Arcade</h1>
        {section ? <h2 className="topbar__section">{section}</h2> : null}
      </div>
      <div className="topbar__right">
        <StatusIndicator />
        <Clock className="topbar__clock" />
      </div>
    </header>
  );
}
