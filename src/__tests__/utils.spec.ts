import { createQuestions } from '../utils';
import { countries } from '../countries';

describe('create questions', () => {
  beforeAll(() => {});
  it('returns questions', () => {
    const questionTextLength = 17;
    const answersCount = 4;
    const questionsCount = 500;

    const questions = createQuestions(countries, questionsCount);

    expect(questions.length).toBe(questionsCount);
    questions.forEach(({ type, name, flag, text, asnwers }) => {
      expect(typeof type).toBe('string');
      expect(typeof name).toBe('string');
      expect(typeof flag).toBe('string');
      expect(typeof text).toBe('string');
      if (type === 'capital') {
        expect(text).not.toBe(' is the capital of');
      }
      expect(text.length).toBeGreaterThan(questionTextLength);
      expect(asnwers.length).toBe(answersCount);
      expect(asnwers.some(answer => answer.correct === true)).toBeTruthy();
      expect(asnwers.every(answer => answer.variant)).toBeTruthy();
      expect(asnwers.every(answer => answer.text)).toBeTruthy();
    });
  });
});
