import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './JobCard.css';

const JobCard = props => {
  const { deleteJob } = useContext(JobContext);

  const redirectToEdit = () => {
    props.history.replace(`/edit/${props.id}`);
  }

  return (
    <li className="job-card">
      <h2>{props.companyName}</h2>
      <p>
        <span>{props.position}</span>
      </p>
      <button onClick={() => redirectToEdit()} className="edit-btn">
        <FontAwesomeIcon icon="edit" color="black" size="lg" />
      </button>
      <button onClick={() => deleteJob(props.id)} className="delete-btn">
        <FontAwesomeIcon icon="trash-alt" color="black" size="lg" />
      </button>
    </li>
  );
};

export default JobCard;
