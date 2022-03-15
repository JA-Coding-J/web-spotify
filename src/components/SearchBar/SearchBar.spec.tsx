import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '.';

describe('[SearchBar Component]', () => {
  const value = 'test value';
  const mockFn = jest.fn();

  it('Shoule trigger onChange callback when to input', () => {
    const { getByRole } = render(<SearchBar onChange={mockFn} value="" />);
    const ele = getByRole('searchbox');
    expect(ele.textContent).toEqual('');
    userEvent.type(ele, value);
    expect(mockFn).toHaveBeenCalledTimes(10);
  });
});
