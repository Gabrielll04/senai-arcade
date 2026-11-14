/**
 * Efeitos sonoros do React Native Quest (copiados do repositório original pelo
 * build.sh). Som nunca é a única forma de feedback: tudo aparece na tela.
 */
export type SoundName = 'click' | 'correct' | 'wrong' | 'achievement' | 'boss';

const cache = new Map<SoundName, HTMLAudioElement>();
let stopped = false;

function audio(name: SoundName) {
  let el = cache.get(name);
  if (!el) {
    el = new Audio(`./sounds/${name}.wav`);
    el.preload = 'auto';
    el.volume = name === 'click' ? 0.35 : 0.6;
    cache.set(name, el);
  }
  return el;
}

export function preloadSounds() {
  (['click', 'correct', 'wrong', 'achievement', 'boss'] as SoundName[]).forEach(audio);
}

export function playSound(name: SoundName) {
  if (stopped) return;
  const el = audio(name);
  el.currentTime = 0;
  // Sem gesto do usuário o navegador pode recusar: o jogo segue sem som.
  void el.play().catch(() => undefined);
}

/** Para tudo ao sair para o launcher. */
export function stopSounds() {
  stopped = true;
  for (const el of cache.values()) {
    el.pause();
    el.src = '';
  }
  cache.clear();
}
