import React from 'react';
import ReactDOM from 'react-dom';
import Study from './Study';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Study />, div);
  ReactDOM.unmountComponentAtNode(div);
});
