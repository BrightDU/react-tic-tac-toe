import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('contains an Edit text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Edit/)
  expect(linkElement).toBeInTheDocument();
})