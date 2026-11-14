import { Hints } from './Hints';

const OPTIONS = [
  { title: '1 jogador', detail: 'Enfrente o Guardião do módulo com 3 corações.' },
  { title: '2 jogadores', detail: 'Mesmas perguntas, cada um com seu cursor. Quem acerta mais rápido pontua mais.' },
];

export function TitleScreen({ index }: { index: number }) {
  return (
    <div className="screen title">
      <div className="title__brand">
        <img className="title__mascot" src="./img/reacto.svg" alt="" width={120} height={120} />
        <div>
          <h1 className="title__logo">
            React Native <span>Quest</span>
          </h1>
          <p className="title__tag">Edição fliperama · aprenda os componentes do React Native</p>
        </div>
      </div>
      <ul className="menu" aria-label="Modo de jogo">
        {OPTIONS.map((option, i) => (
          <li key={option.title} className="menu__item" data-selected={i === index}>
            <span className="menu__title">{option.title}</span>
            <span className="menu__detail">{option.detail}</span>
          </li>
        ))}
      </ul>
      <Hints items={[{ glyph: 'A', label: 'Escolher' }, { label: 'Voltar: sair do jogo' }]} />
    </div>
  );
}
