import { expect, test, type Frame, type Page } from '@playwright/test';
import { openStardust, type GameWindow } from './stardust';

const playerState = (frame: Frame) =>
  frame.evaluate(() => {
    const jogo = (window as GameWindow).stardust!.jogo();
    const j = jogo.mundo.jogador;
    return { estado: jogo.estado, bot: jogo.modoBot, pista: j.pistaDestino, noChao: j.noChao, deslizando: j.deslizando };
  });

/** Registra no launcher as mensagens recebidas do jogo. */
async function recordGameMessages(page: Page) {
  await page.evaluate(() => {
    const w = window as Window & { __gameMessages?: string[] };
    w.__gameMessages = [];
    window.addEventListener('message', (event) => {
      const data = event.data as { protocol?: string; type?: string };
      if (data?.protocol === 'senai-arcade') w.__gameMessages!.push(data.type ?? '?');
    });
  });
}

test.describe('STARDUST RUNNER no SENAI Arcade', () => {
  test('carrega pelo iframe, envia ready e mostra o attract adaptado ao fliperama', async ({ page }) => {
    const frame = await openStardust(page);
    await expect(page.locator('iframe[title="STARDUST RUNNER"]')).toHaveAttribute(
      'src',
      '/games/stardust-runner/index.html',
    );
    await expect(page.locator('iframe[title="STARDUST RUNNER"]')).toHaveAttribute('allow', 'autoplay');
    // Attract mode preservado (o bot joga sozinho) e textos do fliperama.
    const state = await playerState(frame);
    expect(state.bot).toBe(true);
    await expect(frame.locator('#chamada-texto')).toHaveText('APERTE A OU ENTER PARA COMECAR');
    await expect(frame.locator('.lista-controles')).toContainText('SAIR DO JOGO');
    await expect(frame.locator('body')).toHaveClass(/modo-arcade/);
    // Placar em rede desligado: o título é o recorde local.
    await expect(frame.locator('#titulo-placar')).toHaveText('RECORDE LOCAL');
  });

  test('comandos do teclado chegam ao jogo pelo launcher (sem tela de apelido)', async ({ page }) => {
    const frame = await openStardust(page);

    await page.keyboard.press('Enter'); // confirm → início
    await expect(frame.locator('#tela-nick')).toBeHidden();
    await expect(frame.locator('#tela-partida')).toBeVisible();
    await frame.waitForFunction(() => {
      const jogo = (window as GameWindow).stardust!.jogo();
      return jogo.estado === 'jogando' && !jogo.modoBot;
    }, null, { timeout: 10_000 });

    // Pista: começa no meio (1). Duas vezes à esquerda para no 0; uma à direita volta para 1.
    // Se o jogo também escutasse o teclado, cada tecla contaria duas vezes.
    await page.keyboard.press('KeyA');
    await page.keyboard.press('ArrowLeft'); // setas (jogador 2) também funcionam num jogo solo
    await expect.poll(async () => (await playerState(frame)).pista).toBe(0);
    await page.keyboard.press('KeyD');
    await expect.poll(async () => (await playerState(frame)).pista).toBe(1);

    // Cima pula; confirmar (Enter) também pula durante a corrida.
    await page.keyboard.press('KeyW');
    await expect.poll(async () => (await playerState(frame)).noChao).toBe(false);
    await expect.poll(async () => (await playerState(frame)).noChao, { timeout: 5_000 }).toBe(true);
    await page.keyboard.press('Enter');
    await expect.poll(async () => (await playerState(frame)).noChao).toBe(false);
    await expect.poll(async () => (await playerState(frame)).noChao, { timeout: 5_000 }).toBe(true);

    // Baixo e Ação 2 (K) deslizam.
    await page.keyboard.press('KeyS');
    await expect.poll(async () => (await playerState(frame)).deslizando).toBe(true);
    await expect.poll(async () => (await playerState(frame)).deslizando, { timeout: 5_000 }).toBe(false);
    await page.keyboard.press('KeyK');
    await expect.poll(async () => (await playerState(frame)).deslizando).toBe(true);
  });

  test('envia a pontuação final pelo protocolo score', async ({ page }) => {
    const frame = await openStardust(page);
    await page.keyboard.press('Enter');
    await frame.waitForFunction(() => {
      const jogo = (window as GameWindow).stardust!.jogo();
      return jogo.estado === 'jogando' && !jogo.modoBot;
    }, null, { timeout: 10_000 });
    // Simula o fim da corrida com o resumo real do jogo.
    await frame.evaluate(() => {
      const jogo = (window as GameWindow).stardust!.jogo();
      jogo.eventos.morte({ ...jogo.resumo(), pontos: 4321, bot: false });
    });
    await expect(page.getByTestId('game-score')).toHaveText('Pontuação: 4.321');
    await expect(frame.locator('#tela-fim')).toBeVisible();
  });

  test('Escape pede saída, o jogo responde exit e o launcher volta ao menu', async ({ page }) => {
    await openStardust(page);
    await recordGameMessages(page);
    const url = page.url();
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('game-stardust-runner')).toBeVisible();
    await expect(page.locator('iframe')).toHaveCount(0);
    expect(page.url()).toBe(url);
    // O jogo respondeu "exit" (e não foi preciso o encerramento forçado).
    const messages = await page.evaluate(() => (window as Window & { __gameMessages?: string[] }).__gameMessages);
    expect(messages).toContain('exit');

    // Launcher continua respondendo e o Duelo de Reflexos segue funcionando.
    await page.keyboard.press('KeyA');
    await page.keyboard.press('KeyJ');
    await expect(page.getByTestId('game-runtime')).toHaveAttribute('data-status', 'running');
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('game-duelo-de-reflexos')).toBeVisible();
  });

  test('não faz requisições fora dos arquivos locais do jogo (offline)', async ({ context, page }) => {
    const external: string[] = [];
    await context.route(/^(?!http:\/\/127\.0\.0\.1:4173\/).*/, (route) => {
      external.push(route.request().url());
      return route.abort('internetdisconnected');
    });
    const requested: string[] = [];
    page.on('request', (request) => requested.push(new URL(request.url()).pathname));
    const frame = await openStardust(page);
    await page.keyboard.press('Enter');
    await frame.waitForFunction(() => (window as GameWindow).stardust!.jogo().estado === 'jogando');
    expect(external).toEqual([]);
    expect(requested.filter((path) => path.startsWith('/api/'))).toEqual([]);
  });
});
