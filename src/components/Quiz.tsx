/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { useCountries } from 'hooks/useCountries';
import Spinner from 'components/Spinner';
import QuestionWrapper from './QuestionWrapper';
import Result from './Result';
import Error from './Error';
import { Questions } from '../types';
import { createQuestions } from '../utils';
import Logo from '../images/adventure.svg';
import { colors } from '../styles/colors';

interface QuizProps {
  totalQuestions: number;
}

function Quiz({ totalQuestions = 10 }: QuizProps) {
  const { countries, isSuccess, isError, error } = useCountries();
  const [questions, setQuestions] = useState<Questions>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const isQuizEnded =
    questions.length > 0 && questionIndex === questions.length;

  function handleNextQuestion() {
    if (questionIndex < questions.length) {
      setQuestionIndex(questionIndex + 1);
    }
  }

  function handleAnswerClick(isCorrect: boolean) {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  }

  function handleNewQuiz() {
    if (countries) {
      setQuestions(createQuestions(countries, totalQuestions));
      setCorrectAnswers(0);
      setQuestionIndex(0);
    }
  }

  useEffect(() => {
    if (questions.length > 0) {
      questions.forEach(({ type, flag }) => {
        if (type === 'flag') {
          const img = new Image();
          img.src = flag;
        }
      });
    }
  }, [questions]);

  useEffect(() => {
    handleNewQuiz();
  }, [isSuccess]);

  function renderQuestion() {
    if (isError) {
      return <Error message={error?.message} />;
    }
    if (isQuizEnded) {
      return (
        <Result correctAnwers={correctAnswers} onNewQuiz={handleNewQuiz} />
      );
    }
    if (questions.length > 0) {
      return (
        <QuestionWrapper
          questionIndex={questionIndex}
          question={questions[questionIndex]}
          totalQuestions={totalQuestions}
          onAnswerClick={handleAnswerClick}
          onNextClick={handleNextQuestion}
        />
      );
    }
    return <Spinner />;
  }
  return (
    <div
      css={css`
        position: relative;
        max-width: 464px;
      `}
    >
      <h2
        css={css`
          color: ${colors.colorHeaderText};
          font-size: 36px;
          line-height: 54px;
          font-weight: 700;
          text-transform: uppercase;
          @media (max-width: 768px) {
            font-size: 24px;
            line-height: 24px;
            margin-bottom: 10px;
          }
        `}
      >
        country quiz
      </h2>
      {!isQuizEnded && (
        <img
          css={css`
            position: absolute;
            content: '';
            display: block;
            top: -20px;
            right: 0;
          `}
          src={Logo}
          alt=""
        />
      )}
      <div
        css={css`
          background-color: ${colors.colorWhite};
          border-radius: 24px;
          display: grid;
          grid-template-columns: minmax(0, 464px);
          min-height: 515px;
          place-items: center;
          @media (max-width: 768px) {
            min-height: 400px;
          }
        `}
      >
        {renderQuestion()}
      </div>
    </div>
  );
}

export default Quiz;
