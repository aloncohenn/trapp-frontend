import React, { useState } from 'react';
import AuthApiService from '../../services/AuthApiService';
import useSignUpForm from './useSignUpForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SignUp.css';

const SignUp = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { values, handleChange, handleSubmit } = useSignUpForm(
    { username: '', email: '', password: '' },
    signupUser
  );

  function signupUser() {
    setLoading(true);
    AuthApiService.postUser({ ...values }).then(res => {
      setError('');
      if (res.error) {
        if (res.error.email) {
          setError(`email ${res.error.email.message}`);
          setLoading(false);
          return;
        }
        if (res.error.username) {
          setError(`username ${res.error.username.message}`);
          setLoading(false);
          return;
        }

        if (res.error) {
          setError(`${res.error}`);
          setLoading(false);
          return;
        }
      }

      props.history.replace(`/login`);
    });
  }

  return (
    <section>
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div role="alert">{error && <p className="error">{error}</p>}</div>{' '}
        <div className="input-field">
          <label>
            <FontAwesomeIcon icon="user" color="black" size="sm" />
            <p>Username </p>{' '}
          </label>
          <input
            className="input"
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            required
          />
        </div>
        <div className="input-field">
          <label>
            <FontAwesomeIcon icon="envelope" color="black" size="sm" />
            <p>Email </p>{' '}
          </label>
          <input
            className="input"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            required
          />
        </div>
        <div className="input-field">
          <label>
            <FontAwesomeIcon icon="key" color="black" size="sm" />
            <p>Password</p>{' '}
          </label>{' '}
          <input
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        {loading ? <p>loading...</p> : ''}
      </form>
    </section>
  );
};

export default SignUp;
