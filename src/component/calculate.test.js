// Test for component/calculate.js
import React from 'react';
import { shallow } from 'enzyme';
import { Calculator } from './calculator';

it('renders without crashing', () => {
  shallow(<Calculator />);
  expect(shallow(<Calculator />)).toMatchSnapshot();
  expect(shallow(<Calculator />).find('div').length).toBe(1);
});
