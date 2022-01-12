import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculator';

const Calculator = () => {
  const [state, NewState] = useState({});

  const handleClick = (e) => {
    NewState(calculate(state, e.target.textContent));
  };
  const { next, total } = state;
  return (
    <div className="wrapper">
      <h2 className="header">Lets Do Some Math! </h2>
      <div className="container">
        <div className="screen">
          {next || total || 0 }
        </div>
        <div className="buttons">
          <button onClick={handleClick} type="button">Ac</button>
          <button onClick={handleClick} type="button">+/-</button>
          <button onClick={handleClick} type="button">%</button>
          <button onClick={handleClick} className="orange" type="button">&divide;</button>
          <button onClick={handleClick} type="button">7</button>
          <button onClick={handleClick} type="button">8</button>
          <button onClick={handleClick} type="button">9</button>
          <button onClick={handleClick} className="orange" type="button">&times;</button>
          <button onClick={handleClick} type="button">4</button>
          <button onClick={handleClick} type="button">5</button>
          <button onClick={handleClick} type="button">6</button>
          <button onClick={handleClick} className="orange" type="button">&minus;</button>
          <button onClick={handleClick} type="button">1</button>
          <button onClick={handleClick} type="button">2</button>
          <button onClick={handleClick} type="button">3</button>
          <button onClick={handleClick} className="orange" type="button">+</button>
          <button onClick={handleClick} className="double" type="button">0</button>
          <button onClick={handleClick} type="button">.</button>
          <button onClick={handleClick} className="orange" type="button">=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
