import React from 'react';
import { render } from '@testing-library/react';

import Projects from './Projects';

it('renders without crashing', () => {
  // eslint-disable-next-line no-undef
  const div = document.createElement('div');
  render(<Projects />, div);
});
