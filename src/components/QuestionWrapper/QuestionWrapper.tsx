import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Option from '../Option/Option';
import { Answer, Question } from '../../types';
import './QuestionWrapper.css';

interface QuestionProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswerClick: (answer: boolean) => void;
  onNextClick: () => void;
}

export default function QuestionWrapper({
  question,
  questionIndex,
  totalQuestions,
  onAnswerClick,
  onNextClick,
}: QuestionProps) {
  const [currentAnswer, setCurrentAnswer] = useState<Answer | null>(null);
  const [disabled, setDisabled] = useState(false);

  function handleOptionClick(answer: Answer) {
    setDisabled(true);
    setCurrentAnswer(answer);
    onAnswerClick(answer.correct);
  }

  useEffect(() => {
    setDisabled(false);
  }, [question]);

  const isWrong = disabled && !currentAnswer?.correct;

  const classes = `${
    question.type === 'flag' ? 'question question--flag' : 'question'
  }`;
  return (
    <div className={classes}>
      {question.type === 'flag' && (
        <img src={question.flag} alt="flag" className="question__flag" />
      )}
      <h3 className="question__header">{question.text}</h3>
      {question.asnwers.map(answer => (
        <Option
          answer={answer}
          wrong={isWrong && answer.text === currentAnswer?.text}
          disabled={disabled}
          onClick={handleOptionClick}
          key={answer.text}
        />
      ))}

      <div className="question__footer">
        <span className="question__count">
          {questionIndex + 1} / {totalQuestions}
        </span>
        {disabled && (
          <Button primary onClick={onNextClick}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
