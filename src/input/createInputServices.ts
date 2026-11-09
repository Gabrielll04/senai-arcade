import { GamepadAdapter } from './gamepadAdapter';
import type { InputServices } from './InputContext';
import { InputManager } from './InputManager';
import { KeyboardAdapter } from './keyboardAdapter';

/** Monta teclado + Gamepad API + InputManager para o navegador. */
export function createBrowserInputServices(): InputServices {
  const keyboard = new KeyboardAdapter(window);
  const gamepads = new GamepadAdapter();
  const manager = new InputManager({ sources: [keyboard, gamepads] });
  return { manager, keyboard, gamepads };
}
