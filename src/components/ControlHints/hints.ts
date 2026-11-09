import { keysFor } from '../../input/inputMap';

export interface Hint {
  id: string;
  controls: string[];
  label: string;
}

const unique = (items: string[]) => [...new Set(items)];

/** Dicas geradas a partir do mapeamento central (inputMap.ts). */
export const HINTS = {
  move: (): Hint => ({
    id: 'move',
    controls: [
      keysFor(1, 'up').concat(keysFor(1, 'left'), keysFor(1, 'down'), keysFor(1, 'right')).join(''),
      'Setas',
      'Direcional',
    ],
    label: 'Mover',
  }),
  select: (label = 'Abrir'): Hint => ({
    id: 'select',
    controls: unique([...keysFor(1, 'action1'), ...keysFor(1, 'confirm').slice(0, 1), 'Ação 1']),
    label,
  }),
  back: (label = 'Voltar'): Hint => ({
    id: 'back',
    controls: unique([...keysFor(1, 'back').slice(0, 1), ...keysFor(1, 'action2'), 'Ação 2']),
    label,
  }),
  exitGame: (): Hint => ({
    id: 'exit',
    controls: unique([...keysFor(1, 'back'), 'Select']),
    label: 'Sair do jogo',
  }),
  help: (): Hint => ({ id: 'help', controls: keysFor(1, 'help'), label: 'Ajuda' }),
};
