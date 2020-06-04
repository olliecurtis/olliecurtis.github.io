import React from 'react';
import { render } from '@testing-library/react';

import Intro from './Intro';

it('renders without crashing', () => {
  // eslint-disable-next-line no-undef
  const div = document.createElement('div');
  render(<Intro />, div);
});
