export interface Hint {
  glyph?: string;
  label: string;
}

/** Dicas de controle no rodapé (mesma linguagem do launcher: Ⓐ / Ⓑ). */
export function Hints({ items }: { items: Hint[] }) {
  return (
    <footer className="hints">
      {items.map((item) => (
        <span key={item.label} className="hints__item">
          {item.glyph ? <span className="glyph">{item.glyph}</span> : null}
          {item.label}
        </span>
      ))}
    </footer>
  );
}
