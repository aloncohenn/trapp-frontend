import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobApiService from '../../services/JobApiService';
import Emoji from '../Emoji/Emoji';
import { JobContext } from '../../contexts/JobContext';
import { SegmentControl, formatDate } from '../../utils/Helpers';
import TodoList from '../TodoList/TodoList';
import './EditJob.css';

const EditJob = props => {
  const job_id = props.match.params.id;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [job, setJob] = useState({});
  const { getNow, updateJob } = useContext(JobContext);

  useEffect(() => {
    async function fetchJob() {
      const currJob = await JobApiService.getJobById(job_id);
      setJob(currJob);
    }
    fetchJob();
  }, [job_id]);

  const handleSubmitJob = e => {
    e.preventDefault();
    const {
      company_name,
      position,
      category,
      date_applied,
      tech_stack,
      job_posting
    } = e.target;

    setError(
      updateJob({
        _id: job._id,
        companyName: company_name.value,
        jobPosting: job_posting.value,
        position: position.value,
        category: category.value,
        dateApplied: date_applied.value,
        techStack: tech_stack.value.split(',').filter(job => job !== ''),
      })
    );
    setSuccess(true);
  };

  return (
    <section>
      <h1>Edit Job</h1>
      {job.category ? (
        <>
          <form className="post-job-form" onSubmit={handleSubmitJob}>
            <div role="alert">
              {error && (
                <p className="error">
                  {error} <Emoji symbol="😃" />
                </p>
              )}
            </div>{' '}
            <div>
              <SegmentControl category={job.category} />
            </div>
            <div>
              <label htmlFor="company_name">Company</label>
              <input
                type="text"
                name="company_name"
                id="company_name"
                defaultValue={job.companyName}
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="job_posting">Job Posting</label>
              <input
                type="text"
                name="job_posting"
                id="job_posting"
                defaultValue={job.jobPosting}
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                id="position"
                defaultValue={job.position}
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="date_applied">Date Applied</label>
              <input
                type="date"
                max={getNow()}
                name="date_applied"
                id="date_applied"
                defaultValue={formatDate(job.dateApplied)}
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="tech_stack">Technologies</label>
              <input
                type="text"
                name="tech_stack"
                id="tech_stack"
                defaultValue={job.techStack.join(', ')}
                className="form-input"
              />
            </div>
            <button type="submit">Save</button>
            {success && (
              <p className="success">
                {success} <span>Saved! </span> <Emoji symbol="😃" />
                <Link to="/dashboard">Back to Dashboard</Link>
              </p>
            )}
          </form>
          <div>
            <TodoList job_id={job_id} jobData={job} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default EditJob;
