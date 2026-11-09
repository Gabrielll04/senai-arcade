import { useEffect, useState } from 'react';

const format = (date: Date) => date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

/** Relógio local (atualiza a cada 15 s; não usa rede). */
export function Clock({ className }: { className?: string }) {
  const [time, setTime] = useState(() => format(new Date()));
  useEffect(() => {
    const timer = setInterval(() => setTime(format(new Date())), 15_000);
    return () => clearInterval(timer);
  }, []);
  return (
    <time className={className} aria-label={`Hora atual ${time}`}>
      {time}
    </time>
  );
}
