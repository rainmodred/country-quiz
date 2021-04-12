/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import Button from './Button';
import Option from './Option';
import { Answer, Question } from '../types';
import { colors } from '../styles/colors';

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

  const { type, flag, text, asnwers } = question;

  function handleOptionClick(answer: Answer) {
    setDisabled(true);
    setCurrentAnswer(answer);
    onAnswerClick(answer.correct);
  }

  useEffect(() => {
    setDisabled(false);
  }, [question]);

  const isWrong = disabled && !currentAnswer?.correct;

  return (
    <div
      css={css`
        padding: 68px 32px 64px 32px;
        display: grid;
        row-gap: 25px;
        width: 100%;
        @media (max-width: 768px) {
          row-gap: 10px;
          padding: 65px 25px 25px 25px;
          padding-top: ${type === 'flag' ? '20px' : '65px'};
        }
      `}
    >
      {type === 'flag' && (
        <img
          src={flag}
          alt="flag"
          css={css`
            min-height: 56px;
            width: 84px;
            filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
            @media (max-width: 768px) {
              padding-top: 20px;
            }
          `}
        />
      )}
      <h3
        css={css`
          color: ${colors.colorQuestionText};
          font-size: 24px;
          line-height: 36px;
          font-weight: 700;
          @media (max-width: 768px) {
            font-size: 24px;
            line-height: 34px;
          }
        `}
      >
        {text}
      </h3>
      {asnwers.map(answer => (
        <Option
          answer={answer}
          wrong={isWrong && answer.text === currentAnswer?.text}
          disabled={disabled}
          onClick={handleOptionClick}
          key={answer.text}
        />
      ))}

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 56px;
        `}
      >
        <span
          css={css`
            font-size: 14px;
            margin-left: 5px;
          `}
        >
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
