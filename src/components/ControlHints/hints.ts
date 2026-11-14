import { keysFor } from '../../input/inputMap';

export interface Hint {
  id: string;
  /** Letra do botão do controle (círculo). */
  glyph?: 'A' | 'B';
  label: string;
  /** Teclas equivalentes no teclado / encoder. */
  keys: string[];
  /** Torna a dica clicável (útil com mouse/tela de toque durante testes). */
  onActivate?: () => void;
  testId?: string;
}

const unique = (items: string[]) => [...new Set(items)];

/** Dicas geradas a partir do mapeamento central (inputMap.ts). */
export const HINTS = {
  select: (label = 'Abrir'): Hint => ({
    id: 'select',
    glyph: 'A',
    label,
    keys: unique([...keysFor(1, 'action1'), ...keysFor(1, 'confirm').slice(0, 1)]),
  }),
  back: (onActivate?: () => void, label = 'Voltar'): Hint => ({
    id: 'back',
    glyph: 'B',
    label,
    keys: unique([...keysFor(1, 'action2'), ...keysFor(1, 'back').slice(0, 1)]),
    onActivate,
    testId: 'hint-back',
  }),
  exitGame: (): Hint => ({ id: 'exit', label: 'Sair do jogo', keys: keysFor(1, 'back') }),
  help: (onActivate?: () => void): Hint => ({ id: 'help', label: 'Ajuda', keys: keysFor(1, 'help'), onActivate }),
};
