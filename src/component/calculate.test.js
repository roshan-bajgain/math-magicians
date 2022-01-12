// Test for component/calculate.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './calculator';

it('renders without crashing', () => {
  render(<Calculator />);
  expect((<Calculator />)).toBeInTheDocument();
});


