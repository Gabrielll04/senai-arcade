import { useState } from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import './Backdrop.css';

interface BackdropProps {
  /** Arte opcional (capa do jogo) desfocada ao fundo. */
  art?: string;
  /** Ícone grande e translúcido no canto. */
  watermark?: IconName;
}

export function Backdrop({ art, watermark }: BackdropProps) {
  const [failed, setFailed] = useState<string | null>(null);
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__glow" />
      <div className="backdrop__glow backdrop__glow--low" />
      {art && failed !== art ? (
        <img key={art} className="backdrop__art" src={art} alt="" onError={() => setFailed(art)} />
      ) : null}
      {watermark ? <Icon name={watermark} className="backdrop__watermark" /> : null}
    </div>
  );
}
