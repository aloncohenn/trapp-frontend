import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContext';
import './Dashboard.css';
import JobCard from '../JobCard/JobCard';

const Dashboard = () => {
  const { jobs } = useContext(JobContext);

  const jobList = jobs.map(job => {
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
  });

  let columns = ['WISHLIST', 'APPLIED', 'INTERVIEW', 'OFFER', 'REJECTED'];

  let categories = columns.map((col, idx) => {
    return (
      <li key={idx} className="column">
        {col}
      </li>
    );
  });

  return (
    <div className="dashboard">
      <div className="categories">
        <ul className="category-list">{categories}</ul>
      </div>
      <ul className="job-list">{jobList}</ul>
    </div>
  );
};

export default Dashboard;
