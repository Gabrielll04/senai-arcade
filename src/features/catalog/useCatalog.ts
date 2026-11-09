import { useCallback, useEffect, useState } from 'react';
import { CatalogError, loadCatalog } from './catalog';
import type { Catalog } from './schema';

export type CatalogState =
  | { status: 'loading' }
  | { status: 'ready'; catalog: Catalog }
  | { status: 'error'; error: CatalogError };

export function useCatalog(loader: () => Promise<Catalog> = loadCatalog) {
  const [state, setState] = useState<CatalogState>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    loader()
      .then((catalog) => {
        if (!cancelled) setState({ status: 'ready', catalog });
      })
      .catch((error: unknown) => {
        const catalogError =
          error instanceof CatalogError ? error : new CatalogError('Erro inesperado ao carregar o catálogo.', [String(error)]);
        console.error('[SENAI Arcade]', catalogError.message, catalogError.details);
        if (!cancelled) setState({ status: 'error', error: catalogError });
      });
    return () => {
      cancelled = true;
    };
  }, [loader, attempt]);

  const reload = useCallback(() => {
    setState({ status: 'loading' });
    setAttempt((value) => value + 1);
  }, []);

  return { state, reload };
}
