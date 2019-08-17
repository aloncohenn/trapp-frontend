import React from 'react';
import ReactDOM from 'react-dom';
import CompanyList from './CompanyList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompanyList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
