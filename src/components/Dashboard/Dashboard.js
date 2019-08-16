import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContext';
import JobCard from '../JobCard/JobCard';
import './Dashboard.css';

const Dashboard = props => {
  const { jobs } = useContext(JobContext);

  let columns = ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'];

  let jobList = columns.map(column => {
    return (
      <ul key={column} className="job-column">
        <h1 className="column-title">{column}</h1>
        {jobs
          .filter(job => job.category.toLowerCase() === column.toLowerCase())
          .map(job => {
            return (
              <JobCard
                companyName={job.companyName}
                position={job.position}
                category={job.category}
                dateApplied={job.dateApplied}
                logo={job.logo}
                id={job._id}
                key={job._id}
                {...props}
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
