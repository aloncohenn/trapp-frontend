import React from 'react';
import ReactDOM from 'react-dom';
import JobForm from './JobForm';
import JobContextProvider from '../../contexts/JobContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <JobContextProvider>
      <JobForm />
    </JobContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
