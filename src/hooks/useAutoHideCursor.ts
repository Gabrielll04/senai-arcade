import { useEffect } from 'react';

/** Oculta o cursor do mouse após um período sem movimento (fliperama sem mouse). */
export function useAutoHideCursor(delayMs = 2500): void {
  useEffect(() => {
    const root = document.documentElement;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const hide = () => root.classList.add('cursor-hidden');
    const show = () => {
      root.classList.remove('cursor-hidden');
      clearTimeout(timer);
      timer = setTimeout(hide, delayMs);
    };
    hide();
    window.addEventListener('mousemove', show);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', show);
      root.classList.remove('cursor-hidden');
    };
  }, [delayMs]);
}
