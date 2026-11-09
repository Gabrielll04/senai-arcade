#!/usr/bin/env bash
# Publica um build do SENAI Arcade como nova release e a ativa.
#
# Uso (no Raspberry Pi):
#   sudo ./scripts/deploy.sh /caminho/senai-arcade-dist.tar.gz
#   sudo ./scripts/deploy.sh /caminho/dist/
#
# O arquivo .tar.gz é gerado no computador de desenvolvimento com `npm run package`.
# Mantém as últimas $SENAI_ARCADE_KEEP_RELEASES releases para rollback.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=common.sh
source "$SCRIPT_DIR/common.sh"

require_root
SOURCE="${1:-}"
[[ -n "$SOURCE" ]] || fail "Informe o build: $0 <senai-arcade-dist.tar.gz | diretório dist/>"
[[ -d "$RELEASES_DIR" ]] || fail "$RELEASES_DIR não existe. Execute install.sh antes."

RELEASE="$(date +%Y%m%d-%H%M%S)"
# Evita colisão se dois deploys ocorrerem no mesmo segundo.
SUFFIX=1
while [[ -e "$RELEASES_DIR/$RELEASE" ]]; do
  RELEASE="$(date +%Y%m%d-%H%M%S)-$SUFFIX"
  SUFFIX=$((SUFFIX + 1))
done
TARGET="$RELEASES_DIR/$RELEASE"
STAGING="$RELEASES_DIR/.staging-$RELEASE"
trap 'rm -rf "$STAGING"' EXIT

step "1/4 Preparando release $RELEASE"
mkdir -p "$STAGING"
if [[ -f "$SOURCE" ]]; then
  # Rejeita caminhos absolutos ou com '..' dentro do pacote.
  if tar -tzf "$SOURCE" | grep -Eq '(^/|(^|/)\.\.(/|$))'; then
    fail "Pacote contém caminhos inseguros."
  fi
  tar -xzf "$SOURCE" -C "$STAGING" --no-same-owner
elif [[ -d "$SOURCE" ]]; then
  cp -a "$SOURCE/." "$STAGING/"
else
  fail "Build não encontrado: $SOURCE"
fi
validate_build_dir "$STAGING"
chown -R root:root "$STAGING"
find "$STAGING" -type d -exec chmod 0755 {} +
find "$STAGING" -type f -exec chmod 0644 {} +
mv "$STAGING" "$TARGET"
info "Arquivos em $TARGET"

step "2/4 Ativando release"
PREVIOUS="$(current_release || true)"
activate_release "$RELEASE"

step "3/4 Verificando o site local"
if ! health_check; then
  warn "Verificação falhou."
  if [[ -n "$PREVIOUS" ]]; then
    activate_release "$PREVIOUS"
    fail "Release $RELEASE não respondeu; revertido para $PREVIOUS."
  fi
  fail "Release $RELEASE não respondeu e não há release anterior."
fi
info "http://127.0.0.1/ respondeu corretamente."
restart_kiosk_if_enabled

step "4/4 Limpando releases antigas (mantendo $KEEP_RELEASES)"
ACTIVE="$(current_release)"
mapfile -t ALL < <(find "$RELEASES_DIR" -mindepth 1 -maxdepth 1 -type d ! -name '.*' -printf '%f\n' | sort)
COUNT=${#ALL[@]}
for release in "${ALL[@]}"; do
  if (( COUNT <= KEEP_RELEASES )); then break; fi
  if [[ "$release" != "$ACTIVE" ]]; then
    rm -rf "${RELEASES_DIR:?}/$release"
    info "Removida: $release"
    COUNT=$((COUNT - 1))
  fi
done
info "Publicado: $RELEASE (anterior: ${PREVIOUS:-nenhuma})."
