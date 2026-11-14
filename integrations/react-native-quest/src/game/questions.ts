/**
 * Transforma o conteúdo do React Native Quest em perguntas de múltipla escolha
 * jogáveis só com direcional e botões.
 *
 * Usado do Quest (sem alterar o repositório original):
 *  - quiz_component  → pergunta com demo viva ou código e 4 alternativas;
 *  - fix_bug         → "qual é a correção?" com alternativas em código;
 *  - match_use       → cada par vira "qual componente serve para …?".
 * Fica de fora o que exige teclado/mouse: montar a tela com blocos, editor de
 * código e os playgrounds das lições.
 */
import { shuffle, type Rng } from './rng';

export type QuestionKind = 'quiz' | 'bug' | 'match';

export interface Question {
  id: string;
  kind: QuestionKind;
  moduleId: number;
  prompt: string;
  /** Chave de uma demo viva do Quest (client/src/ui/demos.tsx). */
  demo?: string;
  /** Código mostrado junto da pergunta. */
  code?: string;
  /** Texto em destaque no lugar da demo (uso do componente, no "ligue"). */
  quote?: string;
  options: string[];
  correct: number;
  /** As alternativas são trechos de código. */
  codeOptions: boolean;
  explanation: string;
  /** Código "por trás da tela", mostrado depois da resposta. */
  reveal?: string;
}

/* Formato mínimo do conteúdo do Quest de que precisamos. */
interface QuizLike {
  prompt: string;
  demo?: string;
  code?: string;
  reveal?: string;
  answer: string;
  distractors: string[];
  explanation: string;
}
interface BugLike {
  prompt: string;
  code: string;
  demo?: string;
  fix: string;
  wrong: string[];
  explanation: string;
}
interface MatchLike {
  pairs: [string, string][];
  explanation: string;
}
export type StationLike =
  | { type: 'quiz_component'; variants: QuizLike[] }
  | { type: 'fix_bug'; variants: BugLike[] }
  | { type: 'match_use'; match: MatchLike }
  | { type: string };

export interface ModuleLike {
  id: number;
  name: string;
  components: string[];
  stations: { id: string }[];
}

export interface ContentSource {
  modules: ModuleLike[];
  stations: Record<string, StationLike>;
  demoCode: Record<string, string>;
}

export const MAX_OPTIONS = 4;

function options(answer: string, distractors: string[], rng: Rng) {
  const unique = [...new Set(distractors.filter((d) => d !== answer))];
  const picked = shuffle(unique, rng).slice(0, MAX_OPTIONS - 1);
  const all = shuffle([answer, ...picked], rng);
  return { options: all, correct: all.indexOf(answer) };
}

/** Todas as perguntas possíveis de um módulo. */
export function questionsForModule(source: ContentSource, moduleId: number, rng: Rng): Question[] {
  const module = source.modules.find((m) => m.id === moduleId);
  if (!module) return [];
  const result: Question[] = [];

  for (const station of module.stations) {
    const content = source.stations[station.id];
    if (!content) continue;

    if (content.type === 'quiz_component' && 'variants' in content) {
      (content.variants as QuizLike[]).forEach((q, i) => {
        result.push({
          id: `${station.id}#${i}`,
          kind: 'quiz',
          moduleId,
          prompt: q.prompt,
          demo: q.demo,
          code: q.code,
          ...options(q.answer, q.distractors, rng),
          codeOptions: false,
          explanation: q.explanation,
          reveal: q.reveal ?? (q.demo ? source.demoCode[q.demo] : undefined),
        });
      });
    }

    if (content.type === 'fix_bug' && 'variants' in content) {
      (content.variants as BugLike[]).forEach((q, i) => {
        result.push({
          id: `${station.id}#${i}`,
          kind: 'bug',
          moduleId,
          prompt: q.prompt,
          demo: q.demo,
          code: q.code,
          ...options(q.fix, q.wrong, rng),
          codeOptions: true,
          explanation: q.explanation,
        });
      });
    }

    if (content.type === 'match_use' && 'match' in content) {
      const { pairs, explanation } = (content as { match: MatchLike }).match;
      const pool = [...new Set([...pairs.map(([component]) => component), ...module.components])];
      pairs.forEach(([component, use], i) => {
        result.push({
          id: `${station.id}#${i}`,
          kind: 'match',
          moduleId,
          prompt: 'Qual componente serve para isto?',
          quote: use,
          ...options(component, pool, rng),
          codeOptions: false,
          explanation: `${component}: ${use}. ${explanation}`,
        });
      });
    }
  }
  return result;
}

/**
 * Sorteia `count` perguntas alternando os tipos (quiz, bug, ligar), para a
 * partida não virar uma sequência do mesmo formato.
 */
export function drawQuestions(candidates: Question[], count: number, rng: Rng): Question[] {
  const byKind = new Map<QuestionKind, Question[]>();
  for (const q of shuffle(candidates, rng)) {
    const list = byKind.get(q.kind) ?? [];
    list.push(q);
    byKind.set(q.kind, list);
  }
  const kinds = shuffle([...byKind.keys()], rng);
  const drawn: Question[] = [];
  while (drawn.length < count && kinds.some((k) => (byKind.get(k)?.length ?? 0) > 0)) {
    for (const kind of kinds) {
      const next = byKind.get(kind)?.shift();
      if (next && drawn.length < count) drawn.push(next);
    }
  }
  return drawn;
}

/** Perguntas de um módulo ou, com `moduleId = null`, de todos (desafio misto). */
export function buildMatch(source: ContentSource, moduleId: number | null, count: number, rng: Rng): Question[] {
  const ids = moduleId === null ? source.modules.map((m) => m.id) : [moduleId];
  const candidates = ids.flatMap((id) => questionsForModule(source, id, rng));
  return drawQuestions(candidates, count, rng);
}
