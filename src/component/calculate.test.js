// Test for component/calculate.js
import React from 'react';
import { shallow } from 'enzyme';
import { Calculator } from '../component/calculator';

it('renders without crashing', () => {
  shallow(<Calculator />);
});
