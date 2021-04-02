import React from 'react';
import Button from '../../components/Button/Button';
import Winners from '../../images/winners.svg';
import './Result.css';

export default function Result() {
  return (
    <div className="result">
      <img src={Winners} alt="" className="quiz__result" />
      <h3 className="result__header">Results</h3>
      <p className="result__text">
        You got <span>4</span> correct answers
      </p>
      <Button>Try again</Button>
    </div>
  );
}
