/** Rotas internas do launcher (sem URL: o quiosque nunca expõe barra de endereço). */
export type Route =
  | { name: 'home' }
  | { name: 'category'; categoryId: string }
  | { name: 'game'; categoryId: string; gameId: string }
  | { name: 'diagnostics' };

export const HOME: Route = { name: 'home' };
