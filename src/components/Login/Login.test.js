import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import JobContextProvider from '../../contexts/JobContext';
import UserContextProvider from '../../contexts/UserContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <UserContextProvider>
      <JobContextProvider>
        <Login />
      </JobContextProvider>
    </UserContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
