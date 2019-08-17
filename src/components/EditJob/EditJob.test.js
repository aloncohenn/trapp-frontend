import React from 'react';
import ReactDOM from 'react-dom';
import EditJob from './EditJob';
import JobContextProvider from '../../contexts/JobContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <JobContextProvider>
      <EditJob />
    </JobContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
