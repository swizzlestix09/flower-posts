import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByText(/Increment after 1 second/i);
  expect(linkElement).toBeInTheDocument();
});
