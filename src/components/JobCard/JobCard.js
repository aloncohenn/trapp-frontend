import React, { Component } from 'react';
import './JobCard.css'

class JobCard extends Component {

  // state = {

  //   companyName: this.props.companyName,
  //   position: this.props.job.position,
  //   category: this.props.job.category,
  //   dateApplied: this.props.dateApplied
  // }





  render() {

    return (
      <div className="job">
        <h3>{this.props.position}</h3>
        <ul>
          <li><strong>Company Name:</strong> {this.props.companyName}</li>
          <li><strong>Category</strong> {this.props.category}</li>
          <li><strong>Date Applied:</strong> {this.props.dateApplied.split("T")[0]}</li>
        </ul>
      </div>

    )
  }
}



export default JobCard