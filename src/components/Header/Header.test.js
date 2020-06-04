import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

it('renders without crashing', () => {
  // eslint-disable-next-line no-undef
  const div = document.createElement('div');
  render(<Header />, div);
});
