import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
