#!/usr/bin/env bash
# Gera public/games/stardust-runner/ a partir do repositório do STARDUST RUNNER.
#
#   1. clona o repositório do jogo no commit fixado em UPSTREAM_COMMIT;
#   2. aplica senai-arcade.patch (ponte postMessage com o launcher);
#   3. roda os testes do próprio jogo;
#   4. gera a build de produção com Vite (base './', caminhos relativos);
#   5. substitui public/games/stardust-runner/ apenas pelo conteúdo de dist/.
#
# Uso (na raiz do senai-arcade):
#   ./integrations/stardust-runner/build.sh
#   ./integrations/stardust-runner/build.sh --source ../jogo-2d-speed-runner   # checkout local
#
# Requer: git, Node.js/npm. Precisa de internet só para clonar e para o npm ci.
set -euo pipefail

UPSTREAM_REPO="https://github.com/Gabrielll04/jogo-2d-speed-runner"
UPSTREAM_COMMIT="4aa14b44a768c5e0f3fdb402c42ae3c3421bd679"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
PATCH="$SCRIPT_DIR/senai-arcade.patch"
DEST="$ROOT_DIR/public/games/stardust-runner"

step() { printf '\n==> %s\n' "$*"; }
fail() {
  printf '[erro] %s\n' "$*" >&2
  exit 1
}

SOURCE=""
if [[ "${1:-}" == "--source" ]]; then
  SOURCE="${2:-}"
  [[ -d "$SOURCE/.git" ]] || fail "--source precisa apontar para um checkout git do jogo."
fi

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

step "1/5 Obtendo o jogo no commit ${UPSTREAM_COMMIT:0:7}"
if [[ -n "$SOURCE" ]]; then
  git clone --quiet --no-checkout "$SOURCE" "$WORK/jogo"
else
  git clone --quiet --no-checkout --filter=blob:none "$UPSTREAM_REPO" "$WORK/jogo"
fi
git -C "$WORK/jogo" checkout --quiet "$UPSTREAM_COMMIT" ||
  fail "Commit $UPSTREAM_COMMIT não encontrado em ${SOURCE:-$UPSTREAM_REPO}."

step "2/5 Aplicando senai-arcade.patch"
git -C "$WORK/jogo" apply --check "$PATCH" ||
  fail "O patch não se aplica a este commit. Veja integrations/stardust-runner/README.md."
git -C "$WORK/jogo" apply "$PATCH"

step "3/5 Instalando dependências e rodando os testes do jogo"
(cd "$WORK/jogo" && npm ci --no-audit --no-fund && npm test)

step "4/5 Gerando build de produção (base './')"
(cd "$WORK/jogo" && npx vite build --base ./)
[[ -f "$WORK/jogo/dist/index.html" ]] || fail "dist/index.html não foi gerado."
if grep -q '<script>' "$WORK/jogo/dist/index.html"; then
  fail "dist/index.html contém script inline (bloqueado pela CSP do Nginx)."
fi

step "5/5 Copiando dist/ para public/games/stardust-runner/"
rm -rf "$DEST"
mkdir -p "$DEST"
cp -R "$WORK/jogo/dist/." "$DEST/"
find "$DEST" -type f | sed "s|$ROOT_DIR/||" | sort
echo
echo "Pronto. Rode 'npm run check' e 'npm run test:e2e' no senai-arcade."
