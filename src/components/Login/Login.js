import React, { useState } from 'react';
import AuthApiService from '../../services/AuthApiService';
import TokenService from '../../services/TokenService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';

const Login = () => {
  const [error, setError] = useState(null);

  const handleSubmitJwtAuth = e => {
    e.preventDefault();
    const { username, password } = e.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    }).then(res => {
      if (res.error) {
        setError(res.error);
      } else {
        username.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        console.log('response is: ', res);
        console.log('user logged in!', TokenService.getAuthToken());
      }
    });
  };

  const handleDemo = () => {
    AuthApiService.postLogin({
      username: 'DemoUser',
      password: 'demoAccount@1'
    }).then(res => {
      if (res.error) {
        setError(res.error);
      } else {
        const jwt = res.data.authToken.split('Bearer ')[1];
        TokenService.saveAuthToken(jwt);
        console.log('user logged in!', TokenService.getAuthToken());
      }
    });
  };

  return (
    <section>
      <h1>Log In</h1>
      <form className="login-form" onSubmit={handleSubmitJwtAuth}>
        <div role="alert">
          {error && (
            <p className="error">
              {error} <Emoji symbol="😃" />
            </p>
          )}
        </div>{' '}
        <div>
          <label htmlFor="username">
            <FontAwesomeIcon icon="user" color="black" size="sm" /> Username{' '}
          </label>{' '}
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username..."
          />
        </div>
        <div>
          <label htmlFor="password">
            <FontAwesomeIcon icon="key" color="black" size="sm" /> Password{' '}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
          />
        </div>
        <button type="submit">Log In</button>
        <input type="button" onClick={handleDemo} value="Demo" />
      </form>
    </section>
  );
};

export default Login;
