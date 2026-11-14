# Como adicionar um jogo

Adicionar um jogo **aprovado** não exige mudar o código do launcher: basta colocar os
arquivos estáticos em `public/` e registrar o jogo no manifesto.

> **Segurança:** os jogos rodam em um `iframe` de mesma origem com
> `allow-scripts allow-same-origin`. Isso **não é uma fronteira de segurança**: um jogo
> consegue acessar o launcher. No MVP, instale **somente jogos próprios ou revisados e
> aprovados pela equipe responsável**. Não publique código de alunos sem revisão.
> Antes de aceitar jogos não revisados será preciso isolamento real (origem separada,
> CSP específica, permissões restritas).

## Passo a passo

1. Crie a pasta `public/games/<id-do-jogo>/` com um `index.html` e os demais arquivos.
   - Use **apenas caminhos relativos** dentro da pasta (`./game.js`, `./img/x.png`).
   - Nada de CDN, fontes externas, analytics ou chamadas de rede.
   - Para jogos feitos com Vite/React, gere o build com `base: './'` e copie o
     conteúdo de `dist/` para a pasta.
2. Adicione as imagens do jogo em `public/images/games/` (WebP recomendado):
   - **capa** quadrada (1:1), recomendado **512×512** — usada nos tiles das fileiras;
   - **destaque** 16:9, recomendado **1280×720** — usada no topo da tela da área.
   Uma captura de tela real do jogo funciona muito bem nos dois casos. Sem imagem, o
   launcher reserva o espaço com um tom sólido e o nome do jogo. A capa do primeiro jogo
   publicado de uma área também vira a imagem do tile da área na tela inicial (a menos
   que a área tenha `cover` própria).
3. Registre o jogo em `public/catalog/games.json`:

   ```json
   {
     "id": "quiz-de-redes",
     "title": "Quiz de Redes",
     "description": "Responda perguntas sobre redes de computadores.",
     "categoryId": "ti",
     "entry": "/games/quiz-de-redes/index.html",
     "cover": "/images/games/quiz-de-redes-capa.webp",
     "hero": "/images/games/quiz-de-redes-destaque.webp",
     "minPlayers": 1,
     "maxPlayers": 2,
     "mode": "competitive",
     "authors": ["Turma TI 2026"],
     "status": "draft",
     "controls": "Direcional escolhe, Ação 1 confirma."
   }
   ```

4. Rode a validação e os testes:

   ```bash
   npm run check
   ```

5. Teste no navegador com `npm run dev`. Jogos com `"status": "draft"` não aparecem;
   troque para `"published"` quando o jogo for aprovado.
6. Gere o pacote e publique no Raspberry Pi
   ([`deploy/raspberry-pi/README.md`](../deploy/raspberry-pi/README.md)).

## Jogos de outro repositório

Quando o jogo vive em um repositório próprio (ex.: feito com Vite), não copie o
código-fonte para cá. Crie uma pasta em `integrations/<id>/` com um script que clona
um commit fixado, aplica as adaptações ao protocolo, roda os testes do jogo e copia
**apenas** a build (`dist/`, com `base: './'`) para `public/games/<id>/`. Adicione
`public/games/<id>` aos `ignores` do `eslint.config.js` (é código gerado).

Exemplos:
- [`integrations/stardust-runner/`](../integrations/stardust-runner/README.md): jogo
  pronto, com um patch pequeno aplicado no build;
- [`integrations/react-native-quest/`](../integrations/react-native-quest/README.md):
  versão fliperama nova que importa o **conteúdo** de outro repositório no build.

## Regras do manifesto

O manifesto é validado em tempo de execução ([`src/features/catalog/schema.ts`](../src/features/catalog/schema.ts)).
Se algo estiver inválido, o fliperama mostra "Catálogo indisponível" e o console de
desenvolvimento lista cada erro.

| Campo | Regra |
|---|---|
| `version` | Sempre `1`. |
| `id` | Único; minúsculas, números e hífens (`quiz-de-redes`). |
| `categoryId` | Deve existir em `categories`. |
| `entry` | Caminho local iniciado em `/`, terminando em `.html`, sem `..`, protocolo, host ou query. |
| `cover` | Opcional; capa quadrada 1:1 (`.webp`, `.avif`, `.png`, `.jpg`, `.svg`). |
| `hero` | Opcional; imagem de destaque 16:9. Sem ela, a capa é usada no destaque. |
| `minPlayers` / `maxPlayers` | Inteiros de 1 a 2, com `minPlayers ≤ maxPlayers`. |
| `mode` | `solo`, `cooperative` ou `competitive`. |
| `status` | `published` (aparece e pode ser iniciado) ou `draft` (oculto). |
| `authors` | Opcional; lista de nomes de projeto/turma. **Não use dados pessoais.** |
| `controls` | Opcional; texto curto com os controles. |

