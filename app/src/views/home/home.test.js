import { render, screen } from '@testing-library/react';
import Home from './'

test('renders app with login navbar', () => {
  render(<Home />);
  const buttonElement = screen.getByText(/go to dashboard/i);
  expect(buttonElement).toBeInTheDocument();
});