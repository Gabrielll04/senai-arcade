import { useEffect, useRef, useState } from 'react';
import { ArcadeShell } from '../../components/ArcadeShell/ArcadeShell';
import type { Hint } from '../../components/ControlHints/hints';
import type { GamepadSnapshot } from '../../input/gamepadAdapter';
import { ACTION_LABELS, DEFAULT_GAMEPAD_MAPPING, keyLabel, keysFor } from '../../input/inputMap';
import { useArcadeInput, useInputServices } from '../../input/InputContext';
import type { ArcadeInputEvent } from '../../input/types';
import './DiagnosticsScreen.css';

/** Tempo segurando Ação 2 para sair (para gamepads sem botão Select). */
export const HOLD_TO_EXIT_MS = 1500;
const SNAPSHOT_INTERVAL_MS = 150;
const LOG_SIZE = 8;

interface LoggedEvent {
  id: number;
  text: string;
  phase: ArcadeInputEvent['phase'];
}

function describeEvent(event: ArcadeInputEvent): string {
  const device = event.source === 'keyboard' ? `Tecla ${keyLabel(event.control)}` : `${event.sourceId} ${event.control}`;
  const phase = event.phase === 'pressed' ? 'pressionado' : 'solto';
  return `${device} → J${event.player} ${ACTION_LABELS[event.action]} (${phase})`;
}

interface DiagnosticsScreenProps {
  onBack: () => void;
  inputEnabled: boolean;
}

/**
 * Diagnóstico de controles para suporte técnico. Mostra a última entrada de
 * teclado, as ações normalizadas e o estado dos gamepads. Todas as ações são
 * apenas exibidas — só `back` (ou segurar Ação 2) sai da tela.
 */
export function DiagnosticsScreen({ onBack, inputEnabled }: DiagnosticsScreenProps) {
  const { gamepads } = useInputServices();
  const [lastKey, setLastKey] = useState<ArcadeInputEvent | null>(null);
  const [log, setLog] = useState<LoggedEvent[]>([]);
  const [pads, setPads] = useState<GamepadSnapshot[]>(() => gamepads.getSnapshots());
  const nextId = useRef(0);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Atualiza o painel de gamepads em baixa frequência e só quando algo mudou.
  useEffect(() => {
    let previous = '';
    const update = () => {
      const snapshots = gamepads.getSnapshots();
      const serialized = JSON.stringify(snapshots);
      if (serialized !== previous) {
        previous = serialized;
        setPads(snapshots);
      }
    };
    const interval = setInterval(update, SNAPSHOT_INTERVAL_MS);
    const unsubscribe = gamepads.onDevicesChanged(update);
    return () => {
      clearInterval(interval);
      unsubscribe();
    };
  }, [gamepads]);

  useEffect(
    () => () => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
    },
    [],
  );

  useArcadeInput((event) => {
    if (event.repeat) return;
    if (event.source === 'keyboard') setLastKey(event);
    nextId.current += 1;
    const entry: LoggedEvent = { id: nextId.current, text: describeEvent(event), phase: event.phase };
    setLog((current) => [entry, ...current].slice(0, LOG_SIZE));

    if (event.action === 'back' && event.phase === 'pressed') {
      onBack();
    } else if (event.action === 'action2') {
      if (event.phase === 'pressed' && !holdTimer.current) {
        holdTimer.current = setTimeout(onBack, HOLD_TO_EXIT_MS);
      } else if (event.phase === 'released' && holdTimer.current) {
        clearTimeout(holdTimer.current);
        holdTimer.current = null;
      }
    }
  }, inputEnabled);

  const hints: Hint[] = [
    { id: 'exit', label: 'Sair', keys: [...keysFor(1, 'back'), 'Select'], onActivate: onBack },
    { id: 'hold', glyph: 'B', label: 'Segure 1,5 s para sair', keys: keysFor(1, 'action2') },
  ];

  const mappedButtons = new Set(Object.keys(DEFAULT_GAMEPAD_MAPPING.buttons).map(Number));

  return (
    <ArcadeShell section="Testar controles" hints={hints}>
      <div className="diagnostics" data-testid="diagnostics">
        <section className="diagnostics__panel" aria-labelledby="diag-keyboard">
          <h2 id="diag-keyboard">
            Teclado e encoder USB
          </h2>
          <p className="diagnostics__instructions">
            Pressione cada direção e cada botão dos dois lados do fliperama. Cada entrada reconhecida aparece abaixo
            com o jogador e a ação correspondente. Teclas não mapeadas não aparecem.
          </p>
          <dl className="diagnostics__last" data-testid="diag-last-key">
            <dt>Última tecla</dt>
            <dd>{lastKey ? keyLabel(lastKey.control) : '—'}</dd>
            <dt>Código</dt>
            <dd>{lastKey ? lastKey.control : '—'}</dd>
            <dt>Ação</dt>
            <dd>{lastKey ? `Jogador ${lastKey.player} · ${ACTION_LABELS[lastKey.action]}` : '—'}</dd>
          </dl>
          <h2>Entradas recentes</h2>
          <ol className="diagnostics__log" aria-label="Entradas recentes" data-testid="diag-log">
            {log.map((entry) => (
              <li key={entry.id} data-phase={entry.phase}>
                {entry.text}
              </li>
            ))}
          </ol>
        </section>

        <section className="diagnostics__panel" aria-labelledby="diag-gamepads">
          <h2 id="diag-gamepads">
            Gamepads
          </h2>
          <div className="diagnostics__pads" data-testid="diag-gamepads">
            {pads.length === 0 ? (
              <p className="diagnostics__empty">
                Nenhum gamepad detectado. Isso é normal se o fliperama usa um encoder USB que emula teclado — nesse caso,
                use o painel ao lado. Se o seu controle é um gamepad, conecte-o e pressione qualquer botão para o
                navegador reconhecê-lo.
              </p>
            ) : (
              pads.map((pad) => (
                <article key={pad.index} className="diagnostics__pad">
                  <div className="diagnostics__pad-header">
                    <span className="diagnostics__player" data-player={pad.player ?? 'none'}>
                      {pad.player ? `Jogador ${pad.player}` : 'Sem jogador'}
                    </span>
                    <strong>#{pad.index}</strong>
                    <span>{pad.id}</span>
                    <span>
                      {pad.buttonCount} botões · {pad.axisCount} eixos · layout {pad.mapping}
                    </span>
                  </div>
                  <div className="diagnostics__buttons" aria-label="Botões">
                    {Array.from({ length: pad.buttonCount }, (_, index) => (
                      <span
                        key={index}
                        className="diagnostics__button"
                        data-pressed={pad.pressedButtons.includes(index)}
                        data-mapped={mappedButtons.has(index)}
                        title={DEFAULT_GAMEPAD_MAPPING.buttons[index] ? ACTION_LABELS[DEFAULT_GAMEPAD_MAPPING.buttons[index]] : 'não mapeado'}
                      >
                        {index}
                      </span>
                    ))}
                  </div>
                  <div className="diagnostics__axes">
                    Eixos: {pad.axes.slice(0, 4).map((value, index) => `${index}: ${value.toFixed(2)}`).join('  ')}
                  </div>
                  <div className="diagnostics__axes">
                    Ações: {pad.actions.length > 0 ? pad.actions.map((action) => ACTION_LABELS[action]).join(', ') : '—'}
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </div>
    </ArcadeShell>
  );
}
