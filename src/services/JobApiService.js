import axios from 'axios';
import config from '../config';
import TokenService from './TokenService';

const JobApiService = {
  getJobs() {
    return axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/jobs`,
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

  postJob({ companyName, position, category }) {
    console.log(TokenService.getAuthToken());
    return axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/jobs/newjob`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: {
        companyName,
        position,
        category
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  deleteJob({ id }) {
    return axios({
      method: 'delete',
      url: `${config.API_ENDPOINT}/jobs/${id}`
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  editJob({ edits }) {
    return axios({
      method: 'patch',
      url: `${config.API_ENDPOINT}/jobs/${edits.id}`,
      headers: {
        'content-type': 'application/json',
        authorization: `${TokenService.getAuthToken()}`
      },
      data: {
        _id: edits.id
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

export default JobApiService;
