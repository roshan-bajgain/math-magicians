import react from 'react';
import Calculator from './component/calculator';
import calculator from './logic/calculator';

class App extends react.Component {
 constructor(props){
   super(props);
   this.state = {total: null, next: null, operate:null};
   this.updateDetails = this.updateDetails.bind(this);
 }
 updateDetails(e) {
   const newObj = calculate(this.state, e.target.textContent)
   this.setState(newObj);
 }
 
}

export default App;
