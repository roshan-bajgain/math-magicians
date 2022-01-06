import React from 'react';
import './calculator.css';
import calculate from '../logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="container">
        <div className="screen">
          {next || total || 0 }
        </div>
        <div className="buttons">
          <button onClick={this.handleClick} type="button">Ac</button>
          <button onClick={this.handleClick} type="button">+/-</button>
          <button onClick={this.handleClick} type="button">%</button>
          <button onClick={this.handleClick} className="orange" type="button">&divide;</button>
          <button onClick={this.handleClick} type="button">7</button>
          <button onClick={this.handleClick} type="button">8</button>
          <button onClick={this.handleClick} type="button">9</button>
          <button onClick={this.handleClick} className="orange" type="button">&times;</button>
          <button onClick={this.handleClick} type="button">4</button>
          <button onClick={this.handleClick} type="button">5</button>
          <button onClick={this.handleClick} type="button">6</button>
          <button onClick={this.handleClick} className="orange" type="button">&minus;</button>
          <button onClick={this.handleClick} type="button">1</button>
          <button onClick={this.handleClick} type="button">2</button>
          <button onClick={this.handleClick} type="button">3</button>
          <button onClick={this.handleClick} className="orange" type="button">+</button>
          <button onClick={this.handleClick} className="double" type="button">0</button>
          <button onClick={this.handleClick} type="button">.</button>
          <button onClick={this.handleClick} className="orange" type="button">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
