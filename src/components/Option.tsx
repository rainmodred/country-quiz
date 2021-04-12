/** @jsxImportSource @emotion/react */
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { css } from '@emotion/react';

import { Answer } from 'types';
import { colors } from '../styles/colors';

interface OptionProps {
  answer: Answer;
  wrong?: boolean;
  disabled: boolean;
  onClick: (answer: Answer) => void;
}

export default function Option({
  answer,
  disabled = false,
  wrong = false,
  onClick,
}: OptionProps): JSX.Element {
  const { variant, text, correct } = answer;

  const isWrong = wrong && disabled;
  const isCorrect = correct && disabled;

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    currentAnswer: Answer,
  ) {
    event.currentTarget.blur();
    onClick(currentAnswer);
  }

  let bgColor = 'none';
  if (isWrong) {
    bgColor = colors.colorWrongBg;
  }
  if (isCorrect) {
    bgColor = colors.colorCorrectBg;
  }

  return (
    <button
      onClick={event => handleClick(event, answer)}
      type="button"
      css={css`
        border-radius: 12px;
        border: ${isWrong || isCorrect
          ? 'none'
          : `2px solid ${colors.colorOptionBorder}`};
        background: ${bgColor};
        max-height: 56px;
        width: 100%;
        max-width: 400px;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        color: ${isWrong || isCorrect
          ? colors.colorWhite
          : colors.colorOptionText};
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 15px 18px 14px 19px;
        pointer-events: ${disabled && 'none'};
        & > span {
          font-size: 18px;
          line-height: 27px;
          font-weight: 500;
        }
        &:hover {
          background-color: ${bgColor === 'none' ? colors.colorHover : bgColor};
          color: ${colors.colorWhite};
          border: none;
        }
      `}
    >
      <span
        css={css`
          margin-right: 45px;
        `}
      >
        {variant}
      </span>
      <span
        css={css`
          margin-right: auto;
          white-space: nowrap;
          overflow: hidden;
        `}
      >
        {text}
      </span>
      {isWrong && <AiOutlineCloseCircle size="20" title="closeIcon" />}
      {isCorrect && <AiOutlineCheckCircle size="20" title="checkIcon" />}
    </button>
  );
}
