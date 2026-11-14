export function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <figure className="code">
      {label ? <figcaption className="code__label">{label}</figcaption> : null}
      <pre className="code__body">{code}</pre>
    </figure>
  );
}
