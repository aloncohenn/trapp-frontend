import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContext';
import './Dashboard.css';
import JobCard from '../JobCard/JobCard';

const Dashboard = () => {
  const { jobs } = useContext(JobContext);

  let columns = ['WISHLIST', 'APPLIED', 'INTERVIEW', 'OFFER', 'REJECTED'];

  let jobList = columns.map(column => {
    return (
      <ul key={column}>
        <h1>{column}</h1>
        {jobs
          .filter(job => job.category.toLowerCase() === column.toLowerCase())
          .map(job => {
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
    );
  });

  return (
    <div className="dashboard">
      <div className="categories">
        <ul className="category-list">{jobList}</ul>
      </div>
    </div>
  );
};

export default Dashboard;
