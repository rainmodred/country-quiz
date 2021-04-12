import { useEffect, useState } from 'react';
import { useCountries } from 'hooks/useCountries';
import Spinner from 'components/Spinner/Spinner';
import QuestionWrapper from '../QuestionWrapper/QuestionWrapper';
import Result from '../Result/Result';
import { Questions } from '../../types';
import { createQuestions } from '../../utils';
import Logo from '../../images/adventure.svg';
import './Quiz.css';

interface QuizProps {
  totalQuestions: number;
}

function Quiz({ totalQuestions = 10 }: QuizProps) {
  const { countries, isSuccess } = useCountries();
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
    handleNewQuiz();
  }, [isSuccess]);

  function renderQuestion() {
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
    <div className="quiz">
      <h2 className="quiz__header">country quiz</h2>
      {!isQuizEnded && <img className="quiz__logo" src={Logo} alt="" />}
      <div className="quiz__body">{renderQuestion()}</div>
    </div>
  );
}

export default Quiz;
