import React, { createContext, useState, useEffect } from 'react';
import JobApiService from '../services/JobApiService';
import moment from 'moment'
import TokenService from '../services/TokenService';

export const JobContext = createContext();

const JobContextProvider = props => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (TokenService.hasAuthToken()){ 
      getJobs();
    }
  }, []);

  const getJobs = () => {
    JobApiService.getJobs().then(jobs => setJobs(jobs));
  }

  const addJob = (jobData, redirect) => {
    JobApiService.postJob(jobData).then(res => {
      if (res.error) {
        return res.error;
      } else {
        JobApiService.getJobs().then(jobs => setJobs(jobs));
        redirect();
      }
    });
  };

  const deleteJob = id => {
    JobApiService.deleteJob(id);
    JobApiService.getJobs().then(jobs => setJobs(jobs));
  };

  const getNow = () => {
    return moment().format('YYYY-MM-DD')
  }

  return (
    <JobContext.Provider value={{ jobs, addJob, deleteJob, getNow, getJobs }}>
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
