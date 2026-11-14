import { summary, type GameState } from '../game/state';
import { Hints } from './Hints';

export function ResultsScreen({ state, guardian }: { state: GameState; guardian: string | null }) {
  const s = summary(state);
  const title =
    s.players === 1
      ? s.guardianDefeated
        ? `Você venceu ${guardian ? `o ${guardian}` : 'o desafio'}!`
        : `${guardian ?? 'O Guardião'} venceu desta vez`
      : s.winner === null
        ? 'Empate!'
        : `Jogador ${s.winner} venceu!`;

  return (
    <div className="screen results">
      <h2 className="results__title">{title}</h2>
      <div className="results__scores">
        {s.scores.map((score, i) => (
          <div key={score.player} className={`result-card result-card--p${score.player}`}>
            <span className="result-card__who">{s.players === 1 ? 'Pontuação' : `Jogador ${score.player}`}</span>
            <span className="result-card__score">{score.value}</span>
            <span className="result-card__hits">
              {s.hits[i]} de {s.total} acertos
            </span>
          </div>
        ))}
      </div>
      <ul className="menu menu--compact">
        {['Jogar de novo', 'Escolher outro módulo'].map((label, i) => (
          <li key={label} className="menu__item" data-selected={i === state.resultsIndex}>
            <span className="menu__title">{label}</span>
          </li>
        ))}
      </ul>
      <Hints items={[{ glyph: 'A', label: 'Escolher' }, { glyph: 'B', label: 'Módulos' }, { label: 'Voltar: sair' }]} />
    </div>
  );
}
