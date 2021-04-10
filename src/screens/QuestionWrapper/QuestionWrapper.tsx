import { useEffect, useState } from 'react';
import { getVariant } from 'utils';
import Button from '../../components/Button/Button';
import Option from '../../components/Option/Option';
import { Question } from '../../types';

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
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [disabled, setDisabled] = useState(false);
  const correctAnswer = question?.asnwers.filter(ans => ans.correct)[0].text;

  function handleOptionClick(text: string) {
    setCurrentAnswer(text);
    setDisabled(true);
    onAnswerClick(text === correctAnswer);
  }

  useEffect(() => {
    setDisabled(false);
  }, [question]);

  // WTF IS THIS
  const isWrong =
    disabled && currentAnswer !== '' && currentAnswer !== correctAnswer;

  const classes = `${
    question.type === 'flag' ? 'question question--flag' : 'question'
  }`;
  return (
    <div className={classes}>
      {question.type === 'flag' && (
        <img src={question.flag} alt="flag" className="question__flag" />
      )}
      <h3 className="question__header">{question.text}</h3>
      {question.asnwers.map((answer, answerIndex) => (
        <Option
          variant={getVariant(answerIndex)}
          text={answer.text}
          correct={answer.correct}
          error={isWrong && answer.text === currentAnswer}
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
