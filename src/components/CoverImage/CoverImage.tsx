import { useState } from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import './CoverImage.css';

interface CoverImageProps {
  src: string | undefined;
  alt: string;
  fallbackIcon: IconName;
  fallbackLabel: string;
}

/** Imagem de capa local com fallback visual quando ausente ou quebrada. */
export function CoverImage({ src, alt, fallbackIcon, fallbackLabel }: CoverImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const showImage = src !== undefined && failedSrc !== src;

  return (
    <div className="cover">
      {showImage ? (
        <img
          className="cover__img"
          src={src}
          alt={alt}
          width={640}
          height={360}
          decoding="async"
          onError={() => {
            if (import.meta.env.DEV) console.warn(`[SENAI Arcade] Imagem não encontrada: ${src}`);
            setFailedSrc(src);
          }}
        />
      ) : (
        <div className="cover__fallback" role="img" aria-label={`${alt} (imagem indisponível)`} data-testid="cover-fallback">
          <Icon name={fallbackIcon} />
          <span>{fallbackLabel}</span>
        </div>
      )}
    </div>
  );
}
