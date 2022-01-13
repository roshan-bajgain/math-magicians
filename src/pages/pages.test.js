// Test for pages/Home.js
import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import Quote from './Quote';

const { homeFragment } = render(<Home />);
const { quoteFragment } = render(<Quote />);

expect(homeFragment()).toMatchSnapshot();
expect(quoteFragment()).toMatchSnapshot();


