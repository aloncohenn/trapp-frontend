import React from 'react';
import ReactDOM from 'react-dom';
import JobCard from './JobCard';
import JobContextProvider from '../../contexts/JobContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <JobContextProvider>
      <JobCard />
    </JobContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
