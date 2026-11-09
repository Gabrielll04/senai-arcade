import { describe, expect, it } from 'vitest';
import { chunk, moveInGrid } from './grid';

const layout = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'g', 'h'],
  ['diag', 'help'],
];

describe('moveInGrid', () => {
  it('move horizontalmente sem dar a volta', () => {
    expect(moveInGrid(layout, 'a', 'right')).toBe('b');
    expect(moveInGrid(layout, 'a', 'left')).toBe('a');
    expect(moveInGrid(layout, 'd', 'right')).toBe('d');
  });

  it('move verticalmente mantendo a coluna', () => {
    expect(moveInGrid(layout, 'b', 'down')).toBe('f');
    expect(moveInGrid(layout, 'f', 'up')).toBe('b');
    expect(moveInGrid(layout, 'a', 'up')).toBe('a');
  });

  it('usa posição proporcional ao entrar em linha de tamanho diferente', () => {
    expect(moveInGrid(layout, 'e', 'down')).toBe('diag');
    expect(moveInGrid(layout, 'h', 'down')).toBe('help');
    expect(moveInGrid(layout, 'help', 'up')).toBe('h');
    expect(moveInGrid(layout, 'diag', 'up')).toBe('e');
    expect(moveInGrid(layout, 'help', 'down')).toBe('help');
  });

  it('volta ao primeiro item se o atual não existir', () => {
    expect(moveInGrid(layout, 'zzz', 'down')).toBe('a');
  });

  it('ignora linhas vazias', () => {
    expect(moveInGrid([['a'], [], ['b']], 'a', 'down')).toBe('b');
  });
});

describe('chunk', () => {
  it('divide em linhas', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });
});
