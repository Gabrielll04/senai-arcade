import { useEffect, useRef } from 'react';

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Mantém o item selecionado visível quando a lista for maior que a tela.
 * `center` centraliza o item (usado no carrossel).
 */
export function useScrollIntoViewWhenSelected<T extends HTMLElement>(selected: boolean, center = false) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (selected && typeof ref.current?.scrollIntoView === 'function') {
      ref.current.scrollIntoView({
        block: 'nearest',
        inline: center ? 'center' : 'nearest',
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
    }
  }, [selected, center]);
  return ref;
}
