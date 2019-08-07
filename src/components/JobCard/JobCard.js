import React, { Component } from 'react';

class JobCard extends Component {

  // state = {

  //   companyName: this.props.companyName,
  //   position: this.props.job.position,
  //   category: this.props.job.category,
  //   dateApplied: this.props.dateApplied
  // }

  render() {
    return (
      <div class="job">
        <h2>{this.props.position}</h2>
        <ul>
          <li><strong>Company Name:</strong> {this.props.companyName}</li>
          <li><strong>Category</strong> {this.props.category}</li>
          <li><strong>Date Applied:</strong> {this.props.dateApplied}</li>
        </ul>
      </div>

    )
  }
}



export default JobCard