// Test for pages/Home.js
import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import Quote from './Quote';

it('renders correctly', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correctly', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});
