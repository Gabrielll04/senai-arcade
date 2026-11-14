# Integração: STARDUST RUNNER

| | |
|---|---|
| Jogo | STARDUST RUNNER (endless runner 3D pixelado, three.js/WebGL, Web Audio) |
| Repositório | https://github.com/Gabrielll04/jogo-2d-speed-runner |
| Commit integrado | `4aa14b44a768c5e0f3fdb402c42ae3c3421bd679` (fixado em `build.sh`) |
| Destino | `public/games/stardust-runner/` (build gerada — **não editar à mão**) |
| Catálogo | `stardust-runner`, categoria `ti`, `solo`, 1 jogador, **`status: "draft"`** |
| Imagens | `public/images/games/stardust-runner-capa.webp` (512×512) e `-destaque.webp` (1280×720), capturas reais da demonstração do jogo |

## Como funciona

O código do jogo **não** é copiado para este repositório. Ficam aqui apenas:

| Arquivo | Função |
|---|---|
| `build.sh` | Clona o jogo no commit fixado, aplica o patch, roda os testes do jogo, gera a build Vite com `base: './'` e copia só o `dist/` para `public/games/stardust-runner/`. |
| `senai-arcade.patch` | Adaptações para rodar dentro do launcher (abaixo). |

O pacote final tem só `index.html` e `assets/` (JS + CSS, ~160 kB gzip). Sem
`node_modules`, código-fonte ou dependências de desenvolvimento, e sem nenhum recurso
externo: tudo é gerado proceduralmente (texturas, modelos e áudio).

### O que o patch muda no jogo

Tudo fica atrás de `modoArcade` (o jogo está dentro de um iframe). Aberto direto no
navegador, pelo `server.js` ou por pendrive, o jogo continua **exatamente** como antes.

| Arquivo do jogo | Mudança |
|---|---|
| `src/core/arcade.js` (novo) | Ponte com o protocolo `senai-arcade` v1: valida mensagens `input` (origem, janela pai, protocolo, versão), traduz ações, envia `ready`, `exit` e `score`. |
| `src/core/arcade.test.js` (novo) | Testes da tradução de ações e da validação de mensagens (`npm test` do jogo). |
| `src/core/input.js` | No modo arcade **não registra** listeners de teclado, toque ou mouse; as ações chegam do launcher. |
| `src/main.js` | Envia `ready` depois do primeiro quadro; `back` encerra (para o loop, cancela timers, suspende o áudio, libera o WebGL) e responde `exit`; envia `score` ao fim da corrida; pula a tela de apelido; adapta os textos de controle. |
| `src/ui/screens.js` | Chamada do attract: "APERTE A OU ENTER PARA COMECAR". |
| `src/config.js` | `LEADERBOARD_URL = ''` — placar em rede desligado. |
| `package.json` | `npm test` inclui `test:arcade`. |

### Mapeamento de controles

| Launcher (`input`) | Jogo | Observação |
|---|---|---|
| `left` / `right` | trocar de pista | |
| `up` | pular | No attract e na tela de fim, também **começa** a partida. |
| `confirm`, `action1`, `start` | começar / continuar | Durante a corrida, também **pula** (botão A/Enter). |
| `down`, `action2` | deslizar | |
| `back` | sair | Para o loop, timers e áudio, libera a GPU e responde `exit`. |

- Só `pressed` é usado (o jogo trata cada ação como um toque); `released` é ignorado.
- Jogo solo: as ações dos dois lados do fliperama (jogador 1 e 2) controlam a mesma nave.
- Atalhos de PC do jogo (`P` pausa, `M` mudo, `C` configurações, `F` tela cheia, `F3` FPS)
  não existem no fliperama; o ajuste automático de qualidade continua ativo.
- A tela "QUEM VAI CORRER?" (campo de texto de apelido) é pulada: o fliperama não coleta
  nomes. O recorde local do jogo continua funcionando, sem apelido.

### Placar

- O placar em rede do jogo está desligado (`LEADERBOARD_URL = ''`), então nenhuma
  chamada `/api/*` é feita.
- Ao fim de cada corrida o jogo envia ao launcher
  `{ type: 'score', payload: { gameId: 'stardust-runner', scores: [{ player: 1, value }] } }`
  (inteiro, limitado a 1.000.000). O launcher mostra "Pontuação: …" no rodapé e **não**
  salva nada.

## Áudio (Web Audio API e autoplay)

O jogo cria o `AudioContext` ao carregar para a demonstração tocar sozinha.

| Situação | Resultado (verificado em Chromium com Playwright) |
|---|---|
| Quiosque com `--autoplay-policy=no-user-gesture-required` | Áudio toca assim que o jogo carrega. **Já é a flag usada** em `deploy/raspberry-pi/scripts/senai-arcade-browser`. |
| Chromium sem a flag, jogo aberto **pelo launcher** | Também toca: a tecla que abre o jogo conta como gesto do usuário para a mesma origem, e o iframe é de mesma origem. |
| Chromium sem a flag, jogo aberto **direto**, sem tecla | Bloqueado (`suspended`); o jogo mostra "SOM BLOQUEADO… APERTE UMA TECLA" e libera no primeiro comando. |

