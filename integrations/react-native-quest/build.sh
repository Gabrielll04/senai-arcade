#!/usr/bin/env bash
# Gera public/games/react-native-quest/ — a versão fliperama do React Native Quest.
#
#   1. obtém o repositório do Quest no commit fixado em QUEST_COMMIT (em ./.quest);
#   2. copia do Quest só as imagens e sons usados (para ./public);
#   3. instala dependências, checa tipos e roda os testes desta versão;
#   4. gera a build (Vite, base './');
#   5. substitui public/games/react-native-quest/ pelo conteúdo de dist/.
#
# O repositório do Quest não é alterado: o conteúdo (módulos, perguntas, demos)
# é importado dele no build e adaptado aqui.
#
# Uso (na raiz do senai-arcade):
#   ./integrations/react-native-quest/build.sh
#   ./integrations/react-native-quest/build.sh --source ../jogo-react-native-componentes
set -euo pipefail

QUEST_REPO="https://github.com/Gabrielll04/jogo-react-native-componentes"
QUEST_COMMIT="4e01eb96b74f9704e6404241b6315b33b366c7fd"
IMAGES=(avatar.svg book.svg reacto.svg)
SOUNDS=(click.wav correct.wav wrong.wav achievement.wav boss.wav)

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$HERE/../.." && pwd)"
DEST="$ROOT_DIR/public/games/react-native-quest"
QUEST="$HERE/.quest"

step() { printf '\n==> %s\n' "$*"; }
fail() {
  printf '[erro] %s\n' "$*" >&2
  exit 1
}

SOURCE="$QUEST_REPO"
if [[ "${1:-}" == "--source" ]]; then
  SOURCE="${2:-}"
  [[ -d "$SOURCE/.git" ]] || fail "--source precisa apontar para um checkout git do Quest."
fi

step "1/5 React Native Quest no commit ${QUEST_COMMIT:0:7}"
if [[ ! -d "$QUEST/.git" ]]; then
  git clone --quiet --no-checkout "$SOURCE" "$QUEST"
fi
if ! git -C "$QUEST" cat-file -e "$QUEST_COMMIT^{commit}" 2>/dev/null; then
  git -C "$QUEST" fetch --quiet "$SOURCE" ||
    fail "Não foi possível buscar $SOURCE."
fi
git -C "$QUEST" checkout --quiet --force "$QUEST_COMMIT" ||
  fail "Commit $QUEST_COMMIT não encontrado."

step "2/5 Copiando imagens e sons usados"
rm -rf "$HERE/public"
mkdir -p "$HERE/public/img" "$HERE/public/sounds"
for file in "${IMAGES[@]}"; do cp "$QUEST/client/public/img/$file" "$HERE/public/img/"; done
for file in "${SOUNDS[@]}"; do cp "$QUEST/client/public/sounds/$file" "$HERE/public/sounds/"; done

step "3/5 Dependências, tipos e testes"
(cd "$HERE" && npm ci --no-audit --no-fund && npm run typecheck && npm test)

step "4/5 Build de produção (base './')"
(cd "$HERE" && npx vite build --base ./)
[[ -f "$HERE/dist/index.html" ]] || fail "dist/index.html não foi gerado."
if grep -q '<script>' "$HERE/dist/index.html"; then
  fail "dist/index.html contém script inline (bloqueado pela CSP do Nginx)."
fi
if grep -q "uri:\"/img/\|uri:'/img/" "$HERE"/dist/assets/*.js; then
  fail "Ainda há imagens com caminho absoluto (/img/) no bundle."
fi

step "5/5 Copiando dist/ para public/games/react-native-quest/"
rm -rf "$DEST"
mkdir -p "$DEST"
cp -R "$HERE/dist/." "$DEST/"
find "$DEST" -type f | sed "s|$ROOT_DIR/||" | sort
echo
echo "Pronto. Rode 'npm run check' e 'npm run test:e2e' no senai-arcade."
