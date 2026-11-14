# React Native Quest — versão fliperama

| | |
|---|---|
| Jogo original | React Native Quest: Component Guardians — https://github.com/Gabrielll04/jogo-react-native-componentes |
| Commit usado | `4e01eb96b74f9704e6404241b6315b33b366c7fd` (fixado em `build.sh`) |
| Destino | `public/games/react-native-quest/` (build gerada — **não editar à mão**) |
| Catálogo | `react-native-quest`, categoria `ti`, 1–2 jogadores, `competitive`, **`status: "draft"`** |
| Imagens | `public/images/games/react-native-quest-capa.webp` (512×512, mascote e logo do jogo) e `-destaque.webp` (1280×720, captura de uma pergunta em dupla) |

## O que é

O Quest original é uma ferramenta de aula: servidor Node + Socket.io, progresso salvo
pelo **nome** do aluno, painel do professor, editor de código, blocos de JSX e
playgrounds clicáveis. Nada disso cabe num fliperama offline jogado com joystick, e o
SENAI Arcade não coleta nomes nem roda backend.

Esta pasta contém uma **versão fliperama original**, feita para o SENAI Arcade, que
reaproveita o **conteúdo** do Quest — módulos, componentes, perguntas, explicações,
o código "por trás da tela" e as **demos vivas** (componentes React Native de verdade
via react-native-web) — e o importa direto do repositório do Quest no momento do build.
O repositório do Quest **não é alterado** e seu código-fonte não é copiado para cá.

### Como se joga

| Tela | Controles |
|---|---|
| Título | Cima/baixo: 1 ou 2 jogadores · A: escolher |
| Módulos | Direcional: escolher um dos 6 módulos ou o desafio misto · A: jogar · B: voltar |
| Pergunta | Direcional: mover seu cursor nas alternativas (grade 2×2) · A: confirmar |
| Resposta | A: próxima pergunta (vem sozinha depois de 20 s) |
| Resultado | Cima/baixo + A: jogar de novo ou trocar de módulo · B: módulos |
| Qualquer tela | Voltar (Esc / Select): sair para o menu do fliperama |

- **1 jogador:** 8 perguntas contra o Guardião do módulo, com 3 corações. Errar ou deixar
  o tempo acabar custa um coração. Os controles dos dois lados do fliperama comandam o
  mesmo jogador.
- **2 jogadores:** as mesmas 8 perguntas, cada um com seu cursor (J1 azul, J2 rosa). A
  resposta aparece quando os dois confirmam ou o tempo acaba. Acerto vale 100 + até 50
  de bônus de rapidez.
- Tempo por pergunta: 20 s (30 s nas de código). A partida alterna os formatos.

### Conteúdo usado do Quest

| Formato no Quest | Na versão fliperama |
|---|---|
| Oráculo (quiz com demo viva) | "Qual é o componente?" — demo viva ou código + 4 alternativas |
| Ferreiro de Bugs | "Conserte o bug" — código com bug + 4 correções em código |
| Mural dos Usos (ligar) | "Para que serve?" — cada par vira uma pergunta com o uso em destaque |
| Guardião | Modo solo com 3 corações e o nome do Guardião do módulo |
| Monte a tela (blocos), Laboratório, duelos de código, lições/playgrounds | **Fora**: exigem teclado, mouse ou servidor |

Depois de cada resposta aparecem a explicação do Quest e, quando existe, o código
"por trás da tela" da demo.

### Integração com o launcher

Protocolo `senai-arcade` v1 (`src/arcade.ts`):

- envia `ready` (`gameId: react-native-quest`) ao carregar;
- recebe `input` e usa `up/down/left/right`, `confirm/action1/start` e `action2/cancel`;
- `back` em qualquer tela para os sons e responde `exit`;
- ao fim de cada partida envia `score` (1 placar no solo, 2 em dupla).

Dentro do launcher o jogo não registra listeners de teclado. Aberto **direto** no
navegador (`/games/react-native-quest/index.html`, só para desenvolvimento), usa um
teclado de reserva com o mesmo mapeamento do launcher.

