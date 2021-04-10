import {
  Answer,
  Countries,
  Country,
  Question,
  Questions,
  Answers,
} from './types';

function shuffle<T>(array: T[]) {
  const copy = [...array];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getRandomCountry(countries: Countries): Country {
  return countries[Math.floor(Math.random() * countries.length)];
}

function createAnswers(countries: Countries, correctAnswer: string): Answer[] {
  const anwersQuantity = 4;
  const answers: Answers = [];

  answers.push({
    text: correctAnswer,
    correct: true,
  });

  while (answers.length !== anwersQuantity) {
    const { capital } = getRandomCountry(countries);
    if (capital !== '' && answers.every(answer => answer.text !== capital)) {
      answers.push({
        text: capital,
        correct: false,
      });
    }
  }
  return shuffle(answers);
}

function createQuestions(countries: Countries, count: number = 10): Question[] {
  const questions: Questions = [];

  while (questions.length !== count) {
    const country = getRandomCountry(countries);
    if (questions.every(question => question.name !== country.name)) {
      const type = Math.random() > 0.5 ? 'flag' : 'capital';
      questions.push({
        type,
        name: country.name,
        flag: country.flag,
        text:
          type === 'flag'
            ? `Which country does this flag belong to?`
            : `${country.capital} is the capital of`,
        asnwers: createAnswers(countries, country.name),
      });
    }
  }

  return questions;
}

function getVariant(index: number): string {
  const variants = ['A', 'B', 'C', 'D'];
  return variants[index];
}

export { createQuestions, getVariant };
