# Teste com pessoas no Senai Lab (piloto)

Objetivo: verificar se estudantes e funcionários conseguem **usar o fliperama sem
explicação** e se a experiência é divertida, antes de ampliar o catálogo.

## Privacidade

- **Não** registrar nomes, fotos, vídeos, contatos, matrícula, notas ou qualquer dado
  que identifique participantes.
- Registrar apenas **observações agregadas** (contagens, tempos aproximados,
  comentários sem autoria).
- O fliperama não coleta dados nem tem analytics; a pontuação não é salva.

## Preparação

- [ ] Equipamento montado no local definitivo, com a TV/monitor real.
- [ ] Build mais recente publicado (`sudo ./scripts/rollback.sh --list` mostra a ativa).
- [ ] Checklist físico abaixo executado pela equipe técnica no mesmo dia.
- [ ] Cronômetro (celular) e cópias impressas da tabela de observações.
- [ ] Observador posicionado sem interferir (não explicar os comandos).

## Roteiro (≈ 5 minutos por dupla)

1. Apresentar o equipamento **sem explicar os comandos**: "Este é o SENAI Arcade.
   Fiquem à vontade."
2. Pedir: "Encontrem a categoria de **Tecnologia da Informação**."
3. Pedir: "Iniciem o jogo **Duelo de Reflexos**." (iniciar o cronômetro no passo 2;
   parar quando o jogo abrir)
4. Pedir uma **partida completa com duas pessoas**.
5. Pedir: "Voltem ao menu e abram **outra categoria**."
6. Observar em quais momentos as pessoas hesitam, apertam botões errados ou pedem ajuda.
7. Fazer três perguntas rápidas (respostas anotadas sem identificar quem respondeu):
   1. "Foi fácil entender como começar?" (Sim / Mais ou menos / Não)
   2. "Os controles responderam como esperado?" (Sim / Mais ou menos / Não)
   3. "O que você mudaria?"

## Tabela de observações

Uma linha por sessão (dupla). Não incluir nomes.

| Sessão | Tempo até abrir o jogo (s) | Dúvidas sobre controles (nº) | Erros de navegação observados | Ocorrências técnicas / travamentos | Fácil começar? | Controles ok? | Sugestões |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |
| 4 | | | | | | | |
| 5 | | | | | | | |
| 6 | | | | | | | |

Exemplos de "erros de navegação": apertou Ação 2 achando que confirmava; não achou como
voltar; abriu categoria "Em breve" achando que tinha jogo; tentou usar o joystick do
outro lado; não percebeu o sinal "AGORA!".

## Resumo do piloto

| Indicador | Resultado |
|---|---|
| Sessões realizadas | |
| Mediana do tempo até abrir o primeiro jogo | |
| Sessões que precisaram de ajuda para começar | |
| Total de dúvidas sobre controles | |
| Erros de navegação mais frequentes | |
| Ocorrências técnicas (descrever) | |
| "Fácil começar?" — Sim / Mais ou menos / Não | |
| "Controles ok?" — Sim / Mais ou menos / Não | |
| Sugestões recorrentes (≥ 2 sessões) | |

## Critérios de decisão

Corrigir **antes de ampliar o catálogo** se ocorrer qualquer um:

- Qualquer travamento que exija reiniciar o Raspberry Pi, ou o desktop/terminal ficar
  visível em algum momento.
- Entrada perdida, duplicada ou "presa" observada mais de uma vez.
- Mais de 1 em cada 3 sessões precisou de ajuda para iniciar o primeiro jogo.
- Mediana do tempo até abrir o jogo acima de **60 s**.
- A maioria responde "Não" a "Os controles responderam como esperado?".
- Texto ilegível na distância de uso (relato de 2 sessões ou mais).

Pode seguir (registrando como melhoria) se:

- Dúvidas pontuais foram resolvidas sozinhas pela tela de ajuda ou pelas dicas do rodapé.
- Sugestões são de conteúdo (mais jogos, outros temas) e não de usabilidade básica.

## Checklist físico no Raspberry Pi (equipe técnica)

Anotar data, modelo do Raspberry Pi, versão do SO, encoder/gamepad usados.

| # | Verificação | Resultado |
|---|---|---|
| 1 | Desligar da tomada e religar: liga direto no menu, em tela cheia | ☐ |
| 2 | Nenhum desktop, terminal ou prompt de login aparece no boot | ☐ |
| 3 | Encoder USB configurado como teclado: todas as direções e botões aparecem no diagnóstico com o jogador certo | ☐ |
| 4 | Gamepad USB (se disponível): reconhecido no diagnóstico, D-pad/analógico e botões funcionam | ☐ |
| 5 | Navegação por todas as telas sem mouse (categorias, jogos, ajuda, diagnóstico, erro) | ☐ |
| 6 | Dois jogadores jogam o Duelo de Reflexos com controles separados | ☐ |
| 7 | Voltar ao menu (Esc/Select) durante o jogo, sem expor o desktop | ☐ |
| 8 | `sudo systemctl restart senai-arcade-kiosk` → volta ao menu sozinho | ☐ |
| 9 | Matar o Chromium (`sudo pkill chromium`) → serviço reinicia em ~3 s | ☐ |
| 10 | Desconectar e reconectar um controle durante o menu e durante o jogo | ☐ |
| 11 | Legibilidade a 2–3 m na TV/monitor real; nada cortado | ☐ |
| 12 | Wi-Fi e Ethernet desligados: menu e jogo funcionam | ☐ |
| 13 | 10 partidas seguidas abrindo/fechando o jogo: sem lentidão perceptível | ☐ |
| 14 | Memória (`free -m` via SSH) antes e depois das 10 partidas: sem crescimento contínuo | ☐ |
| 15 | Tempo do boot até o menu pronto (anotar) | ☐ |
| 16 | Tela não apaga após 15 min parada no menu | ☐ |
