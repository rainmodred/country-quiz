import {
  Answer,
  Countries,
  Country,
  Question,
  Questions,
  Answers,
} from './types';

function getRandomCountry(countries: Countries): Country {
  return countries[Math.floor(Math.random() * countries.length)];
}

function createAnswers(countries: Countries, correctAnswer: string): Answer[] {
  const anwersQuantity = 4;
  const answers: Answers = [];
  const variants = ['A', 'B', 'C', 'D'];

  const variant = variants
    .splice(Math.floor(Math.random() * anwersQuantity), 1)
    .join('');

  answers.push({
    variant,
    text: correctAnswer,
    correct: true,
  });

  while (answers.length !== anwersQuantity) {
    const { capital } = getRandomCountry(countries);
    if (
      variants.length > 0 &&
      capital !== '' &&
      answers.every(answer => answer.text !== capital)
    ) {
      answers.push({
        variant: variants.pop() as string,
        text: capital,
        correct: false,
      });
    }
  }
  return answers.sort((a, b) => a.variant.localeCompare(b.variant));
}

function createQuestions(countries: Countries, count: number = 10): Question[] {
  const questions: Questions = [];

  while (questions.length !== count) {
    const { name, flag, capital } = getRandomCountry(countries);

    const type = Math.random() > 0.5 ? 'flag' : 'capital';
    questions.push({
      type,
      name,
      flag,
      text:
        type === 'flag'
          ? `Which country does this flag belong to?`
          : `${capital} is the capital of`,
      asnwers: createAnswers(countries, name),
    });
  }

  return questions;
}

export { createQuestions };
