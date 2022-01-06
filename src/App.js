import react from 'react';
import Calculator from './component/calculator';
import calculator from './logic/calculator';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.updateDetails = this.updateDetails.bind(this);
  }

  updateDetails(e) {
    const newObj = calculator(this.state, e.target.textContent);
    this.setState(newObj);
  }

  render() {
    const { next, operation, total } = this.state;
    const op = operation === '%' ? 'mod' : operation;
    let result = '';
    if (total) {
      result = `${total} ${op || ''} ${next || ''}`;
    } else if (next) {
      result = `${next} ${op || ''}`;
    }
    return (
      <Calculator
        updateDetails={this.updateDetails}
        value={result}
      />
    );
  }
}

export default App;
