import { createQuestions } from '../utils';
import { countries } from '../countries';

describe('create questions', () => {
  beforeAll(() => {});
  it('returns questions', () => {
    const questionTextLength = 17;
    const answersCount = 4;

    const questions = createQuestions(countries);

    expect(questions.length).toBe(10);
    questions.forEach(question => {
      expect(typeof question.type).toBe('string');
      expect(typeof question.name).toBe('string');
      expect(typeof question.flag).toBe('string');
      expect(typeof question.text).toBe('string');
      expect(question.text.length).toBeGreaterThan(questionTextLength);
      expect(question.asnwers.length).toBe(answersCount);
      expect(
        question.asnwers.some(answer => answer.correct === true),
      ).toBeTruthy();
      expect(question.asnwers.every(answer => answer.variant)).toBeTruthy();
      expect(question.asnwers.every(answer => answer.text)).toBeTruthy();
    });
  });
});
