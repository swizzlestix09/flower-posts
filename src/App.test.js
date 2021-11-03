import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/store";

test('renders search form', async () => {
  render(<Provider store={store}><App /></Provider>);
  const checkDiv = screen.getByText(/Search by title/i);
  expect(checkDiv).toBeInTheDocument();
});

