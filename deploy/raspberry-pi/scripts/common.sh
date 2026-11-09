#!/usr/bin/env bash
# Funções compartilhadas pelos scripts de implantação do SENAI Arcade.
# shellcheck disable=SC2034 # variáveis usadas pelos scripts que fazem source deste arquivo

APP_ROOT="${SENAI_ARCADE_ROOT:-/opt/senai-arcade}"
RELEASES_DIR="$APP_ROOT/releases"
CURRENT_LINK="$APP_ROOT/current"
KIOSK_USER="${SENAI_ARCADE_USER:-arcade}"
KIOSK_SERVICE="senai-arcade-kiosk.service"
KEEP_RELEASES="${SENAI_ARCADE_KEEP_RELEASES:-5}"

step() { printf '\n\033[1;36m==> %s\033[0m\n' "$*"; }
info() { printf '    %s\n' "$*"; }
warn() { printf '\033[1;33m[aviso]\033[0m %s\n' "$*" >&2; }
fail() {
  printf '\033[1;31m[erro]\033[0m %s\n' "$*" >&2
  exit 1
}

require_root() {
  [[ "${EUID}" -eq 0 ]] || fail "Execute como root (ex.: sudo $0 ...)."
}

# Copia um arquivo para o destino; se já existir com conteúdo diferente,
# guarda um backup com data antes de sobrescrever.
install_file() {
  local source="$1" target="$2" mode="${3:-0644}"
  [[ -f "$source" ]] || fail "Arquivo de origem ausente: $source"
  if [[ -f "$target" ]] && cmp -s "$source" "$target"; then
    info "Sem mudanças: $target"
    return 0
  fi
  if [[ -e "$target" ]]; then
    local backup
    backup="$target.bak.$(date +%Y%m%d%H%M%S)"
    cp -a "$target" "$backup"
    info "Backup: $backup"
  fi
  install -D -m "$mode" "$source" "$target"
  info "Instalado: $target"
}

# Valida a estrutura mínima de um build do launcher.
validate_build_dir() {
  local dir="$1"
  [[ -f "$dir/index.html" ]] || fail "Build inválido: $dir/index.html não encontrado."
  [[ -f "$dir/catalog/games.json" ]] || fail "Build inválido: $dir/catalog/games.json não encontrado."
  [[ -d "$dir/assets" ]] || fail "Build inválido: $dir/assets/ não encontrado."
}

current_release() {
  if [[ -L "$CURRENT_LINK" ]]; then
    basename "$(readlink -f "$CURRENT_LINK")"
  fi
}

# Troca o link "current" de forma atômica.
activate_release() {
  local release="$1"
  [[ -d "$RELEASES_DIR/$release" ]] || fail "Release inexistente: $release"
  ln -sfn "$RELEASES_DIR/$release" "$APP_ROOT/.current.tmp"
  mv -Tf "$APP_ROOT/.current.tmp" "$CURRENT_LINK"
  info "Release ativa: $release"
}

health_check() {
  local url="${SENAI_ARCADE_HEALTH_URL:-http://127.0.0.1/}"
  if ! command -v curl >/dev/null 2>&1; then
    warn "curl não instalado; verificação HTTP ignorada."
    return 0
  fi
  curl -fsS -o /dev/null "$url" || return 1
  curl -fsS -o /dev/null "${url}catalog/games.json" || return 1
}

restart_kiosk_if_enabled() {
  if systemctl is-enabled --quiet "$KIOSK_SERVICE" 2>/dev/null; then
    systemctl restart "$KIOSK_SERVICE"
    info "Quiosque reiniciado."
  else
    info "Serviço do quiosque não habilitado; nada a reiniciar."
  fi
}
