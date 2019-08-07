import React, { createContext, useState, useEffect } from 'react';
import JobApiService from '../services/JobApiService';
import TokenService from '../services/TokenService';

export const JobContext = createContext();

const JobContextProvider = props => {
  const [jobs, setJobs] = useState([]);

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
    <JobContext.Provider value={{ jobs, addJob }}>
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
