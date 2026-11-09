# Implantação no Raspberry Pi

Este guia instala o SENAI Arcade como **quiosque**: o Raspberry Pi liga direto na
interface do fliperama, em tela cheia, sem desktop, terminal ou barra de endereço.

```text
boot → systemd → nginx (127.0.0.1:80, arquivos estáticos)
             └→ senai-arcade-kiosk.service → cage (Wayland) → chromium --kiosk http://127.0.0.1/
```

> ## ⚠️ Situação da validação
>
> Os arquivos desta pasta foram escritos a partir da documentação oficial do
> Raspberry Pi OS, do Cage e do Chromium, e os scripts foram verificados com
> `bash -n`, `shellcheck` e uma simulação de deploy/rollback em um computador Linux.
> **Eles ainda não foram executados em um Raspberry Pi real.** Até que o checklist
> da seção [Validação no hardware](#validação-no-hardware-pendente) seja concluído,
> trate cada passo como **pendente de validação** e registre ajustes neste arquivo.

## Conteúdo

| Arquivo | Destino no Raspberry Pi | Função |
|---|---|---|
| `scripts/install.sh` | (executado da pasta) | Prepara o sistema (pacotes, usuário, Nginx, serviço). Idempotente. |
| `scripts/deploy.sh` | (executado da pasta) | Publica um build como nova release e a ativa. |
| `scripts/rollback.sh` | (executado da pasta) | Volta para a release anterior ou uma específica. |
| `scripts/common.sh` | (usado pelos scripts) | Funções compartilhadas. |
| `scripts/senai-arcade-browser` | `/usr/local/bin/senai-arcade-browser` | Inicia o Chromium em modo quiosque. |
| `nginx/senai-arcade.conf` | `/etc/nginx/sites-available/senai-arcade` | Site estático só em `127.0.0.1`. |
| `systemd/senai-arcade-kiosk.service` | `/etc/systemd/system/` | Cage + Chromium no `tty1`, reinício automático. |
| `pam/senai-arcade-kiosk` | `/etc/pam.d/senai-arcade-kiosk` | Sessão de login (logind) do quiosque. |

Diretórios de produção:

```text
/opt/senai-arcade/
├── releases/
│   ├── 20260110-142000/   ← cada deploy (conteúdo de dist/)
│   └── 20260112-091500/
└── current -> releases/20260112-091500   ← servido pelo Nginx
```

## Pré-requisitos

- Raspberry Pi com Raspberry Pi OS **Lite 64-bit** (o alvo documentado; a imagem
  exata e o modelo do Pi devem ser validados com os jogos reais).
- Acesso administrativo (teclado + monitor ou SSH) **apenas para a equipe responsável**.
- Internet **somente durante a instalação** (para `apt`). Depois disso, o fliperama
  funciona offline.

### Pacotes usados (verificar na imagem escolhida)

O Raspberry Pi OS Lite **não** vem com Chromium, Cage nem servidor web.
O `install.sh` instala:

| Componente | Pacote | Observação |
|---|---|---|
| Servidor HTTP | `nginx` | |
| Compositor de quiosque | `cage` | Disponível nos repositórios Debian. Confirme com `apt-cache policy cage`. |
| Navegador | `chromium` **ou** `chromium-browser` | O nome mudou entre versões do Raspberry Pi OS. O script detecta qual existe com `apt-cache show`. |
| Verificação HTTP | `curl` | Usado pelos scripts para conferir o site. |

Antes de instalar, confira na imagem escolhida:

```bash
cat /etc/os-release
```

```bash
apt-cache policy cage chromium chromium-browser nginx
```

## 1. Gerar o build (no computador de desenvolvimento)

```bash
npm ci
```

```bash
npm run check
```

```bash
npm run package
```

O último comando gera `senai-arcade-dist.tar.gz` com o conteúdo de `dist/`.

## 2. Copiar para o Raspberry Pi

Copie a pasta `deploy/raspberry-pi/` e o pacote do build (por exemplo, por pendrive
ou `scp` na rede de manutenção):

```bash
scp -r deploy/raspberry-pi senai-arcade-dist.tar.gz admin@IP-DO-PI:~/
```

## 3. Instalar (uma vez)

No Raspberry Pi:

```bash
cd ~/raspberry-pi && sudo ./scripts/install.sh
```

O script, em 8 etapas numeradas:

1. Confere sistema e arquitetura.
2. Instala `nginx`, `cage`, Chromium e `curl` (detectando o nome do pacote do Chromium).
3. Cria o usuário **`arcade`** com shell `nologin`, sem `sudo`, nos grupos `video`,
   `render`, `input` e `audio` (os que existirem).
4. Cria `/opt/senai-arcade/releases`.
5. Instala o site do Nginx (só `127.0.0.1`), desativa o site padrão e valida com `nginx -t`.
6. Instala o navegador de quiosque, o PAM e o serviço `senai-arcade-kiosk.service`,
   habilita-o e define `graphical.target` como padrão.
7. Adiciona `consoleblank=0` ao `cmdline.txt` (com backup) para o console não apagar.
8. Mostra a situação. Arquivos existentes com conteúdo diferente recebem **backup**
   `*.bak.AAAAMMDDhhmmss` antes de serem substituídos.

## 4. Publicar o build

```bash
sudo ./scripts/deploy.sh ~/senai-arcade-dist.tar.gz
```

O deploy:

- extrai o pacote em uma área temporária, rejeitando caminhos absolutos ou com `..`;
- confere `index.html`, `catalog/games.json` e `assets/`;
- cria a release em `/opt/senai-arcade/releases/<data-hora>` (somente leitura para o quiosque);
- troca o link `current` de forma atômica;
- testa `http://127.0.0.1/` e o catálogo — **se falhar, volta sozinho para a release anterior**;
- reinicia o quiosque e mantém as últimas 5 releases (`SENAI_ARCADE_KEEP_RELEASES`).

Depois, reinicie para validar a inicialização completa:

```bash
sudo reboot
```

## Atualização e rollback

Atualizar = gerar um novo pacote e repetir o passo 4.

Listar releases:

```bash
sudo ./scripts/rollback.sh --list
```

Voltar para a release anterior à ativa:

```bash
sudo ./scripts/rollback.sh
```

Voltar para uma release específica:

```bash
sudo ./scripts/rollback.sh 20260110-142000
```

## Operação e manutenção

Ver o estado e os logs do quiosque:

```bash
systemctl status senai-arcade-kiosk
```

```bash
journalctl -u senai-arcade-kiosk -b
```

Reiniciar só o quiosque (o Raspberry Pi continua ligado):

```bash
sudo systemctl restart senai-arcade-kiosk
```

Parar o quiosque para manutenção local (o `tty1` volta a mostrar login após `getty` iniciar):

```bash
sudo systemctl stop senai-arcade-kiosk && sudo systemctl start getty@tty1
```

### Recuperação automática

- Se o Chromium ou o Cage fecharem/travarem, o `systemd` reinicia o serviço em 3 s
  (`Restart=always`), limitado a 10 reinícios em 5 minutos para não entrar em laço.
- Se um **jogo** travar, o launcher continua respondendo: `Esc`/voltar encerra o jogo
  mesmo que ele não responda, e falhas de carregamento mostram uma tela de erro.
- O perfil do Chromium é apagado a cada início (`senai-arcade-browser`), evitando
  avisos de "restaurar sessão".

## Segurança e limitações

- O Nginx escuta **apenas em `127.0.0.1`/`::1`**: o site não fica exposto na rede.
- O navegador acessa só `http://127.0.0.1/`; a CSP do Nginx bloqueia recursos externos.
- O quiosque roda com o usuário `arcade`, sem `sudo` e sem shell interativo.
- O Cage é iniciado **sem** `-s`, então a troca de terminal virtual (`Ctrl+Alt+F1…F6`)
  fica desabilitada dentro da sessão do quiosque.
- O cursor do mouse é ocultado pelo próprio launcher após alguns segundos sem movimento
  (e o Cage não desenha cursor se não houver mouse conectado — **validar**).
- **SSH**: se for usado, mantenha apenas para a equipe, com chave (sem senha), de
  preferência só na rede de manutenção. Não há senhas ou chaves neste repositório.
- **Não é inviolável.** Quem tiver acesso físico ao Raspberry Pi, a um teclado
  administrativo, ao cartão SD/mídia de boot ou às credenciais de manutenção pode
  interferir no sistema. Proteja o gabinete (cartão SD e portas USB internas) e as
  credenciais.
- Os jogos rodam em `iframe` de **mesma origem** com `allow-scripts allow-same-origin`,
  o que **não isola** código não confiável. Instale apenas jogos revisados
  (ver [`docs/ADDING-GAMES.md`](../../docs/ADDING-GAMES.md)).

## Validação no hardware (pendente)

Marque cada item ao validar e anote a versão do SO, o modelo do Raspberry Pi e
ajustes necessários. Nenhum destes itens foi verificado ainda.

| # | Verificação | Resultado |
|---|---|---|
| 1 | `install.sh` conclui sem erros na imagem escolhida (anotar `PRETTY_NAME`) | ☐ pendente |
| 2 | Pacotes `cage` e Chromium existem com os nomes detectados | ☐ pendente |
| 3 | `nginx -t` passa e `curl http://127.0.0.1/` retorna o launcher | ☐ pendente |
| 4 | Após `reboot`, o fliperama abre direto no menu, em tela cheia | ☐ pendente |
| 5 | Nenhum prompt de login, desktop ou terminal aparece durante o boot | ☐ pendente |
| 6 | `Ctrl+Alt+F2` não troca para um terminal | ☐ pendente |
| 7 | Cursor não aparece sem mouse; some após 2,5 s com mouse | ☐ pendente |
| 8 | Tela não apaga após 15 min parada | ☐ pendente |
| 9 | `sudo systemctl kill senai-arcade-kiosk` → volta sozinho em ~3 s | ☐ pendente |
| 10 | Gamepad é reconhecido no Chromium sob Wayland (tela de diagnóstico) | ☐ pendente |
| 11 | Funciona com Wi-Fi e Ethernet desligados | ☐ pendente |
| 12 | `deploy.sh` e `rollback.sh` funcionam e o quiosque recarrega | ☐ pendente |

Pontos que podem exigir ajuste na versão do SO escolhida:

- **Sessão gráfica**: se o Cage não iniciar pelo serviço (erros de `seat`/`libseat` no
  `journalctl`), verifique se o `systemd-logind` está ativo e se a sessão recebe o
  `tty1`. Como alternativa documentada pelo próprio Cage, é possível usar `seatd`.
- **Flags do Chromium**: `--ozone-platform=wayland` é necessário para rodar sob o Cage em
  versões em que o padrão ainda não é Wayland. Ajuste em `senai-arcade-browser`.
- **Apagamento de tela**: `consoleblank=0` cobre o console; se a tela apagar dentro da
  sessão gráfica, investigue o gerenciamento de energia do monitor/TV.
- **Áudio**: o MVP não depende de som.

Para o roteiro completo de testes físicos, veja [`docs/FIELD-TEST.md`](../../docs/FIELD-TEST.md).
