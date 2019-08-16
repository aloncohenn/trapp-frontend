import axios from 'axios';
import config from '../config';
import TokenService from './TokenService';

const TodoApiService = {
  getTodos(job_id) {
    return axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/todos/${job_id}`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  getTodoById(_id) {
    return axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/todos/get_todo/${_id}`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  postTodo(todo) {
    return axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/todos/add_todo`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: todo
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  deleteTodo(_id) {
    return axios({
      method: 'delete',
      url: `${config.API_ENDPOINT}/todos/delete_todo/${_id}`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  updateTodo(todo) {
    return axios({
      method: 'patch',
      url: `${config.API_ENDPOINT}/todos/update_todo`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: todo
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  }
};

export default TodoApiService;
