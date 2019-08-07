import React, { useState, useContext } from 'react';
import Emoji from '../Emoji/Emoji';
import './JobForm.css';
import { JobContext } from '../../contexts/JobContext';

const JobForm = props => {
  const [error, setError] = useState(null);
  const { addJob } = useContext(JobContext);

  const redirect = () => {
    props.history.replace('/dashboard');
  };

  const handleSubmitJob = e => {
    e.preventDefault();
    const { company_name, position, category } = e.target;

    return setError(
      addJob(
        {
          companyName: company_name.value,
          position: position.value,
          category: category.value
        },
        redirect
      )
    );
  };

  return (
    <section>
      <h1>Post Job</h1>
      <form className="post-job-form" onSubmit={handleSubmitJob}>
        <div role="alert">
          {error && (
            <p className="error">
              {error} <Emoji symbol="😃" />
            </p>
          )}
        </div>{' '}
        <div>
          <label htmlFor="company_name">Company Name</label>
          <input
            type="text"
            name="company_name"
            id="company_name"
            placeholder="Company"
          />
        </div>
        <div>
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Position"
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Category"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default JobForm;
