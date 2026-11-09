# SENAI Arcade

Fliperama educacional do **Senai Lab**: um launcher web em tela cheia, navegável por
joystick, encoder arcade USB, gamepad ou teclado, que reúne jogos curtos e competitivos
das áreas dos cursos da escola. Roda 100% local (sem internet) em um Raspberry Pi em
modo quiosque.

> MVP: tela de categorias, lista de jogos, execução de jogos web locais, ajuda, tela de
> diagnóstico de controles e o jogo de demonstração **Duelo de Reflexos** (2 jogadores).

## Requisitos

- Node.js **22 LTS** (mínimo 20.19; ver `.nvmrc`) e npm.
- Chromium/Chrome para desenvolvimento (a Gamepad API foi pensada para Chromium).

## Comandos

Instalar dependências (versões fixadas no `package-lock.json`):

```bash
npm ci
```

Servidor de desenvolvimento em http://127.0.0.1:5173:

```bash
npm run dev
```

Build de produção (gera `dist/`, só arquivos estáticos):

```bash
npm run build
```

Servir o build localmente em http://127.0.0.1:4173:

```bash
npm run preview
```

Lint, tipos, testes unitários e build de uma vez:

```bash
npm run check
```

Testes end-to-end (Playwright; na primeira vez, instale o Chromium do Playwright):

```bash
npx playwright install chromium
```

```bash
npm run test:e2e
```

Pacote para o Raspberry Pi (`senai-arcade-dist.tar.gz`):

```bash
npm run package
```

| Script | O que faz |
|---|---|
| `dev` | Vite em modo desenvolvimento |
| `build` | `tsc -b` + build de produção |
| `preview` | Serve `dist/` |
| `lint` | ESLint |
| `typecheck` | TypeScript strict |
| `test` / `test:watch` | Vitest + React Testing Library |
| `test:e2e` | Playwright contra o build de produção |
| `check` | lint + typecheck + test + build |
| `package` | build + `senai-arcade-dist.tar.gz` |

## Controles (teclado)

| Ação | Jogador 1 | Jogador 2 |
|---|---|---|
| Mover | `W` `A` `S` `D` | Setas |
| Ação 1 / abrir | `J` | `Num 1` |
| Ação 2 / voltar um nível | `K` | `Num 2` |
| Confirmar / Start | `Enter`, `Espaço` | `Num Enter` |
| Sair do jogo / voltar | `Esc`, `Backspace` | `Num 0` |
| Ajuda | `H` | — |

Gamepads: D-pad ou analógico, botão 0 = Ação 1, 1 = Ação 2, 9 = Start, 8 = Voltar.
Detalhes, encoders e como alterar o mapeamento: [`docs/CONTROLS.md`](docs/CONTROLS.md).

## Documentação

| Documento | Conteúdo |
|---|---|
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Arquitetura, decisões técnicas e segurança |
| [`docs/CONTROLS.md`](docs/CONTROLS.md) | Mapeamento, encoders USB, gamepads, diagnóstico |
| [`docs/ADDING-GAMES.md`](docs/ADDING-GAMES.md) | Como adicionar um jogo e o protocolo `postMessage` v1 |
| [`docs/FIELD-TEST.md`](docs/FIELD-TEST.md) | Roteiro do piloto com pessoas e checklist físico |
| [`deploy/raspberry-pi/README.md`](deploy/raspberry-pi/README.md) | Instalação em quiosque, atualização e rollback |

## Adicionar um jogo (resumo)

1. Coloque o jogo em `public/games/<id>/index.html` (arquivos locais, sem CDN).
2. Registre-o em `public/catalog/games.json` (`status: "draft"` enquanto não aprovado).
3. O jogo envia `ready` ao launcher e recebe as entradas por `postMessage`.
4. `npm run check`, teste, mude para `"published"`, gere o pacote e publique.

Somente jogos **revisados e aprovados** pela equipe: o `iframe` de mesma origem não é
uma fronteira de segurança. Veja [`docs/ADDING-GAMES.md`](docs/ADDING-GAMES.md).

## Privacidade

O MVP não coleta nomes, e-mails, dados pessoais nem telemetria, e não faz requisições
para serviços externos. A pontuação das partidas só é exibida, não é salva.

## Situação

| Item | Situação |
|---|---|
| Launcher, navegação, ajuda, diagnóstico, runtime de jogos | ✅ implementado e coberto por testes |
| Duelo de Reflexos (2 jogadores) | ✅ implementado; partida completa coberta por E2E |
| Teclado | ✅ testado automaticamente (Chromium) |
| Encoder USB em modo teclado | ☐ teste físico pendente (usa o mesmo caminho do teclado) |
| Gamepad USB | ☐ teste físico pendente (lógica testada com controle simulado) |
| Implantação no Raspberry Pi (Nginx, Cage, systemd) | ☐ documentada e scripts verificados com `shellcheck`/simulação; **não executada em hardware real** |
| Piloto com pessoas | ☐ roteiro pronto em `docs/FIELD-TEST.md` |
