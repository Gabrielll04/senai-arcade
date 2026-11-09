# Arquitetura do SENAI Arcade (MVP)

## Visão geral

```text
┌───────────────────────────────────────────────────────────────┐
│ Chromium (quiosque) → http://127.0.0.1/  (Nginx, estático)     │
│                                                               │
│  Launcher React (dist/)                                       │
│  ├── InputProvider ── InputManager ◄── KeyboardAdapter        │
│  │                         ▲       ◄── GamepadAdapter (rAF)   │
│  │                         │ ações normalizadas               │
│  ├── App (rotas internas: home / category / game / diagnostics)
│  │   ├── HomeScreen, CategoryScreen  ← catálogo validado (Zod)│
│  │   ├── DiagnosticsScreen                                    │
│  │   ├── GameRuntime ── iframe ── /games/<id>/index.html      │
│  │   │        ▲ postMessage 'senai-arcade' v1 ▼               │
│  │   └── HelpOverlay                                          │
│  └── /catalog/games.json                                      │
└───────────────────────────────────────────────────────────────┘
```

Não há backend em produção: o launcher, o catálogo e os jogos são arquivos estáticos
servidos pelo Nginx em `127.0.0.1`. Node.js só é usado para desenvolvimento, testes e build.

## Estrutura do repositório

```text
public/
  catalog/games.json             manifesto de categorias e jogos
  games/duelo-de-reflexos/       jogo de demonstração (HTML/CSS/JS puro)
  images/games/                  capas locais
src/
  app/                           App (roteamento interno) e tipos de rota
  components/                    componentes visuais reutilizáveis
  features/
    catalog/                     schema, carga do manifesto, telas Home/Categoria/Erro
    navigation/                  navegação espacial em grade (pura) + hook
    game-runtime/                protocolo postMessage e runtime em iframe
    controller-diagnostics/      tela de diagnóstico
  hooks/                         hooks de UI (scroll do item selecionado, cursor)
  input/                         camada de entrada independente do React
  styles/                        tokens (variáveis CSS) e estilos globais
  test/                          utilitários e testes das regras do jogo
tests/e2e/                       Playwright
deploy/raspberry-pi/             Nginx, systemd, PAM e scripts de implantação
docs/                            esta documentação
```

## Decisões

| Decisão | Motivo |
|---|---|
| **React + TypeScript strict + Vite** | Stack pedida, amplamente documentada; build estático. |
| **Rotas internas por estado** (sem React Router) | O quiosque não tem barra de endereço nem histórico; um `useState<Route>` é mais simples e evita uma dependência. |
| **Vite `appType: 'mpa'`** | Sem fallback de SPA: um jogo ausente responde 404 em dev/preview, igual ao Nginx. |
| **CSS por componente + variáveis CSS** | Sem biblioteca visual. Tamanho base em `rem` derivado de `min(1.25vw, 2.2vh)`, então tudo escala entre 720p e 1080p sem rolagem. |
| **Zod** para manifesto e mensagens | Validação em runtime com mensagens claras; tipos TypeScript derivados do schema. |
| **Camada de entrada fora do React** | `InputManager` e adaptadores são classes puras, testáveis com fontes simuladas. O React só recebe eventos em transições — nunca a cada frame. |
| **`KeyboardEvent.code`** | Mapeia posição física: independe de layout, Shift e NumLock. Ver `docs/CONTROLS.md`. |
| **Inscrição em `useLayoutEffect`** | A tela já escuta entradas quando aparece; uma tecla logo após a transição não se perde. |
| **Jogos em `iframe` + `postMessage` versionado** | O launcher não conhece a implementação do jogo; o jogo não conhece teclas. |
| **Launcher é dono dos controles** | Mesmo se o foco for parar no iframe, o `KeyboardAdapter` também escuta o `contentWindow` (mesma origem), e o foco volta ao launcher ao carregar o jogo. |
| **`back` com fallback** | O launcher envia `back` ao jogo (para ele salvar/limpar e responder `exit`), mas encerra sozinho em 600 ms — um jogo travado nunca prende o usuário. |
| **Verificação `HEAD` + timeout de `ready` (8 s)** | Detecta arquivo ausente na hora e jogo que não inicia; ambos mostram erro recuperável com "Voltar"/"Tentar novamente". "Tentar novamente" remonta o runtime do zero. |
| **Regras do jogo em módulo puro (`duel-core.js`)** | Lógica testada com Vitest; a UI (`game.js`) só controla timers e DOM. |
| **Releases com link simbólico** | Deploy atômico e rollback instantâneo no Raspberry Pi. |

## Camada de entrada

```text
KeyboardAdapter ─┐  RawInputChange             ArcadeInputEvent
                 ├──────────────► InputManager ───────────────► ouvintes (telas)
GamepadAdapter ──┘  {source, sourceId,          {player, action, phase,
                     player, action,             source, sourceId,
                     control, pressed}           control, repeat, timestamp}
```

- **KeyboardAdapter:** `keydown`/`keyup` em captura; ignora `event.repeat` e teclas já
  pressionadas; `preventDefault` só em teclas mapeadas (evita rolagem e ativação nativa
  de botões); ignora campos editáveis.
- **GamepadAdapter:** `requestAnimationFrame` somente com gamepad conectado e página
  visível; compara o estado anterior e emite só transições; dead zone + histerese;
  `null` no array é tolerado; jogadores atribuídos por índice crescente. Provedor,
  agendador e ambiente são injetáveis (testes sem hardware).
- **InputManager:** agrega por canal (fonte + dispositivo + jogador), resolve direções
  opostas cancelando o eixo, gera repetição direcional (280 ms / 120 ms), solta tudo em
  `blur` e `visibilitychange`. Erros de um ouvinte não afetam os demais.

## Ciclo de vida de um jogo

```text
GameScreen ─ key=attempt ─► GameRuntime
  status: loading ──ready──► running ──exit / back──► onExit() → tela da categoria
     │  HEAD 404 / timeout       │
     └──────────► error ◄────────┘ (onError do iframe)
                   ├─ Voltar ao menu → onExit()
                   └─ Tentar novamente → novo GameRuntime (novo iframe, timers e estado)
```

Ao sair, o `iframe` é removido do DOM, o que encerra os timers do jogo; o launcher não
recarrega a página. Os testes E2E abrem e fecham o jogo várias vezes seguidas.

## Segurança

- O manifesto só aceita caminhos locais (sem `..`, protocolo, host, query ou `\`).
- Mensagens do jogo são aceitas apenas do `contentWindow` do iframe atual, da mesma
  origem, com `protocol`/`version`/`type` conhecidos e payload estrito (campos extras
  rejeitados). `ready`/`score` precisam do `gameId` correto.
- O launcher nunca navega para URLs recebidas.
- O iframe usa `sandbox="allow-scripts allow-same-origin"` (bloqueia popups, formulários e
  navegação do topo), **mas isso não isola código malicioso de mesma origem**. Ver
  `docs/ADDING-GAMES.md` e o plano abaixo.
- Em produção, a CSP do Nginx bloqueia qualquer recurso externo e scripts inline.

## Próximos passos (fora do MVP)

- Isolamento real para jogos de alunos não revisados: servir jogos em outra origem
  (ex.: outra porta/host local) sem `allow-same-origin`, com CSP própria.
- Mapeamento de controles configurável sem rebuild (arquivo JSON validado).
- Medições de desempenho/memória no Raspberry Pi e ajustes a partir delas.
- Mais jogos por categoria e protocolo v2 se novos recursos forem necessários
  (ex.: pausa, áudio).
