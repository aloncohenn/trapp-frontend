import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import UserContextProvider from '../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UserContextProvider>
        <Navbar />
      </UserContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
