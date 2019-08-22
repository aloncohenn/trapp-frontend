import React, { useState, useContext } from 'react';
import AuthApiService from '../../services/AuthApiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../contexts/UserContext';
import { JobContext } from '../../contexts/JobContext';
import './Login.css';

const Login = props => {
  const { handleLogIn } = useContext(UserContext);
  const { getJobs } = useContext(JobContext);
  const [error, setError] = useState(null);

  const redirect = () => {
    props.history.replace('/dashboard');
  };

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
        const jwt = res.data.authToken.split('bearer ')[1];
        handleLogIn(jwt, redirect);
        getJobs();
      }
    });
  };

  const handleDemo = () => {
    AuthApiService.postLogin({
      username: 'demoUser',
      password: 'demoAccount@1'
    }).then(res => {
      if (res.error) {
        setError(res.error);
      } else {
        const jwt = res.data.authToken.split('bearer ')[1];
        handleLogIn(jwt, redirect);
        getJobs();
      }
    });
  };

  return (
    <section>
      <h1>Log In</h1>
      <form className="login-form" onSubmit={handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="error">{error}</p>}</div>{' '}
        <div className="input-field">
          <label htmlFor="username">
            <FontAwesomeIcon icon="user" color="black" size="sm" /> Username{' '}
          </label>{' '}
          <input type="text" name="username" id="username" />
        </div>
        <div className="input-field">
          <label htmlFor="password">
            <FontAwesomeIcon icon="key" color="black" size="sm" /> Password{' '}
          </label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
        <button
          type="button"
          className="login-button"
          onClick={handleDemo}
          value="Demo"
        >
          Demo
        </button>
      </form>
    </section>
  );
};

export default Login;
