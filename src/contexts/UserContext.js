import React, { createContext, useReducer, useState } from 'react';
import { userReducer } from '../reducers/UserReducer';

export const UserContext = createContext();

const UserContextProvider = props => {
  const [status, dispatch] = useReducer(userReducer, { loggedIn: false });

  return (
    <UserContext.Provider value={{ status, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
