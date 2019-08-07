import React, { createContext, useState } from 'react';
import JobApiService from '../services/JobApiService';

export const JobContext = createContext();

const JobContextProvider = props => {
  const [jobs, setJobs] = useState({});

  const getJobs = () => {
    JobApiService.getJobs().then(jobs => setJobs(jobs));
  };

  const addJob = (jobData, redirect) => {
    JobApiService.postJob(jobData).then(res => {
      if (res.error) {
        return res.error;
      } else {
        redirect();
      }
    });
  };

  return (
    <JobContext.Provider value={{ jobs, getJobs, addJob }}>
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
