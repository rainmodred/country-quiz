import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import './Option.css';

interface OptionProps {
  children: React.ReactNode;
  error?: boolean;
  correct?: boolean;
}

export default function Option({
  children,
  error = false,
  correct = false,
}: OptionProps) {
  const isError = error ? 'option--error' : '';
  const isCorrect = correct ? 'option--correct' : '';

  const classes = `option ${isError} ${isCorrect}`;

  return (
    <button type="button" className={classes}>
      <span className="option__id">A</span>
      <span className="option__text">{children}</span>
      {isError && <AiOutlineCloseCircle size="20" />}
      {isCorrect && <AiOutlineCheckCircle size="20" />}
    </button>
  );
}
