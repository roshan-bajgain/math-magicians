// Test for component/calculate.js
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './calculator';

it('renders correctly', async () => {
  const arr = ['Ac','+/-','%','7','8','9','×','6','5','4','3','2','1','0','÷','−','+','.','='];
  const { asFragment } = render(<Calculator />);
  const buttons = screen.getAllByRole('button');
   act(()=> {
    buttons.forEach((btn)=> {
      userEvent.click(btn);
      expect(arr).toContain(btn.name);      
    })
  })
  expect(asFragment()).toMatchSnapshot();
});



describe('Calculator', () => {
  test('checks key press', () => {
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
  })
})