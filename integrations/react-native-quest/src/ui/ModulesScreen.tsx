import type { CSSProperties } from 'react';
import { QUEST_MODULES } from '../game/content';
import { MIXED, type ModuleChoice } from '../game/state';
import { Hints } from './Hints';

interface Props {
  choices: ModuleChoice[];
  index: number;
  players: 1 | 2;
}

export function ModulesScreen({ choices, index, players }: Props) {
  return (
    <div className="screen modules">
      <header className="modules__header">
        <h2>Escolha o módulo</h2>
        <p>{players === 1 ? '1 jogador · contra o Guardião' : '2 jogadores · disputa'}</p>
      </header>
      <ul className="modules__grid">
        {choices.map((choice, i) => {
          const module = choice === MIXED ? null : QUEST_MODULES.find((m) => m.id === choice);
          const style = { '--module-color': module?.color ?? '#61dafb' } as CSSProperties;
          return (
            <li key={String(choice)} className="module-card" data-selected={i === index} style={style}>
              <span className="module-card__kicker">{module ? `Módulo ${module.id}` : 'Todos os módulos'}</span>
              <span className="module-card__name">
                {module ? `${module.emoji} ${module.name}` : 'Desafio misto'}
              </span>
              <span className="module-card__components">
                {module ? module.components.join(' · ') : 'Perguntas sorteadas de todos os módulos'}
              </span>
            </li>
          );
        })}
      </ul>
      <Hints items={[{ glyph: 'A', label: 'Jogar' }, { glyph: 'B', label: 'Voltar' }]} />
    </div>
  );
}
