import { createQuestions } from './utils';
import { countries } from './countries';

describe('create questions', () => {
  beforeAll(() => {});
  it('returns questions', () => {
    const questions = createQuestions(countries);

    expect(questions.length).toBe(10);
    questions.forEach(question => {
      expect(typeof question.name).toBe('string');
      expect(typeof question.flag).toBe('string');
      expect(typeof question.question).toBe('string');
      expect(question.asnwers.length).toBe(4);
      expect(
        question.asnwers.some(answer => answer.correct === true),
      ).toBeTruthy();
    });
  });
});
