import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';


it('renders without crashing', () => {
  const form = document.createElement('form');
  ReactDOM.render(
    <Form />
, form);
});