import { render, screen } from '@testing-library/react';
import App from './App';

test('renders jammming header text', () => {
  render(<App />);
  const linkElement = screen.getByText(/jammming/i);
  expect(linkElement).toBeInTheDocument();
});
