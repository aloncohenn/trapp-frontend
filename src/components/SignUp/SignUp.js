import React, { useState } from 'react';
import AuthApiService from '../../services/AuthApiService';
import useSignUpForm from './useSignUpForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';

const SignUp = () => {
  const [error, setError] = useState('');
  const { values, handleChange, handleSubmit } = useSignUpForm(
    { username: '', email: '', password: '' },
    signupUser
  );

  function signupUser() {
    console.log(values);
    AuthApiService.postUser({ ...values }).then(res => {
      if (res.error) {
        setError(res.error);
        return;
      }
      console.log(res);
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
        <button type="submit">Log In</button>
      </form>
    </section>
  );
};

export default SignUp;
