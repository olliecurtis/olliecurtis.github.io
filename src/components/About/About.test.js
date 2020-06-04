import React from 'react';
import { render } from '@testing-library/react';

import About from './About';

it('renders without crashing', () => {
  // eslint-disable-next-line no-undef
  const div = document.createElement('div');
  render(<About />, div);
});