O iframe do launcher declara `allow="autoplay"`. Recomendação: manter a flag no
quiosque, como já está. Testes: `tests/e2e/stardust-audio-*.spec.ts`.

## Desempenho e memória

Medido em Chromium headless com WebGL por software (SwiftShader), em 1280×720:

- O jogo renderiza internamente em **320×180** e amplia com pixels inteiros; o
  "governador" de qualidade do jogo segue ativo e reduz resolução/partículas se o FPS cair.
- ~59–60 FPS na máquina de teste — **não representa o Raspberry Pi**.
- Abrindo e fechando o jogo 6 vezes seguidas, o heap JS volta a ~3,3 MB após cada saída
  (de 2,8 MB antes da primeira abertura), os listeners voltam ao valor inicial e o iframe
  é removido. Ao sair, o jogo também chama `forceContextLoss()` para devolver a memória
  da GPU imediatamente.

### Pendente no hardware real (Raspberry Pi 3 Model B e 4 Model B)

| # | Verificação | Pi 3 B | Pi 4 B |
|---|---|---|---|
| 1 | WebGL ativo no Chromium sob Cage (`chrome://gpu` numa sessão de manutenção) | ☐ | ☐ |
| 2 | FPS durante a corrida (ver abaixo) e qualidade escolhida pelo governador | ☐ | ☐ |
| 3 | Sem engasgos perceptíveis na troca de pista e no pulo | ☐ | ☐ |
| 4 | Memória (`free -m`) antes e depois de 10 partidas abrindo/fechando o jogo | ☐ | ☐ |
| 5 | Áudio no attract e na corrida pela saída de som usada no fliperama | ☐ | ☐ |
| 6 | `back` volta ao menu em menos de 1 s | ☐ | ☐ |

O Pi 3 tem pouca memória e GPU modesta: se o FPS ficar baixo mesmo com o governador
na qualidade mínima, avalie manter o jogo apenas no Pi 4.

Para ver o FPS no Pi, numa sessão de manutenção abra o jogo **direto**
(`http://127.0.0.1/games/stardust-runner/index.html`): fora do launcher os atalhos
de PC voltam a funcionar — `F3` mostra o FPS e `C` abre as configurações. No console,
`window.stardust.fps()` e `window.stardust.audio()` também ajudam.

## Testes

| Onde | O quê |
|---|---|
| `npm test` do jogo (rodado pelo `build.sh`) | Testes originais do jogo + `arcade.test.js`. |
| `src/features/catalog/catalog.test.ts` | Entrada do catálogo válida e em `draft`. |
| `src/features/game-runtime/GameRuntime.test.tsx` | Pontuação de jogo solo no rodapé. |
| `tests/e2e/stardust-runner.spec.ts` | Carregamento pelo iframe, `ready`, attract preservado, teclado (pista, pulo, deslize, sem tecla duplicada), `score`, `exit` e volta ao menu, nenhuma requisição externa. |
| `tests/e2e/stardust-audio-*.spec.ts` | Áudio com e sem a flag de autoplay. |

Nos testes E2E o jogo é publicado apenas na resposta interceptada do catálogo; o
`games.json` real continua `draft`.

## Como atualizar o jogo

1. Escolha o novo commit do repositório do jogo e troque `UPSTREAM_COMMIT` em `build.sh`.
2. Rode na raiz do senai-arcade:

   ```bash
   ./integrations/stardust-runner/build.sh
   ```

3. Se o patch não se aplicar (o jogo mudou nos mesmos trechos):

   ```bash
   git clone https://github.com/Gabrielll04/jogo-2d-speed-runner /tmp/stardust
   ```

   ```bash
   cd /tmp/stardust && git checkout NOVO_COMMIT && git apply --3way /caminho/senai-arcade/integrations/stardust-runner/senai-arcade.patch
   ```

   Resolva os conflitos, confirme com `npm test` e gere o patch novo:

   ```bash
   git add -A && git diff --cached NOVO_COMMIT > /caminho/senai-arcade/integrations/stardust-runner/senai-arcade.patch
   ```

4. No senai-arcade, confira tudo:

   ```bash
   npm run check
   ```

   ```bash
   npm run test:e2e
   ```

5. Se o visual do jogo mudou, atualize as capturas em `public/images/games/`.
6. Faça commit do `build.sh`, do patch e de `public/games/stardust-runner/`.

Para testar mudanças locais do jogo sem publicar no GitHub, use
`./integrations/stardust-runner/build.sh --source ../jogo-2d-speed-runner` (o commit
fixado precisa existir nesse checkout).

**Sugestão:** como as mudanças só ativam dentro de um iframe, o patch pode ser
incorporado ao próprio repositório do jogo; aí o `build.sh` deixa de precisar dele.

## Aprovação

Depois de revisar o código e validar no hardware (tabela acima), troque
`"status": "draft"` para `"published"` em `public/catalog/games.json`, gere o pacote
(`npm run package`) e publique (`deploy/raspberry-pi/README.md`).
