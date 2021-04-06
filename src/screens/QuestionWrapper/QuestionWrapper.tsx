import { useState } from 'react';
import Button from '../../components/Button/Button';
import Option from '../../components/Option/Option';
import { Question } from '../../types';

import './QuestionWrapper.css';

interface QuestionProps {
  question: Question;
  disabled: boolean;
  onAnswerClick: (answer: boolean) => void;
  onNextClick: () => void;
}

export default function QuestionWrapper({
  question,
  disabled,
  onAnswerClick,
  onNextClick,
}: QuestionProps) {
  const [currentAnswer, setCurrentAnswer] = useState('');
  const correctAnswer = question?.asnwers.filter(ans => ans.correct)[0].text;

  function handleOptionClick(text: string) {
    setCurrentAnswer(text);
    onAnswerClick(text === correctAnswer);
  }

  // WTF IS THIS
  const isWrong =
    disabled && currentAnswer !== '' && currentAnswer !== correctAnswer;

  if (!question) {
    return <p>Loading...</p>;
  }

  return (
    <div className="question">
      {question.type === 'flag' && (
        <img src={question.flag} alt="flag" className="question__flag" />
      )}
      <h3 className="question__header">{question.text}</h3>
      {question.asnwers.map(answer => (
        <Option
          text={answer.text}
          correct={answer.correct}
          error={isWrong && answer.text === currentAnswer}
          disabled={disabled}
          onClick={handleOptionClick}
          key={answer.text}
        />
      ))}

      {disabled && (
        <Button primary onClick={onNextClick}>
          Next
        </Button>
      )}
    </div>
  );
}