Sem servidor, sem Socket.io, sem nomes e sem progresso salvo. As únicas requisições são
aos arquivos do próprio pacote (o teste E2E confirma que nada sai da máquina). A demo
viva do AsyncStorage, vinda do Quest, **lê** a chave de exemplo `demo_nome` do
`localStorage`; ela só gravaria se alguém tocasse no botão da demo, o que não é possível
pelo controle. Fontes (Pixelify Sans, Nunito, JetBrains Mono — só o alfabeto
latino), imagens e sons ficam dentro do pacote (~780 kB no total).

## Arquivos

| Arquivo | Função |
|---|---|
| `build.sh` | Clona o Quest no commit fixado (em `.quest/`), copia as imagens e sons usados, instala dependências, checa tipos, roda os testes e gera a build em `public/games/react-native-quest/`. |
| `vite.config.ts` | Build com `base: './'`, alias `react-native → react-native-web` e `@quest → .quest/`. Um plugin reescreve as imagens das demos de `/img/…` para `./img/…` (o Quest original as serve na raiz do site). |
| `src/game/questions.ts` | Converte o conteúdo do Quest em perguntas de múltipla escolha. |
| `src/game/state.ts` | Máquina de estados pura (menus, cursores, tempo, corações, pontuação). |
| `src/game/*.test.ts` | Testes da conversão (com o conteúdo real do Quest) e das regras. |
| `src/arcade.ts` | Ponte `postMessage` com o launcher. |
| `src/ui/` | Telas. `DemoView` escala a demo viva para caber no espaço disponível. |

`.quest/`, `public/`, `node_modules/` e `dist/` são gerados e ficam fora do git.
Este pacote tem dependências próprias: o launcher não ganhou nenhuma dependência nova.

## Desenvolvimento

Na primeira vez rode o `build.sh` (ele prepara `.quest/` e `public/`). Depois:

```bash
cd integrations/react-native-quest && npm run dev
```

Abra http://127.0.0.1:5180 e jogue com o teclado (W A S D, J, K, Enter, Esc; setas e
teclado numérico para o jogador 2).

```bash
npm test
```

```bash
npm run typecheck
```

## Como atualizar quando o Quest mudar

1. Troque `QUEST_COMMIT` em `build.sh` pelo commit novo.
2. Na raiz do senai-arcade:

   ```bash
   ./integrations/react-native-quest/build.sh
   ```

   O `npm test` desta pasta roda com o conteúdo real do Quest: se a estrutura de
   `server/src/content/challenges.ts`, `shared/modules.ts` ou `client/src/ui/demos.tsx`
   mudar, os testes ou a checagem de tipos acusam.
3. Novas perguntas, módulos e demos do Quest entram automaticamente; novos *formatos*
   de desafio precisam de suporte em `src/game/questions.ts`.
4. Confira no senai-arcade:

   ```bash
   npm run check
   ```

   ```bash
   npm run test:e2e
   ```

5. Faça commit do `build.sh` e de `public/games/react-native-quest/`.

Para testar um checkout local do Quest:
`./integrations/react-native-quest/build.sh --source ../jogo-react-native-componentes`.

## Testes

| Onde | O quê |
|---|---|
| `integrations/react-native-quest` (`npm test`) | Conversão do conteúdo real dos 6 módulos; sorteio; menus; cursores por jogador; tempo; corações; pontuação; vencedor. |
| `src/features/catalog/catalog.test.ts` | Entrada do catálogo válida e em `draft`. |
| `src/features/game-runtime/GameRuntime.test.tsx` | Pontuação de 1 placar num jogo de até 2 jogadores. |
| `tests/e2e/react-native-quest.spec.ts` | iframe + `ready`, menus só com o controle, solo, dupla com dois cursores, `score`, `exit` e volta ao menu, nenhuma requisição externa/servidor. |

As demos foram conferidas em 1280×720 e 1920×1080 (nenhuma ultrapassa o espaço).

## Pendente

- Teste com alunos e no Raspberry Pi (as demos usam react-native-web; medir fluidez no Pi 3).
- Aprovação do conteúdo pela equipe e então `"status": "published"` em
  `public/catalog/games.json`.
