import React, { createContext, useState } from 'react';
import TokenService from '../services/TokenService';

export const UserContext = createContext();

const UserContextProvider = props => {
  const [status, setStatus] = useState(TokenService.hasAuthToken());

  const handleLogOut = () => {
    TokenService.clearAuthToken();
    setStatus(false);
  };

  const handleLogIn = (jwt, redirect) => {
    TokenService.saveAuthToken(jwt);
    setStatus(true);
    redirect();
  };

  return (
    <UserContext.Provider
      value={{ handleLogOut, handleLogIn, status, setStatus }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
