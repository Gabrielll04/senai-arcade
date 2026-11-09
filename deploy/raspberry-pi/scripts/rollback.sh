#!/usr/bin/env bash
# Volta para a release anterior (ou para uma release específica).
#
# Uso (no Raspberry Pi):
#   sudo ./scripts/rollback.sh            # release imediatamente anterior à ativa
#   sudo ./scripts/rollback.sh --list     # lista releases disponíveis
#   sudo ./scripts/rollback.sh 20250101-120000
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=common.sh
source "$SCRIPT_DIR/common.sh"

require_root
mapfile -t ALL < <(find "$RELEASES_DIR" -mindepth 1 -maxdepth 1 -type d ! -name '.*' -printf '%f\n' | sort)
ACTIVE="$(current_release || true)"

if [[ "${1:-}" == "--list" ]]; then
  for release in "${ALL[@]}"; do
    if [[ "$release" == "$ACTIVE" ]]; then echo "* $release (ativa)"; else echo "  $release"; fi
  done
  exit 0
fi

TARGET="${1:-}"
if [[ -z "$TARGET" ]]; then
  for i in "${!ALL[@]}"; do
    if [[ "${ALL[$i]}" == "$ACTIVE" ]] && (( i > 0 )); then
      TARGET="${ALL[$((i - 1))]}"
    fi
  done
  [[ -n "$TARGET" ]] || fail "Não há release anterior à ativa (${ACTIVE:-nenhuma}). Use --list."
fi

step "Ativando release $TARGET (antes: ${ACTIVE:-nenhuma})"
validate_build_dir "$RELEASES_DIR/$TARGET"
activate_release "$TARGET"
health_check || warn "Verificação HTTP falhou após o rollback; confira o Nginx."
restart_kiosk_if_enabled
