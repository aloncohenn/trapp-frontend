import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import JobApiService from '../../services/JobApiService'
import './Study.css'

const Study = (props) => {
  const job_id = props.match.params.id;
  const [job, setJob] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchJob() {
      const currJob = await JobApiService.getJobById(job_id);
      setJob(currJob);
    }
    fetchJob();
  }, [job_id])

  const getYouTubeResults = (search) => {
    const params = {
      key: config.YOUTUBE_KEY,
      maxResults: 6,
      q: search,
      type: 'video',
      part: 'snippet'
    }
    const queryParams = formatQueryParams(params)
  
    return axios({
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/search?${queryParams}`,
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        setVideos(res.data.items)
      })
      .catch(error => {
        return error.response.data;
      });
  }

  const generateButtons = (techStack) => {
    if (techStack.length === 0) {
      return <div>
        <p>No tech added to this job. </p>
        <Link to={`/edit/${job_id}`}>Edit to add some?</Link>
      </div>
    }

    return (
      <>
      <div className="study-buttons" >
        {techStack.map((tech, idx) => {
          return <button onClick={() => getYouTubeResults(`${tech} study dev`)} key={idx} className="study-button">Study {tech}</button> 
        })}
        <Link to={`/edit/${job._id}`} className="study-button link">Edit Job</Link>
      </div>
      </>
    )
  }

  return (
  <section className="study">
    <h1>{job.companyName}</h1>
    <h2>{job.position}</h2>
    <div>
      {(job.techStack) 
      ? generateButtons(job.techStack)
      : <p>Loading...</p>}
    </div>

    <ul className="youtube-list">
      {videos
      ? videos.map(video => {
        return (
          <li className="youtube-video" key={video.id.videoId}>
            <h3><a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} >{video.snippet.title}</a></h3>
            <img src={video.snippet.thumbnails.default.url} alt={`${video.snippet.title} YouTube`} />
          </li>
        )
      })
      : <p>Click a button to get videos</p>}
    </ul>
  </section>
  )
}

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join('&');
}

export default Study