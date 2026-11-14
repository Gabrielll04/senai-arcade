import { useState, type CSSProperties, type ReactNode } from 'react';
import './Artwork.css';

interface ArtworkProps {
  src?: string;
  alt: string;
  shape: 'square' | 'wide';
  /** Tom de fundo quando não há imagem. */
  tone?: string;
  /** Texto do espaço reservado (normalmente o nome). */
  name: string;
  note?: ReactNode;
}

/** Imagem de jogo/área com espaço reservado quando a arte não existe ou falha. */
export function Artwork({ src, alt, shape, tone, name, note }: ArtworkProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const showImage = src !== undefined && failedSrc !== src;
  const style = tone ? ({ '--artwork-tone': tone } as CSSProperties) : undefined;

  return (
    <span className={`artwork artwork--${shape}`} style={style}>
      {showImage ? (
        <img
          className="artwork__img"
          src={src}
          alt={alt}
          width={shape === 'square' ? 512 : 1280}
          height={shape === 'square' ? 512 : 720}
          decoding="async"
          onError={() => {
            if (import.meta.env.DEV) console.warn(`[SENAI Arcade] Imagem não encontrada: ${src}`);
            setFailedSrc(src);
          }}
        />
      ) : (
        <span className="artwork__placeholder" role="img" aria-label={`${alt} (imagem indisponível)`} data-testid="cover-fallback">
          <span className="artwork__name">{name}</span>
          {note ? <span className="artwork__note">{note}</span> : null}
        </span>
      )}
    </span>
  );
}
