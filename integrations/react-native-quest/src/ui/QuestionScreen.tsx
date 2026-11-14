import type { Question } from '../game/questions';
import { HEARTS, type GameState } from '../game/state';
import { CodeBlock } from './CodeBlock';
import { DemoView } from './DemoView';
import { Hints } from './Hints';

const KIND_LABEL: Record<Question['kind'], string> = {
  quiz: 'Qual é o componente?',
  bug: 'Conserte o bug',
  match: 'Para que serve?',
};

interface Props {
  state: GameState;
  question: Question;
  moduleName: string;
  guardian: string | null;
  /** 0–1: tempo restante (só na pergunta). */
  timeLeft: number;
}

function Media({ question, revealed }: { question: Question; revealed: boolean }) {
  if (revealed && question.reveal) return <CodeBlock code={question.reveal} label="Por trás da tela" />;
  if (question.demo) return <DemoView id={question.demo} />;
  if (question.code) return <CodeBlock code={question.code} label={question.kind === 'bug' ? 'Código com bug' : 'Código'} />;
  if (question.quote) {
    return (
      <blockquote className="media-quote">
        <span className="media-quote__label">Uso</span>
        <span className="media-quote__text">{question.quote}</span>
      </blockquote>
    );
  }
  return (
    <div className="media-card">
      <span>{KIND_LABEL[question.kind]}</span>
    </div>
  );
}

export function QuestionScreen({ state, question, moduleName, guardian, timeLeft }: Props) {
  const revealed = state.screen === 'reveal';
  const two = state.players === 2;
  const [p1, p2] = state.round;

  const markers = (i: number) => (
    <span className="option__markers">
      {(two ? [p1, p2] : [p1]).map((p, k) =>
        p.cursor === i || p.locked === i ? (
          <span key={k} className={`marker marker--p${k + 1}`} data-locked={p.locked === i}>
            {two ? `J${k + 1}` : 'Você'}
            {p.locked === i ? ' ✓' : ''}
          </span>
        ) : null,
      )}
    </span>
  );

  const status = (i: number) => {
    if (!revealed) return undefined;
    if (i === question.correct) return 'correct';
    if (p1.locked === i || (two && p2.locked === i)) return 'wrong';
    return 'dim';
  };

  return (
    <div className="screen question" data-kind={question.kind} data-revealed={revealed}>
      <header className="question__top">
        <div className="question__where">
          <span className="question__module">{moduleName}</span>
          <span className="question__count">
            Pergunta {state.qIndex + 1} de {state.questions.length} · {KIND_LABEL[question.kind]}
          </span>
        </div>
        {two ? (
          <div className="scoreboard">
            <span className="scoreboard__p1">J1 {p1.score}</span>
            <span className="scoreboard__p2">J2 {p2.score}</span>
          </div>
        ) : (
          <div className="scoreboard">
            {guardian ? <span className="scoreboard__guardian">{guardian}</span> : null}
            <span className="hearts" aria-label={`${state.hearts} corações`}>
              {Array.from({ length: HEARTS }, (_, i) => (
                <span key={i} className="heart" data-full={i < state.hearts} />
              ))}
            </span>
            <span className="scoreboard__p1">{p1.score} pts</span>
          </div>
        )}
      </header>

      <div className="timer" aria-hidden="true">
        <span className="timer__bar" style={{ transform: `scaleX(${revealed ? 0 : timeLeft})` }} />
      </div>

      <div className="question__body">
        <section className="question__media">
          <Media question={question} revealed={revealed} />
        </section>
        <section className="question__main">
          <h2 className="question__prompt">{question.prompt}</h2>
          <ol className={`options${question.codeOptions ? ' options--code' : ''}`}>
            {question.options.map((option, i) => (
              <li key={i} className="option" data-status={status(i)}>
                {question.codeOptions ? <pre className="option__code">{option}</pre> : <span>{option}</span>}
                {markers(i)}
              </li>
            ))}
          </ol>
          {revealed ? (
            <div className="feedback">
              <p className="feedback__result">
                {(two ? [p1, p2] : [p1]).map((p, k) => (
                  <span key={k} className={p.correct ? 'feedback--ok' : 'feedback--bad'}>
                    {two ? `J${k + 1}: ` : ''}
                    {p.correct ? `Acertou! +${p.gained}` : p.locked === null ? 'Tempo esgotado' : 'Errou'}
                  </span>
                ))}
              </p>
              <p className="feedback__explanation">{question.explanation}</p>
            </div>
          ) : null}
        </section>
      </div>

      <Hints
        items={
          revealed
            ? [{ glyph: 'A', label: 'Próxima' }, { label: 'Voltar: sair' }]
            : [{ label: 'Direcional: escolher' }, { glyph: 'A', label: 'Confirmar' }, { label: 'Voltar: sair' }]
        }
      />
    </div>
  );
}
