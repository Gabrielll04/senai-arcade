import { render } from '@testing-library/react';
import manifest from '../../public/catalog/games.json';
import { App } from '../app/App';
import { parseCatalog } from '../features/catalog/catalog';
import type { Catalog } from '../features/catalog/schema';
import { InputProvider } from '../input/InputProvider';

export function officialCatalog(): Catalog {
  const parsed = parseCatalog(structuredClone(manifest));
  if (!parsed.ok) throw new Error(parsed.errors.join('\n'));
  return parsed.catalog;
}

export function renderApp(options: { loader?: () => Promise<Catalog>; handshakeTimeoutMs?: number } = {}) {
  const loader = options.loader ?? (() => Promise.resolve(officialCatalog()));
  return render(
    <InputProvider>
      <App catalogLoader={loader} handshakeTimeoutMs={options.handshakeTimeoutMs} />
    </InputProvider>,
  );
}

/** Pressiona e solta uma tecla física (por `code`) na janela. */
export function tap(code: string) {
  window.dispatchEvent(new KeyboardEvent('keydown', { code, bubbles: true, cancelable: true }));
  window.dispatchEvent(new KeyboardEvent('keyup', { code, bubbles: true, cancelable: true }));
}
