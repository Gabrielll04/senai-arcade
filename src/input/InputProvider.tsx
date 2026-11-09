import { useEffect, useState, type ReactNode } from 'react';
import { createBrowserInputServices } from './createInputServices';
import { InputContext, type InputServices } from './InputContext';

interface InputProviderProps {
  children: ReactNode;
  /** Permite injetar serviços simulados em testes. */
  services?: InputServices;
}

export function InputProvider({ children, services: injected }: InputProviderProps) {
  const [services] = useState<InputServices>(() => injected ?? createBrowserInputServices());

  useEffect(() => {
    services.manager.start();
    return () => services.manager.stop();
  }, [services]);

  return <InputContext.Provider value={services}>{children}</InputContext.Provider>;
}
