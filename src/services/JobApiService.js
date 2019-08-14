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

  getJobById(id) {
    return axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/jobs/${id}`,
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

  postJob(job) {
    console.log(job);
    return axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/jobs/newjob`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: job
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  deleteJob(id) {
    return axios({
      method: 'delete',
      url: `${config.API_ENDPOINT}/jobs/${id}`,
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

  editJob(edits) {
    return axios({
      method: 'patch',
      url: `${config.API_ENDPOINT}/jobs/${edits._id}`,
      headers: {
        'content-type': 'application/json',
        authorization: `${TokenService.getAuthToken()}`
      },
      data: edits
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
