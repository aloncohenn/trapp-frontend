import React, { Component } from 'react';
import './Dashboard.css';
import JobApiService from '../../services/JobApiService';
import JobCard from '../../components/JobCard/JobCard';
import './Dashboard.css'


class Dashboard extends Component {

    state = { jobs: [] };

    componentDidMount() {
        JobApiService.getJobs()
            .then(res => this.setState({ jobs: res }))
    }



    render() {
        console.log(this.state.jobs)
        return (

            <div className="Dashboard">

                <h2> Jobs </h2 >

                {this.state.jobs.map(job => {
                    return (
                        <div className="jobs" key={job._id}>
                            <JobCard
                                companyName={job.companyName}
                                position={job.position}
                                category={job.category}
                                dateApplied={job.dateApplied}
                            />

                        </div>);


                })}


            </div>



        )
    }

}

export default Dashboard

