import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is sample docker compose test application. Its a React UI app./i);
  expect(linkElement).toBeInTheDocument();
});
