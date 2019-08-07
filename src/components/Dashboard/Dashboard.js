import React, { useContext, useState, useEffect } from 'react';
import { JobContext } from '../../contexts/JobContext';
import './Dashboard.css';
import JobCard from '../JobCard/JobCard';
import TokenService from '../../services/TokenService';
import JobApiService from '../../services/JobApiService';

const Dashboard = () => {
  // const { jobs, getJobs } = useContext(JobContext);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // JobApiService.getJobs().then(jobs => {
  //   setJobs(jobs);
  //   setIsLoading(false);
  // });

  console.log('jobs from dashboard: ', jobs);

  return (
    <div className="Dashboard">
      <h2> Jobs </h2>
      {isLoading
        ? 'Loading...'
        : jobs.map(job => {
            return (
              <div className="jobs" key={job._id}>
                <JobCard
                  companyName={job.companyName}
                  position={job.position}
                  category={job.category}
                  dateApplied={job.dateApplied}
                />
              </div>
            );
          })}
    </div>
  );
};

export default Dashboard;
