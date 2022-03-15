import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

describe('[Button Component]', () => {
  const buttonText = 'Search';
  const mockFn = jest.fn();
  it('Should display button text', () => {
    render(<Button onClick={mockFn}>{buttonText}</Button>);
    const ele = screen.getByText(/Search/i);
    expect(ele.textContent).toEqual(buttonText);
  });
  it('Should conduct onClick callback when to trigger Click event', () => {
    render(<Button onClick={mockFn}>{buttonText}</Button>);
    const ele = screen.getByText(/Search/i);
    fireEvent.click(ele);
    expect(mockFn).toHaveBeenCalledTimes(1);

    fireEvent.doubleClick(ele);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
