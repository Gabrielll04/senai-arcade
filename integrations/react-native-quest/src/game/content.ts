/**
 * Conteúdo vindo do repositório do React Native Quest (commit fixado no build.sh).
 * Só tipos e dados: nenhum código de servidor ou rede é importado.
 */
import { DEMO_CODE, STATION_CONTENT } from '@quest/server/src/content/challenges';
import { MODULES } from '@quest/shared/modules';
import type { ContentSource } from './questions';

export const QUEST_CONTENT: ContentSource = {
  modules: MODULES,
  stations: STATION_CONTENT,
  demoCode: DEMO_CODE,
};

export const QUEST_MODULES = MODULES;