Categorias usam `id`, `title`, `description`, `icon` (um de `code`, `settings`, `zap`,
`package`, `clipboard-list`, `scissors`, `trophy`, `graduation-cap` — define o tom de cor
do espaço reservado da área) e `cover` opcional (quadrada, 512×512).
A contagem de jogos de cada categoria é calculada a partir dos jogos publicados.

## Protocolo `senai-arcade` versão 1

O launcher é dono dos controles e conversa com o jogo por `window.postMessage`.
**O jogo não deve registrar listeners de teclado ou gamepad** — ele recebe as ações
já normalizadas, com o número do jogador.

Toda mensagem tem o formato:

```ts
{ protocol: 'senai-arcade', version: 1, type: string, payload: object }
```

### Launcher → jogo

`input` — uma transição de controle:

```ts
{
  protocol: 'senai-arcade',
  version: 1,
  type: 'input',
  payload: {
    player: 1 | 2,
    action: 'up' | 'down' | 'left' | 'right' |
            'confirm' | 'cancel' | 'start' | 'action1' | 'action2' | 'back',
    phase: 'pressed' | 'released'
  }
}
```

- Só chegam transições reais (sem repetição automática). Se o jogo quiser repetição,
  ele a implementa a partir de `pressed`/`released`.
- `back` é um **pedido de saída**: o jogo deve limpar seus timers e responder `exit`.
  Se não responder em ~600 ms, o launcher encerra o jogo mesmo assim.
- O teclado `Enter` chega como `confirm`; o botão Start do gamepad, como `start`.
  Para "começar a partida", aceite os dois.
- Entradas só são enviadas depois que o jogo envia `ready`.

### Jogo → launcher

Envie sempre para `window.parent` com a origem do próprio site:

```js
window.parent.postMessage(message, window.location.origin);
```

| Tipo | Payload | Quando |
|---|---|---|
| `ready` | `{ gameId: '<id do manifesto>' }` | Assim que o jogo estiver pronto para receber entradas. **Obrigatório**: sem ele, o launcher mostra erro após 8 s. |
| `exit` | `{ reason: 'user-request' \| 'game-over' \| 'error' }` | Para voltar ao menu. |
| `score` | `{ gameId, scores: [{ player: 1, value: 3 }, { player: 2, value: 2 }] }` | Ao terminar uma partida. Inteiros ≥ 0. Exibido no rodapé, não é salvo. |

O launcher valida `event.source` (precisa ser o iframe do jogo), `event.origin`,
`protocol`, `version`, `type` e o formato exato do payload (campos extras são
rejeitados). Mensagens fora do padrão são ignoradas. O launcher **nunca** navega para
URLs recebidas do jogo.

### Esqueleto mínimo

> Em produção, o Nginx envia uma CSP com `script-src 'self'`: **scripts inline são
> bloqueados**. Coloque o JavaScript em um arquivo `.js` separado.

`public/games/meu-jogo/index.html`:

```html
<!doctype html>
<html lang="pt-BR">
  <head><meta charset="UTF-8" /><title>Meu jogo</title></head>
  <body>
    <p id="status">Pressione Ação 1</p>
    <script src="./game.js"></script>
  </body>
</html>
```

`public/games/meu-jogo/game.js`:

```js
const GAME_ID = 'meu-jogo';
const send = (type, payload) =>
  window.parent.postMessage({ protocol: 'senai-arcade', version: 1, type, payload }, location.origin);

window.addEventListener('message', (event) => {
  if (event.origin !== location.origin || event.source !== window.parent) return;
  const msg = event.data;
  if (msg?.protocol !== 'senai-arcade' || msg.version !== 1 || msg.type !== 'input') return;
  const { player, action, phase } = msg.payload;
  if (phase !== 'pressed') return;
  if (action === 'back') return send('exit', { reason: 'user-request' });
  if (action === 'action1') document.getElementById('status').textContent = `Jogador ${player} apertou!`;
});

send('ready', { gameId: GAME_ID });
```

O jogo de demonstração completo está em
[`public/games/duelo-de-reflexos/`](../public/games/duelo-de-reflexos/), com as regras
puras separadas em `duel-core.js` (testadas em `src/test/duelCore.test.ts`).

## Checklist de revisão de um jogo

- [ ] Código revisado pela equipe; sem `fetch`/XHR/WebSocket para fora, sem CDN.
- [ ] Não acessa `window.parent` além do `postMessage` do protocolo.
- [ ] Não registra listeners de teclado/gamepad próprios.
- [ ] Envia `ready` ao carregar e responde `back` com `exit`.
- [ ] Limpa timers/animações ao reiniciar e ao sair.
- [ ] Textos grandes e legíveis a distância; não depende de som para informação essencial.
- [ ] Funciona em 1280×720 e 1920×1080 sem rolagem.
- [ ] Não coleta nomes, e-mails ou outros dados pessoais.
- [ ] Testado no Raspberry Pi real (desempenho e memória após várias partidas).
