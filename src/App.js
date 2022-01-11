import react from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './component/calculator';
import Header from './component/Header';

class App extends react.Component {
  render() {
    return (
      <div>
        <Header />
        <switch>
          <Route path = '/'>
            <Home/>
          </Route>
          <Route path = '/calculator'>
            <Calculator/>
          </Route>
          <Route path = '/quote'>
            <Quote/>
          </Route>
        </switch>
        <Calculator />
      </div>
    );
  }
}

export default App;
