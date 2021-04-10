import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import './Option.css';

interface OptionProps {
  variant: string;
  text: string;
  disabled: boolean;
  onClick: (text: string) => void;
  error?: boolean;
  correct?: boolean;
}

export default function Option({
  variant,
  text,
  error = false,
  correct = false,
  disabled = false,
  onClick,
}: OptionProps): JSX.Element {
  const isError = error && disabled ? 'option--error' : '';
  const isCorrect = correct && disabled ? 'option--correct' : '';
  const isDisabled = disabled ? 'option--disabled' : '';

  const classes = `option ${isError} ${isCorrect} ${isDisabled}`;

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    answer: string,
  ) {
    event.currentTarget.blur();
    onClick(answer);
  }

  return (
    <button
      onClick={event => handleClick(event, text)}
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
