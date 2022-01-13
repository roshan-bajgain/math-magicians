import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculator';

const Calculator = () => {
  const [state, NewState] = useState({next: null, total: null});

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
          <button onClick={handleClick} type="button" name="Ac">Ac</button>
          <button onClick={handleClick} type="button" name="+/-">+/-</button>
          <button onClick={handleClick} type="button" name="%">%</button>
          <button onClick={handleClick} className="orange" type="button" name="&divide;">&divide;</button>
          <button onClick={handleClick} type="button" name="7">7</button>
          <button onClick={handleClick} type="button" name="8">8</button>
          <button onClick={handleClick} type="button" name="9">9</button>
          <button onClick={handleClick} className="orange" type="button" name="&times;">&times;</button>
          <button onClick={handleClick} type="button" name="4">4</button>
          <button onClick={handleClick} type="button" name="5">5</button>
          <button onClick={handleClick} type="button" name="6">6</button>
          <button onClick={handleClick} className="orange" type="button" name="&minus;">&minus;</button>
          <button onClick={handleClick} type="button" name="1">1</button>
          <button onClick={handleClick} type="button" name="2">2</button>
          <button onClick={handleClick} type="button" name="3">3</button>
          <button onClick={handleClick} className="orange" type="button" name="+">+</button>
          <button onClick={handleClick} className="double" type="button" name="0">0</button>
          <button onClick={handleClick} type="button" name=".">.</button>
          <button onClick={handleClick} className="orange" type="button" name="=">=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
