import React from 'react';
import Logo from '../../images/adventure.svg';
import Winners from '../../images/winners.svg';
import Question from '../../screens/Question/Question';
import Result from '../../screens/Result/Result';
import Button from '../Button/Button';
import Option from '../Option/Option';
import './Quiz.css';

function Quiz() {
  return (
    <div className="quiz">
      <h2 className="quiz__header">country quiz</h2>
      <img className="quiz__logo" src={Logo} alt="" />
      <div className="quiz__body">
        {/* <img className="quiz__logo" src={Logo} alt="" />
        <img
          src="https://restcountries.eu/data/fin.svg"
          alt="flag"
          className="quiz__flag"
        />
        <h3 className="quiz__question">Kuala Lumpur is the capital of</h3>
        <Option>Vietnam</Option>
        <Option>Malaysia</Option>
        <Option error>Sweden</Option>
        <Option correct>Austria</Option>
        <Button primary>Next</Button> */}

        <Question />
        {/* <Result /> */}
      </div>
    </div>
  );
}

export default Quiz;
