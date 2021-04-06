import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import './Option.css';

interface OptionProps {
  text: string;
  disabled: boolean;
  onClick: (text: string) => void;
  error?: boolean;
  correct?: boolean;
}

export default function Option({
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

  return (
    <button onClick={() => onClick(text)} type="button" className={classes}>
      <span className="option__id">A</span>
      <span className="option__text">{text}</span>
      {isError && <AiOutlineCloseCircle size="20" />}
      {isCorrect && <AiOutlineCheckCircle size="20" />}
    </button>
  );
}
