import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import JobContextProvider from '../../contexts/JobContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <JobContextProvider>
      <Dashboard />
    </JobContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
