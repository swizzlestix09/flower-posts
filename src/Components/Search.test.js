import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Search from './Search';


it('renders without crashing', () => {
  const form = document.createElement('form');
  ReactDOM.render(
    <Search />
, form);
});

it('renders search text', () => {
  render(<Search />);
  expect(screen.getByText('Search by title:')).toBeInTheDocument();
});