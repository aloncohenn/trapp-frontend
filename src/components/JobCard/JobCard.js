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
      <p>  {props.position}   </p>
     
      <button onClick={() => redirectToEdit()} className="dashboardButton">
        <FontAwesomeIcon icon="edit" size="lg" />
      </button>
      <button onClick={() => deleteJob(props.id)} className="dashboardButton">
        <FontAwesomeIcon icon="trash-alt" size="lg" />
      </button>
    </li>
  );
};

export default JobCard;
