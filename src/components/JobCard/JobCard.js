import React from 'react';

const JobCard = props => {
  return (
    <div class="job">
      <h2>{props.position}</h2>
      <ul>
        <li>
          <strong>Company Name:</strong> {props.companyName}
        </li>
        <li>
          <strong>Category</strong> {props.category}
        </li>
        <li>
          <strong>Date Applied:</strong> {props.dateApplied}
        </li>
      </ul>
    </div>
  );
};

export default JobCard;
