// Test for component/calculate.js
import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Calculator from './calculator';

describe('Calculator', () => {
  it('checks key press', () => {
    render(<Calculator />);

    const five = screen.getByText('5');
    const add = screen.getByText('+');
    const equal = screen.getByText('=');
    const six = screen.getByText('6');
    const result = screen.getByRole('none');
    fireEvent.click(five);
    fireEvent.click(add);
    fireEvent.click(six);
    fireEvent.click(equal);

    expect(result.innerHTML).toBe('11');
  });

  it('renders correctly', async () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });
});
