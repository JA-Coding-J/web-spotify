import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

it('[Home Component]', () => {
  render(<Home />);
  const el = screen.getByText('Home');
  expect(el.textContent).toEqual('Home');
});
