import type { Direction } from '../../input/types';

/**
 * Layout de navegação espacial: linhas de IDs selecionáveis.
 * Linhas podem ter tamanhos diferentes (ex.: grade de cards + linha de botões).
 */
export type GridLayout = ReadonlyArray<ReadonlyArray<string>>;

/** Divide uma lista em linhas de `columns` itens. */
export function chunk(ids: readonly string[], columns: number): string[][] {
  const rows: string[][] = [];
  for (let i = 0; i < ids.length; i += columns) rows.push(ids.slice(i, i + columns));
  return rows;
}

const clamp = (value: number, max: number) => Math.min(max, Math.max(0, value));

/**
 * Move a seleção na direção pedida. Não dá a volta nas bordas (comportamento
 * previsível no fliperama). Ao mudar para uma linha de tamanho diferente, usa a
 * posição proporcional. Linhas vazias são ignoradas.
 */
export function moveInGrid(layout: GridLayout, currentId: string, direction: Direction): string {
  const rows = layout.filter((row) => row.length > 0);
  const row = rows.findIndex((items) => items.includes(currentId));
  const currentRow = rows[row];
  if (!currentRow) return rows[0]?.[0] ?? currentId;
  const col = currentRow.indexOf(currentId);

  if (direction === 'left' || direction === 'right') {
    const delta = direction === 'left' ? -1 : 1;
    return currentRow[clamp(col + delta, currentRow.length - 1)] ?? currentId;
  }

  const targetRow = rows[direction === 'up' ? row - 1 : row + 1];
  if (!targetRow) return currentId;
  const targetCol =
    targetRow.length === currentRow.length
      ? col
      : Math.round((currentRow.length > 1 ? col / (currentRow.length - 1) : 0) * (targetRow.length - 1));
  return targetRow[clamp(targetCol, targetRow.length - 1)] ?? currentId;
}
