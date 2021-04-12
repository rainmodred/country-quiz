/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { colors } from '../styles/colors';
import Button from './Button';
import Winners from '../images/winners.svg';

interface ResultProps {
  correctAnwers: number;
  onNewQuiz: () => void;
}

export default function Result({ correctAnwers, onNewQuiz }: ResultProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${colors.colorResult};
        padding: 49px 108px 33px 108px;
        row-gap: 70px;
        @media (max-width: 768px) {
          padding: 20px;
          row-gap: 25px;
        }
      `}
    >
      <img
        css={css`
          min-height: 136px;
        `}
        src={Winners}
        alt=""
      />
      <h3
        css={css`
          font-size: 48px;
          line-height: 72px;
          font-weight: 700;
        `}
      >
        Results
      </h3>
      <p
        css={css`
          font-size: 18px;
          line-height: 27px;
          font-weight: 400;
          & > span {
            font-size: 36px;
            line-height: 54px;
            color: ${colors.colorCorrectBg};
            font-weight: 700;
          }
        `}
      >
        You got <span>{correctAnwers}</span> correct answers
      </p>
      <Button onClick={onNewQuiz}>Try again</Button>
    </div>
  );
}
