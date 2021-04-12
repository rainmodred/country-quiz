import Button from '../Button/Button';
import Winners from '../../images/winners.svg';
import './Result.css';

interface ResultProps {
  correctAnwers: number;
  onNewQuiz: () => void;
}

export default function Result({ correctAnwers, onNewQuiz }: ResultProps) {
  return (
    <div className="result">
      <img src={Winners} alt="" className="quiz__result" />
      <h3 className="result__header">Results</h3>
      <p className="result__text">
        You got <span>{correctAnwers}</span> correct answers
      </p>
      <Button onClick={onNewQuiz}>Try again</Button>
    </div>
  );
}
