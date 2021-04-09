import { useEffect, useState } from 'react';
import { useCountries } from 'hooks/queryHooks';
import Spinner from 'components/Spinner/Spinner';
import QuestionWrapper from '../../screens/QuestionWrapper/QuestionWrapper';
import Result from '../../screens/Result/Result';
import { Questions } from '../../types';
import { createQuestions } from '../../utils';
import Logo from '../../images/adventure.svg';
import './Quiz.css';

function Quiz() {
  const { countries, isSuccess } = useCountries();
  const [quizEnded, setQuizEnded] = useState(false);

  const [questions, setQuestions] = useState<Questions>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [disabled, setDisabled] = useState(false);

  function handleNextQuestion() {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setDisabled(false);
    } else {
      setQuizEnded(true);
    }
  }

  function handleAnswerClick(isCorrect: boolean) {
    setDisabled(true);
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  }

  function handleNewQuiz() {
    if (countries) {
      setQuestions(createQuestions(countries));
      setCorrectAnswers(0);
      setQuestionIndex(0);
      setQuizEnded(false);
      setDisabled(false);
    }
  }

  useEffect(() => {
    handleNewQuiz();
  }, [isSuccess]);

  function renderQuestion() {
    if (quizEnded) {
      return (
        <Result correctAnwers={correctAnswers} onNewQuiz={handleNewQuiz} />
      );
    }
    if (questions.length > 0) {
      return (
        <QuestionWrapper
          questionIndex={questionIndex}
          question={questions[questionIndex]}
          onAnswerClick={handleAnswerClick}
          onNextClick={handleNextQuestion}
          disabled={disabled}
        />
      );
    }
    return <Spinner />;
  }
  return (
    <div className="quiz">
      <h2 className="quiz__header">country quiz</h2>
      {!quizEnded && <img className="quiz__logo" src={Logo} alt="" />}
      <div className="quiz__body">{renderQuestion()}</div>
    </div>
  );
}

export default Quiz;
