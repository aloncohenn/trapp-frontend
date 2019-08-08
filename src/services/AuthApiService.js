import axios from 'axios';
import config from '../config';

const AuthApiService = {
  postUser({ username, email, password }) {
    return axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/users/signup`,
      headers: {
        'content-type': 'application/json'
      },
      data: {
        username,
        email,
        password
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  postLogin({ username, password }) {
    return axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/auth`,
      headers: {
        'content-type': 'application/json'
      },
      data: {
        username,
        password
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  }
};

export default AuthApiService;
