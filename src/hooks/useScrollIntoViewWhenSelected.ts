import { useEffect, useRef } from 'react';

/** Mantém o item selecionado visível quando a lista for maior que a tela. */
export function useScrollIntoViewWhenSelected<T extends HTMLElement>(selected: boolean) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (selected && typeof ref.current?.scrollIntoView === 'function') {
      ref.current.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }, [selected]);
  return ref;
}
