import { useEffect, useState } from 'react';
import Logo from '../../images/adventure.svg';
// import Winners from '../../images/winners.svg';
import QuestionWrapper from '../../screens/QuestionWrapper/QuestionWrapper';
import Result from '../../screens/Result/Result';
import { Countries, Questions } from '../../types';
import { createQuestions } from '../../utils';
// import Button from '../Button/Button';
// import Option from '../Option/Option';
import './Quiz.css';

interface QuizProps {
  countries: Countries;
}

function Quiz({ countries }: QuizProps) {
  // remove from state
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
    setQuestions(createQuestions(countries));
    setCorrectAnswers(0);
    setQuestionIndex(0);
    setQuizEnded(false);
    setDisabled(false);
  }

  useEffect(() => {
    setQuestions(createQuestions(countries));
  }, []);

  return (
    <div className="quiz">
      <h2 className="quiz__header">country quiz</h2>
      {!quizEnded && <img className="quiz__logo" src={Logo} alt="" />}
      <div className="quiz__body">
        {quizEnded ? (
          <Result correctAnwers={correctAnswers} onNewQuiz={handleNewQuiz} />
        ) : (
          <QuestionWrapper
            questionIndex={questionIndex}
            question={questions[questionIndex]}
            onAnswerClick={handleAnswerClick}
            onNextClick={handleNextQuestion}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
}

export default Quiz;
