import React, { useState } from 'react';
import AuthApiService from '../../services/AuthApiService';
import useSignUpForm from './useSignUpForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';
import './SignUp.css'

const SignUp = () => {
  const [error, setError] = useState('');
  const { values, handleChange, handleSubmit } = useSignUpForm(
    { username: '', email: '', password: '' },
    signupUser
  );

  function signupUser() {
    AuthApiService.postUser({ ...values }).then(res => {
      setError('')
      if (res.error) {
        if (res.error.email) {
          setError(`email ${res.error.email.message}`)
          return;
        }
        if (res.error.username) {
          setError(`email ${res.error.username.message}`)
          return;
        }
      }

      setError('Signed up!')
      return;
    });
  }

  return (
    <section>
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div role="alert">
          {error && (
            <p className="error">
              {error} <Emoji symbol="😃" />
            </p>
          )}
        </div>{' '}
        <div>
          <label>
            <FontAwesomeIcon icon="user" color="black" size="sm" /> Username{' '}
          </label>{' '}
          <input
            className="input"
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            placeholder="username..."
            required
          />
        </div>
        <div>
          <label>
            <FontAwesomeIcon icon="envelope" color="black" size="sm" /> Email{' '}
          </label>{' '}
          <input
            className="input"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="email..."
            required
          />
        </div>
        <div>
          <label>
            <FontAwesomeIcon icon="key" color="black" size="sm" /> Password{' '}
          </label>{' '}
          <input
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="password..."
            required
          />
        </div>
        <button type="submit" className="signupButton">Log In</button>
      </form>
    </section>
  );
};

export default SignUp;
