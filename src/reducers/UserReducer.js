import TokenService from '../services/TokenService';

export const userReducer = (state, action) => {
  console.log('state is: ', state);
  console.log(action);
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN':
      console.log(action);
      TokenService.saveAuthToken(action.jwt);
      return !state.loggedIn;
    case 'TOGGLE_LOGGED_OUT':
      console.log('logged out clicked', action);
      TokenService.clearAuthToken();
      return !state.loggedIn;
    default:
      return state;
  }
};
