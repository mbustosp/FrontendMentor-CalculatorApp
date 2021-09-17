import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/calculator/i);
  expect(linkElement).toBeInTheDocument();
});
