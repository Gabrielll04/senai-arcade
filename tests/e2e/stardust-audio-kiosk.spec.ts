import { expect, test } from '@playwright/test';
import { audioState, openStardust } from './stardust';

// Mesma flag usada no quiosque (deploy/raspberry-pi/scripts/senai-arcade-browser).
test.use({ launchOptions: { args: ['--autoplay-policy=no-user-gesture-required'] } });

test('STARDUST RUNNER: com a flag do quiosque, o áudio do attract inicia sem gesto', async ({ page }) => {
  const frame = await openStardust(page);
  await expect.poll(() => audioState(frame)).toBe('running');
  await expect(frame.locator('#aviso-som')).toBeHidden();
});
