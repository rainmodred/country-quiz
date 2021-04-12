import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Question } from 'types';

import QuestionWrapper from '../../components/QuestionWrapper';

const flagQuestion: Question = {
  type: 'flag',
  name: 'Germany',
  flag: 'https://restcountries.eu/data/deu.svg',
  text: 'Which country does this flag belong to?',
  asnwers: [
    {
      variant: 'A',
      text: 'Basseterre',
      correct: false,
    },
    {
      variant: 'B',
      text: 'Maputo',
      correct: false,
    },
    {
      variant: 'C',
      text: 'Germany',
      correct: true,
    },
    {
      variant: 'D',
      text: 'Dhaka',
      correct: false,
    },
  ],
};

const capitalQuestion: Question = {
  type: 'capital',
  name: 'Switzerland',
  flag: 'https://restcountries.eu/data/che.svg',
  text: 'Bern is the capital of',
  asnwers: [
    {
      variant: 'A',
      text: 'Switzerland',
      correct: true,
    },
    {
      variant: 'B',
      text: 'Lisbon',
      correct: false,
    },
    {
      variant: 'C',
      text: 'Brasília',
      correct: false,
    },
    {
      variant: 'D',
      text: 'Quito',
      correct: false,
    },
  ],
};

describe('QuestionWrapper', () => {
  const handleAnswerClick = jest.fn();
  const handleNextClick = jest.fn();
  beforeEach(() => {
    handleAnswerClick.mockClear();
    handleNextClick.mockClear();
  });

  it('renders with flagQuestion', () => {
    const { container, getByAltText, getByText, queryByText } = render(
      <QuestionWrapper
        question={flagQuestion}
        questionIndex={0}
        totalQuestions={10}
        onAnswerClick={handleAnswerClick}
        onNextClick={handleNextClick}
      />,
    );

    expect(getByText(/Which country does this flag belong to?/i)).toBeTruthy();
    expect(getByAltText(/flag/i)).toBeTruthy();
    expect(getByText(/Basseterre/i)).toBeTruthy();
    expect(getByText(/Maputo/i)).toBeTruthy();
    expect(getByText(/Germany/i)).toBeTruthy();
    expect(getByText(/Dhaka/i)).toBeTruthy();
    expect(queryByText(/next/i)).toBeNull();
    expect(container).toMatchSnapshot();
  });

  it('renders with capitalQuestion', () => {
    const { container, getByText, queryByText, queryByAltText } = render(
      <QuestionWrapper
        question={capitalQuestion}
        questionIndex={0}
        totalQuestions={10}
        onAnswerClick={handleAnswerClick}
        onNextClick={handleNextClick}
      />,
    );

    expect(getByText(/Bern is the capital of/i)).toBeTruthy();
    expect(queryByAltText(/flag/i)).toBeNull();
    expect(getByText(/Switzerland/i)).toBeTruthy();
    expect(getByText(/Lisbon/i)).toBeTruthy();
    expect(getByText(/Brasília/i)).toBeTruthy();
    expect(getByText(/Quito/i)).toBeTruthy();
    expect(queryByText(/next/i)).toBeNull();
    expect(container).toMatchSnapshot();
  });

  it('renders correct answer', () => {
    const {
      container,
      getByText,
      queryByText,
      queryByTitle,
      queryByAltText,
    } = render(
      <QuestionWrapper
        question={capitalQuestion}
        questionIndex={0}
        totalQuestions={10}
        onAnswerClick={handleAnswerClick}
        onNextClick={handleNextClick}
      />,
    );
    const correctAnswer = getByText(/Switzerland/i);

    expect(getByText(/Bern is the capital of/i)).toBeTruthy();
    expect(queryByAltText(/flag/i)).toBeNull();
    expect(correctAnswer).toBeTruthy();
    expect(getByText(/Lisbon/i)).toBeTruthy();
    expect(getByText(/Brasília/i)).toBeTruthy();
    expect(getByText(/Quito/i)).toBeTruthy();
    expect(queryByText(/next/i)).toBeNull();
    user.click(correctAnswer);
    expect(queryByTitle(/checkIcon/i)).toBeTruthy();
    expect(queryByText(/next/i)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('renders wrong answer', () => {
    const {
      container,
      getByText,
      queryByText,
      queryByTitle,
      queryByAltText,
    } = render(
      <QuestionWrapper
        question={capitalQuestion}
        questionIndex={0}
        totalQuestions={10}
        onAnswerClick={handleAnswerClick}
        onNextClick={handleNextClick}
      />,
    );
    const correctAnswer = getByText(/Switzerland/i);
    const wrongAnswer = getByText(/Lisbon/i);

    expect(getByText(/Bern is the capital of/i)).toBeTruthy();
    expect(queryByAltText(/flag/i)).toBeNull();
    expect(correctAnswer).toBeTruthy();
    expect(wrongAnswer).toBeTruthy();
    expect(getByText(/Brasília/i)).toBeTruthy();
    expect(getByText(/Quito/i)).toBeTruthy();
    expect(queryByText(/next/i)).toBeNull();
    user.click(wrongAnswer);
    expect(queryByTitle(/checkIcon/i)).toBeTruthy();
    expect(queryByTitle(/closeIcon/i)).toBeTruthy();
    expect(queryByText(/next/i)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('renders question count', () => {
    const { getByText } = render(
      <QuestionWrapper
        question={capitalQuestion}
        questionIndex={5}
        totalQuestions={10}
        onAnswerClick={handleAnswerClick}
        onNextClick={handleNextClick}
      />,
    );

    expect(getByText(/6 \/ 10/i)).toBeTruthy();
  });
});
