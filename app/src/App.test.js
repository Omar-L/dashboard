import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with login navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
