import react from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './component/calculator';
import Header from './component/Header';

class App extends react.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/">
            {/* <Home /> */}
          </Route>
          <Route path="/calculator">
            {/* <CalculatorPage /> */}
          </Route>
          <Route path="/quote">
            {/* <Quote /> */}
          </Route>
        </Switch>
        <Calculator />
      </div>
    );
  }
}

export default App;
