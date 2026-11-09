import { keysFor } from '../../input/inputMap';

export type GlyphVariant = 'a' | 'b' | 'start' | 'neutral';

export interface Hint {
  id: string;
  /** Botão do controle (glyph circular). `dpad` desenha o direcional. */
  glyph: { label: string; variant: GlyphVariant } | 'dpad';
  /** Teclas equivalentes no teclado / encoder. */
  keys: string[];
  label: string;
}

const unique = (items: string[]) => [...new Set(items)];

/** Dicas geradas a partir do mapeamento central (inputMap.ts). */
export const HINTS = {
  move: (): Hint => ({
    id: 'move',
    glyph: 'dpad',
    keys: [keysFor(1, 'up').concat(keysFor(1, 'left'), keysFor(1, 'down'), keysFor(1, 'right')).join(''), 'Setas'],
    label: 'Mover',
  }),
  select: (label = 'Abrir'): Hint => ({
    id: 'select',
    glyph: { label: 'A', variant: 'a' },
    keys: unique([...keysFor(1, 'action1'), ...keysFor(1, 'confirm').slice(0, 1)]),
    label,
  }),
  back: (label = 'Voltar'): Hint => ({
    id: 'back',
    glyph: { label: 'B', variant: 'b' },
    keys: unique([...keysFor(1, 'action2'), ...keysFor(1, 'back').slice(0, 1)]),
    label,
  }),
  exitGame: (): Hint => ({
    id: 'exit',
    glyph: { label: 'SELECT', variant: 'neutral' },
    keys: keysFor(1, 'back'),
    label: 'Sair do jogo',
  }),
  help: (): Hint => ({ id: 'help', glyph: { label: '?', variant: 'start' }, keys: keysFor(1, 'help'), label: 'Ajuda' }),
};
