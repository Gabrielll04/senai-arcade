import { createContext, useContext, useEffect, useLayoutEffect, useRef } from 'react';
import type { GamepadAdapter } from './gamepadAdapter';
import type { InputManager } from './InputManager';
import type { KeyboardAdapter } from './keyboardAdapter';
import type { ArcadeInputEvent } from './types';

export interface InputServices {
  manager: InputManager;
  keyboard: KeyboardAdapter;
  gamepads: GamepadAdapter;
}

export const InputContext = createContext<InputServices | null>(null);

export function useInputServices(): InputServices {
  const services = useContext(InputContext);
  if (!services) throw new Error('useInputServices deve ser usado dentro de <InputProvider>.');
  return services;
}

/**
 * Inscreve um handler em eventos normalizados enquanto `enabled` for verdadeiro.
 * O handler pode mudar a cada render sem refazer a inscrição.
 */
export function useArcadeInput(handler: (event: ArcadeInputEvent) => void, enabled = true): void {
  const { manager } = useInputServices();
  const handlerRef = useRef(handler);
  useLayoutEffect(() => {
    handlerRef.current = handler;
  });
  useEffect(() => {
    if (!enabled) return undefined;
    return manager.subscribe((event) => handlerRef.current(event));
  }, [manager, enabled]);
}
