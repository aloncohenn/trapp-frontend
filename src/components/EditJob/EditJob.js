import React, {useState} from 'react';
import JobApiService from '../../services/JobApiService';
import Emoji from '../Emoji/Emoji';
import './JobForm.css';

const EditJob = () => {
  const [error, setError] = useState(null);

  const handleSubmitJob = e => {
    e.preventDefault();
    const { company_name, position, category } = e.target;

    JobApiService.postJob({
      companyName: company_name.value,
      position: position.value,
      category: category.value
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
        <input type="text" name="company_name" id="company_name" placeholder="Company" />
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <input type="text" name="position" id="position" placeholder="Position" />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input type="text" name="category" id="category" placeholder="Category" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
  )
}

export default EditJob