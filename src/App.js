import {
  BrowserRouter, Route, Routes, Link,
} from 'react-router-dom';
import Calculator from './component/calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <BrowserRouter>
    <div className="wrapper-er">
      <nav className="nav">
        <h1 className="heading">Math Magicians</h1>
        <ul className="link">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quotes">Quote</Link>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quote />} />
    </Routes>
  </BrowserRouter>
);
export default App;
