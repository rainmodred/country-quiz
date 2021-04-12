import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { Answer } from 'types';
import './Option.css';

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

  const isError = wrong && disabled ? 'option--error' : '';
  const isCorrect = correct && disabled ? 'option--correct' : '';
  const isDisabled = disabled ? 'option--disabled' : '';

  const classes = `option ${isError} ${isCorrect} ${isDisabled}`;

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    currentAnswer: Answer,
  ) {
    event.currentTarget.blur();
    onClick(currentAnswer);
  }

  return (
    <button
      onClick={event => handleClick(event, answer)}
      type="button"
      className={classes}
    >
      <span className="option__id">{variant}</span>
      <span className="option__text">{text}</span>
      {isError && <AiOutlineCloseCircle size="20" title="closeIcon" />}
      {isCorrect && <AiOutlineCheckCircle size="20" title="checkIcon" />}
    </button>
  );
}
