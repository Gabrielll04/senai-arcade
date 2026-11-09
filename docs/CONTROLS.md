# Controles do SENAI Arcade

Todo o mapeamento fica em **um único arquivo**: [`src/input/inputMap.ts`](../src/input/inputMap.ts).
Nenhum componente de interface conhece teclas ou botões crus — eles recebem apenas
ações normalizadas (`up`, `down`, `left`, `right`, `confirm`, `cancel`, `start`,
`action1`, `action2`, `back`, `help`) com o número do jogador.

## Mapeamento de teclado

| Ação | Jogador 1 | Jogador 2 |
|---|---|---|
| Cima | `W` | `↑` |
| Baixo | `S` | `↓` |
| Esquerda | `A` | `←` |
| Direita | `D` | `→` |
| Ação 1 (abre no menu) | `J` | `1` do teclado numérico |
| Ação 2 (volta um nível no menu) | `K` | `2` do teclado numérico |
| Confirmar / Start | `Enter` ou `Espaço` | `Enter` do teclado numérico |
| Voltar ao menu / sair do jogo | `Esc` ou `Backspace` | `0` do teclado numérico |
| Ajuda | `H` | — |

### Significado em cada contexto

| Contexto | Abrir/selecionar | Voltar |
|---|---|---|
| Menus (categorias, jogos) | Ação 1, Confirmar ou Start (qualquer jogador) | Ação 2, Cancelar ou Voltar |
| Ajuda | — | Ajuda, Voltar, Ação 2 ou Confirmar fecham |
| Durante o jogo | Tudo é encaminhado ao jogo com o número do jogador | **Voltar** encerra o jogo e retorna ao menu |
| Diagnóstico | Todas as entradas só são exibidas | **Voltar**, ou segurar Ação 2 por 1,5 s |

No menu, as direções dos **dois** jogadores movem a seleção.

### Por que `event.code`?

O launcher usa `KeyboardEvent.code` (posição física da tecla) e não `event.key`:

- o mapeamento não muda com o layout (ABNT2, US-International etc.);
- `Shift`, `CapsLock` e `NumLock` não alteram a ação (com NumLock desligado,
  `event.key` do `Numpad1` vira `End`, mas `event.code` continua `Numpad1`);
- encoders arcade enviam códigos de tecla fixos.

### Repetição e debounce

- A primeira direção é processada na hora; mantida, repete após **280 ms** e depois a
  cada **120 ms** (`DEFAULT_REPEAT_CONFIG`).
- `confirm`, `cancel`, `start`, `action1`, `action2`, `back` e `help` **nunca** repetem
  enquanto seguradas; o `keydown` repetido do sistema operacional é ignorado.
- Direções opostas ao mesmo tempo (ex.: cima + baixo do mesmo jogador) cancelam o eixo.
- Ao perder o foco ou ocultar a página, tudo é solto (nada fica "preso").
- Os jogos recebem apenas transições reais (`pressed`/`released`), sem as repetições
  geradas para os menus.

## Encoders arcade USB (modo teclado)

Muitos encoders (placas "zero delay", kits de botões USB) aparecem como **teclado HID**,
não como gamepad. Eles funcionam pelo mesmo adaptador de teclado, desde que cada botão
envie a tecla da tabela acima.

### Como identificar o tipo do dispositivo

1. Abra o SENAI Arcade e selecione **Diagnóstico de controles** na tela inicial.
2. Mexa o joystick e aperte os botões.
   - Aparece no painel **Teclado / encoder USB** → o encoder emula teclado.
   - Aparece no painel **Gamepads** → o encoder é um gamepad (Gamepad API).
   - Não aparece em nenhum → a tecla enviada não está mapeada, ou o dispositivo não foi
     reconhecido.
3. No Linux, também é possível conferir com `lsusb` e `cat /proc/bus/input/devices`
   (o encoder aparece com `Handlers=... kbd` quando emula teclado).

### Configurando o encoder

- Use o software/jumper do fabricante para programar cada botão com a tecla da tabela.
  Lado esquerdo = Jogador 1 (`W A S D`, `J`, `K`, `Enter`, `Esc`, `H`);
  lado direito = Jogador 2 (setas, `Num 1`, `Num 2`, `Num Enter`, `Num 0`).
- Se não for possível reprogramar o encoder, **ajuste o `KEYBOARD_MAP`** em
  `src/input/inputMap.ts` para as teclas que ele envia (veja o código exibido em
  "Código" na tela de diagnóstico), gere um novo build e publique.
- Evite teclas que o Chromium em quiosque possa interpretar como atalhos
  (`F5`, `F11`, `Ctrl+…`, `Alt+…`).

## Gamepads USB (Gamepad API)

Mapeamento padrão (`DEFAULT_GAMEPAD_MAPPING`, layout "standard" da Gamepad API):

| Entrada | Ação |
|---|---|
| D-pad (botões 12/13/14/15) | Cima / Baixo / Esquerda / Direita |
| Analógico esquerdo (eixos 0/1) | Direções |
| Botão 0 | Ação 1 |
| Botão 1 | Ação 2 |
| Botão 9 | Start |
| Botão 8 | Voltar (Select) |

- **Jogadores:** os gamepads conectados são ordenados pelo índice; o primeiro é o
  Jogador 1, o segundo, o Jogador 2. Os demais aparecem no diagnóstico como
  "Sem jogador".
- **Dead zone:** valores do analógico abaixo de `0.2` são ignorados (drift). A direção é
  acionada a partir de `0.55` e solta abaixo de `0.4` (histerese, evita tremulação).
- **Desconexão:** as ações do controle desconectado são soltas e a aplicação continua.
- **Polling:** só acontece enquanto há gamepad conectado e a página está visível,
  e o React só é atualizado quando algo muda.
- O Chromium só expõe um gamepad **depois que um botão é pressionado** nele.

### Ajustando para outro modelo

Nem todo controle segue o layout "standard". Na tela de diagnóstico, aperte cada botão
e anote o número que acende. Depois ajuste `DEFAULT_GAMEPAD_MAPPING.buttons`,
`axisX`/`axisY` e, se necessário, `DEFAULT_AXIS_CONFIG` em `src/input/inputMap.ts`.

## Hardware testado

| Dispositivo | Tipo | Resultado |
|---|---|---|
| Teclado de computador (Chromium, Linux) | Teclado | ✅ coberto pelos testes automatizados |
| Encoder arcade USB | Teclado HID | ☐ pendente de teste físico |
| Gamepad USB | Gamepad API | ☐ pendente de teste físico (lógica coberta por testes com controle simulado) |

Registre aqui modelos testados, mapeamentos necessários e limitações encontradas.
