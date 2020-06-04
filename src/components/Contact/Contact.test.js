import React from 'react';
import { render } from '@testing-library/react';

import Contact from './Contact';

it('renders without crashing', () => {
  // eslint-disable-next-line no-undef
  const div = document.createElement('div');
  render(<Contact />, div);
});
