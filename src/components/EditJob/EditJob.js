import React, {useState, useContext} from 'react';
import JobApiService from '../../services/JobApiService';
import Emoji from '../Emoji/Emoji';
import { JobContext } from '../../contexts/JobContext';
import {SegmentControl, formatDate} from '../../utils/Helpers'

const EditJob = (props) => {
  const job_id = props.match.params.id
  const [error, setError] = useState(null);
  const { getNow, jobs } = useContext(JobContext);

  const jobData = jobs.find(job => job._id === job_id);

  const handleSubmitJob = e => {
    e.preventDefault();
    const { company_name, position, category, date_applied, tech_stack, notes, job_posting } = e.target;

    JobApiService.editJob({
      _id: job_id,
      companyName: company_name.value,
      jobPosting: job_posting.value,
      position: position.value,
      category: category.value,
      dateApplied: date_applied.value,
      techStack: tech_stack.value,
      notes: notes.value,
    }).then(res => {
      if (res.error) {
        setError(res.error);
      } else {
        console.log(res);
      }
    });
  };
      
  return (
    <section>
    <h1>Edit Job</h1>
    <form className="post-job-form" onSubmit={handleSubmitJob}>
      <div role="alert">
        {error && (
          <p className="error">
            {error} <Emoji symbol="😃" />
          </p>
        )}
      </div>{' '}
      <div>
        <SegmentControl category={jobData.category} />
      </div>
      <div>
        <label htmlFor="company_name">Company</label>
        <input
          type="text"
          name="company_name"
          id="company_name"
          defaultValue={jobData.companyName}
        />
      </div>
      <div>
        <label htmlFor="job_posting">Job Posting</label>
        <input
          type="text"
          name="job_posting"
          id="job_posting"
          defaultValue={jobData.jobPosting}
        />
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          defaultValue={jobData.position}
        />
      </div>
      <div>
        <label htmlFor="date_applied">Date Applied</label>
        <input
          type="date"
          max={getNow()}
          name="date_applied"
          id="date_applied"
          defaultValue={formatDate(jobData.dateApplied)}
        />
      </div>
      <div>
        <label htmlFor="tech_stack">Technologies</label>
        <input
          type="text"
          name="tech_stack"
          id="tech_stack"
          defaultValue={jobData.techStack.join(', ')}
        />
      </div>
      <div>
        <label htmlFor="notes">Notes</label>
        <input
          type="textarea"
          name="notes"
          id="notes"
          defaultValue={jobData.notes}
          size="40"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
  )
}

export default EditJob