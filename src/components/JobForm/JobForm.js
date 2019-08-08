import React, { useState, useContext } from 'react';
import Emoji from '../Emoji/Emoji';
import './JobForm.css';
import { JobContext } from '../../contexts/JobContext';
import { techStackArray, SegmentControl } from '../../utils/Helpers';

const JobForm = props => {
  const [error, setError] = useState(null);
  const { addJob, getNow } = useContext(JobContext);

  const redirect = () => {
    props.history.replace('/dashboard');
  };

  const handleSubmitJob = e => {
    e.preventDefault();
    const { company_name, position, category, tech_stack, date_applied } = e.target;
    const stack = techStackArray(tech_stack.value)
    return setError(
      addJob(
        {
          companyName: company_name.value,
          position: position.value,
          category: category.value,
          techStack: stack,
          date_applied: date_applied.value
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
          <SegmentControl />
        </div>
        <div>
          <label htmlFor="company_name">Company</label>
          <input
            type="text"
            name="company_name"
            id="company_name"
            placeholder="Apple"
          />
        </div>
        <div>
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Software Engineer"
          />
        </div>
        <div>
          <label htmlFor="date_applied">Date Applied</label>
          <input
            type="date"
            max={getNow()}
            defaultValue={getNow()}
            name="date_applied"
            id="date_applied"
          />
        </div>
        <div>
          <label htmlFor="tech_stack">Technologies</label>
          <input
            type="form"
            name="tech_stack"
            id="tech_stack"
            placeholder="React, Node, Angular, etc."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default JobForm;
