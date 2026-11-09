#!/usr/bin/env bash
# Prepara um Raspberry Pi OS Lite (64-bit) para executar o SENAI Arcade em quiosque.
# Idempotente: pode ser executado novamente; configurações existentes recebem backup.
#
# Uso (no Raspberry Pi, a partir de uma cópia de deploy/raspberry-pi/):
#   sudo ./scripts/install.sh
#
# PENDENTE: validar no hardware/versão de SO escolhidos (ver README.md).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOY_DIR="$(dirname "$SCRIPT_DIR")"
# shellcheck source=common.sh
source "$SCRIPT_DIR/common.sh"

require_root

step "1/8 Verificando o sistema"
if [[ -r /etc/os-release ]]; then
  # shellcheck disable=SC1091
  . /etc/os-release
  info "Sistema: ${PRETTY_NAME:-desconhecido}"
  [[ "${ID:-}" == "debian" || "${ID:-}" == "raspbian" || "${ID_LIKE:-}" == *debian* ]] ||
    fail "Este script espera Raspberry Pi OS / Debian."
else
  fail "/etc/os-release não encontrado."
fi
info "Arquitetura: $(uname -m)"
[[ "$(uname -m)" == "aarch64" ]] || warn "Arquitetura diferente de aarch64; o alvo documentado é 64-bit."

step "2/8 Instalando pacotes (nginx, cage, chromium, curl)"
apt-get update
# O nome do pacote do Chromium varia entre versões do Raspberry Pi OS: detecta o disponível.
CHROMIUM_PKG=""
for candidate in chromium chromium-browser; do
  if apt-cache show "$candidate" >/dev/null 2>&1; then
    CHROMIUM_PKG="$candidate"
    break
  fi
done
[[ -n "$CHROMIUM_PKG" ]] || fail "Nenhum pacote do Chromium encontrado (chromium / chromium-browser)."
apt-cache show cage >/dev/null 2>&1 || fail "Pacote 'cage' não encontrado nos repositórios configurados."
info "Pacote do Chromium: $CHROMIUM_PKG"
DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends nginx cage "$CHROMIUM_PKG" curl
command -v cage >/dev/null || fail "cage não ficou disponível no PATH após a instalação."
[[ -x /usr/bin/cage ]] || fail "O serviço espera /usr/bin/cage; ajuste ExecStart em systemd/$KIOSK_SERVICE."

step "3/8 Criando usuário do quiosque ($KIOSK_USER), sem sudo e sem shell interativo"
if id "$KIOSK_USER" >/dev/null 2>&1; then
  info "Usuário já existe."
else
  useradd --create-home --shell /usr/sbin/nologin --comment "SENAI Arcade kiosk" "$KIOSK_USER"
  info "Usuário criado."
fi
for group in video render input audio; do
  if getent group "$group" >/dev/null; then usermod -aG "$group" "$KIOSK_USER"; fi
done
if id -nG "$KIOSK_USER" | tr ' ' '\n' | grep -qx sudo; then
  warn "O usuário $KIOSK_USER está no grupo sudo; removendo."
  gpasswd -d "$KIOSK_USER" sudo
fi

step "4/8 Criando diretórios em $APP_ROOT"
install -d -m 0755 -o root -g root "$APP_ROOT" "$RELEASES_DIR"

step "5/8 Configurando Nginx (somente 127.0.0.1)"
install_file "$DEPLOY_DIR/nginx/senai-arcade.conf" /etc/nginx/sites-available/senai-arcade
ln -sfn /etc/nginx/sites-available/senai-arcade /etc/nginx/sites-enabled/senai-arcade
if [[ -e /etc/nginx/sites-enabled/default ]]; then
  # Só desativa o link; o arquivo original em sites-available é preservado.
  rm -f /etc/nginx/sites-enabled/default
  info "Site padrão do Nginx desativado (original preservado em sites-available/default)."
fi
nginx -t
systemctl enable nginx
systemctl reload-or-restart nginx

step "6/8 Instalando navegador de quiosque, PAM e serviço systemd"
install_file "$SCRIPT_DIR/senai-arcade-browser" /usr/local/bin/senai-arcade-browser 0755
install_file "$DEPLOY_DIR/pam/senai-arcade-kiosk" /etc/pam.d/senai-arcade-kiosk
install_file "$DEPLOY_DIR/systemd/$KIOSK_SERVICE" "/etc/systemd/system/$KIOSK_SERVICE"
if [[ "$KIOSK_USER" != "arcade" ]]; then
  sed -i "s/^User=arcade$/User=$KIOSK_USER/" "/etc/systemd/system/$KIOSK_SERVICE"
fi
systemctl daemon-reload
systemctl enable "$KIOSK_SERVICE"
systemctl set-default graphical.target

step "7/8 Desabilitando apagamento de tela do console"
CMDLINE=""
for path in /boot/firmware/cmdline.txt /boot/cmdline.txt; do
  if [[ -f "$path" ]]; then CMDLINE="$path"; break; fi
done
if [[ -z "$CMDLINE" ]]; then
  warn "cmdline.txt não encontrado; adicione consoleblank=0 manualmente."
elif grep -qw "consoleblank=0" "$CMDLINE"; then
  info "consoleblank=0 já presente em $CMDLINE."
else
  cp -a "$CMDLINE" "$CMDLINE.bak.$(date +%Y%m%d%H%M%S)"
  # cmdline.txt deve ter uma única linha.
  sed -i '1 s/$/ consoleblank=0/' "$CMDLINE"
  info "consoleblank=0 adicionado a $CMDLINE (backup criado). Vale após reiniciar."
fi

step "8/8 Situação"
if [[ -n "$(current_release)" ]]; then
  info "Release ativa: $(current_release)"
  systemctl restart "$KIOSK_SERVICE"
else
  warn "Nenhuma release publicada ainda. Publique o build com:"
  info "  sudo $SCRIPT_DIR/deploy.sh /caminho/senai-arcade-dist.tar.gz"
fi
info "Concluído. Reinicie o equipamento para validar a inicialização direta no quiosque."
