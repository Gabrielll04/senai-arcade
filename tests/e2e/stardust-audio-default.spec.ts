import { expect, test } from '@playwright/test';
import { audioState, openStardust, type GameWindow } from './stardust';

// Política padrão de um Chromium comum (sem a flag do quiosque).
test.use({ launchOptions: { args: ['--autoplay-policy=document-user-activation-required'] } });

test('STARDUST RUNNER: sem a flag, o áudio só depende de uma tecla na origem do launcher', async ({ page }) => {
  // 1. Aberto direto, sem nenhum gesto, o navegador bloqueia o áudio (política ativa).
  await page.goto('/games/stardust-runner/index.html');
  const direct = page.mainFrame();
  await direct.waitForFunction(() => Boolean((window as GameWindow).stardust?.jogo()));
  await expect.poll(() => audioState(direct)).toBe('suspended');

  // 2. Pelo launcher, as teclas que abrem o jogo contam como gesto para a mesma
  //    origem, então o áudio do jogo começa assim que ele carrega.
  const frame = await openStardust(page);
  await expect.poll(() => audioState(frame)).toBe('running');
});
