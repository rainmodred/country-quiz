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
    if (answers.every(answer => answer.text !== capital)) {
      answers.push({
        text: capital,
        correct: false,
      });
    }
  }
  return shuffle(answers);
}

function createQuestions(countries: Countries): Question[] {
  const questions: Questions = [];

  while (questions.length !== 10) {
    const country = getRandomCountry(countries);
    if (questions.every(question => question.name !== country.name)) {
      questions.push({
        name: country.name,
        flag: country.flag,
        question:
          Math.random() > 0.5
            ? `Which country does this flag belong to?`
            : `${country.capital} is the capital of`,
        asnwers: createAnswers(countries, country.name),
      });
    }
  }
  return questions;
}

export { createQuestions };
