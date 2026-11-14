import { useLayoutEffect, useRef, useState } from 'react';
import { Demo } from '@quest/client/src/ui/demos';

/** Maior ampliação permitida (as demos do Quest são desenhadas em px para ~720p). */
const MAX_SCALE = 1.6;

/**
 * Demonstração viva do Quest (componente React Native real via react-native-web),
 * escalada para caber no espaço disponível — algumas demos têm dois celulares.
 */
export function DemoView({ id }: { id: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState({ scale: 1, width: 0, height: 0 });

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const content = contentRef.current;
    if (!frame || !content) return undefined;
    const measure = () => {
      // transform não altera o layout: offsetWidth/Height são o tamanho natural.
      const naturalW = content.offsetWidth || 1;
      const naturalH = content.offsetHeight || 1;
      const scale = Math.min(MAX_SCALE, frame.clientWidth / naturalW, frame.clientHeight / naturalH);
      setFit({ scale, width: naturalW * scale, height: naturalH * scale });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    observer.observe(content);
    return () => observer.disconnect();
  }, [id]);

  return (
    <div ref={frameRef} className="demo-frame" aria-label="Demonstração do componente">
      <div className="demo-box" style={{ width: fit.width, height: fit.height }}>
        <div ref={contentRef} className="demo" style={{ transform: `scale(${fit.scale})` }}>
          <Demo id={id} />
        </div>
      </div>
    </div>
  );
}
