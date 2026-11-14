import { describe, expect, it } from 'vitest';
import { QUEST_CONTENT } from './content';
import { buildMatch, drawQuestions, questionsForModule, type Question } from './questions';
import { createRng } from './rng';

describe('conteúdo real do React Native Quest', () => {
  it('gera perguntas jogáveis para todos os módulos', () => {
    for (const module of QUEST_CONTENT.modules) {
      const questions = questionsForModule(QUEST_CONTENT, module.id, createRng(module.id));
      // O módulo 5 (navegação) não tem estação de bug: 7 perguntas. Os demais têm mais.
      expect(questions.length, `módulo ${module.id}`).toBeGreaterThanOrEqual(7);
      for (const q of questions) {
        expect(q.options.length, q.id).toBeGreaterThanOrEqual(2);
        expect(q.options.length, q.id).toBeLessThanOrEqual(4);
        expect(new Set(q.options).size, `${q.id} sem alternativas repetidas`).toBe(q.options.length);
        expect(q.options[q.correct], q.id).toBeDefined();
        expect(q.prompt.length).toBeGreaterThan(0);
        if (q.kind === 'match') expect(q.quote, q.id).toBeTruthy();
      }
    }
  });

  it('usa os três formatos compatíveis com joystick', () => {
    const kinds = new Set(
      QUEST_CONTENT.modules.flatMap((m) => questionsForModule(QUEST_CONTENT, m.id, createRng(1)).map((q) => q.kind)),
    );
    expect([...kinds].sort()).toEqual(['bug', 'match', 'quiz']);
  });

  it('demos citadas pelas perguntas têm código "por trás da tela"', () => {
    const all = QUEST_CONTENT.modules.flatMap((m) => questionsForModule(QUEST_CONTENT, m.id, createRng(2)));
    for (const q of all.filter((x) => x.kind === 'quiz' && x.demo)) {
      expect(q.reveal, q.id).toBeTruthy();
    }
  });

  it('partida mista usa vários módulos', () => {
    const match = buildMatch(QUEST_CONTENT, null, 8, createRng(3));
    expect(match).toHaveLength(8);
    expect(new Set(match.map((q) => q.moduleId)).size).toBeGreaterThan(1);
  });
});

describe('sorteio', () => {
  const make = (kind: Question['kind'], n: number): Question[] =>
    Array.from({ length: n }, (_, i) => ({
      id: `${kind}${i}`,
      kind,
      moduleId: 1,
      prompt: 'p',
      options: ['a', 'b'],
      correct: 0,
      codeOptions: false,
      explanation: '',
    }));

  it('alterna os formatos e não repete perguntas', () => {
    const drawn = drawQuestions([...make('quiz', 10), ...make('bug', 3), ...make('match', 5)], 8, createRng(9));
    expect(drawn).toHaveLength(8);
    expect(new Set(drawn.map((q) => q.id)).size).toBe(8);
    expect(new Set(drawn.slice(0, 3).map((q) => q.kind)).size).toBe(3);
  });

  it('é determinístico com a mesma semente e devolve menos se faltar pergunta', () => {
    const pool = make('quiz', 5);
    expect(drawQuestions(pool, 3, createRng(4)).map((q) => q.id)).toEqual(
      drawQuestions(pool, 3, createRng(4)).map((q) => q.id),
    );
    expect(drawQuestions(pool, 8, createRng(4))).toHaveLength(5);
  });
});
