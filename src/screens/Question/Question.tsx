import React from 'react';
import Button from '../../components/Button/Button';
import Option from '../../components/Option/Option';

import './Question.css';

export default function Question() {
  return (
    <div className="question">
      <img
        src="https://restcountries.eu/data/fin.svg"
        alt="flag"
        className="question__flag"
      />
      <h3 className="question__header">Kuala Lumpur is the capital of</h3>
      <Option>Vietnam</Option>
      <Option>Malaysia</Option>
      <Option error>Sweden</Option>
      <Option correct>Austria</Option>
      <Button primary>Next</Button>
    </div>
  );
}
