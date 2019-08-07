import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContext';
import './Dashboard.css';
import JobCard from '../JobCard/JobCard';

const Dashboard = () => {
  const { jobs } = useContext(JobContext);

  return (
    <div className="dashboard">
      <ul className="job-list">
        {jobs.map(job => {
          return (
            <JobCard
              companyName={job.companyName}
              position={job.position}
              category={job.category}
              dateApplied={job.dateApplied}
              id={job._id}
              key={job._id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
