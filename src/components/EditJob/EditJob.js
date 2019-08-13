import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
import JobApiService from '../../services/JobApiService';
import Emoji from '../Emoji/Emoji';
import { JobContext } from '../../contexts/JobContext';
import {SegmentControl, formatDate} from '../../utils/Helpers'

const EditJob = (props) => {
  const job_id = props.match.params.id;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [job, setJob] = useState({});
  const { getNow } = useContext(JobContext);

  useEffect(() => {
    async function fetchJob() {
      const currJob = await JobApiService.getJobById(job_id);
      setJob(currJob);
    }
    fetchJob();

    return () => console.log('unmounting...')
  }, [job_id])

  const handleSubmitJob = e => {
    e.preventDefault();
    const { company_name, position, category, date_applied, tech_stack, notes, job_posting } = e.target;

    JobApiService.editJob({
      _id: job._id,
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
        setSuccess('Job updated');
      }
    });
  };
      
  return (
    <section>
    <h1>Edit Job</h1>
    {job.category && <form className="post-job-form" onSubmit={handleSubmitJob}>
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
        />
      </div>
      <div>
        <label htmlFor="job_posting">Job Posting</label>
        <input
          type="text"
          name="job_posting"
          id="job_posting"
          defaultValue={job.jobPosting}
        />
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          defaultValue={job.position}
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
        />
      </div>
      <div>
        <label htmlFor="tech_stack">Technologies</label>
        <input
          type="text"
          name="tech_stack"
          id="tech_stack"
          defaultValue={job.techStack}
        />
      </div>
      <div>
        <label htmlFor="notes">Notes</label>
        <input
          type="textarea"
          name="notes"
          id="notes"
          defaultValue={job.notes}
          size="40"
        />
      </div>
      <button type="submit">Submit</button>
      {success && (
          <p className="success">
            {success} <Emoji symbol="😃" />
            <Link to="/dashboard">Back to Dashboard</Link>
          </p>
        )}
    </form>}
  </section>)
}

export default EditJob