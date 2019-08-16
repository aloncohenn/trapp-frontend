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
    console.log(techStack)

    if (techStack.length === 0) {
      return <p>No tech added to this job. <Link to={`/edit/${job_id}`}>Edit to add some?</Link></p>
    }

    return techStack.map(tech => {
      return <button onClick={() => getYouTubeResults(`${tech} study`)}>Study {tech}</button> 
    })
  }

  return (
  <>
    {(job.techStack) 
    ? generateButtons(job.techStack)
    : <p>Loading...</p>}

    <ul>
      {videos
      ? videos.map(video => {
        return (
          <li>
            <h3><a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} >{video.snippet.title}</a></h3>
            <img src={video.snippet.thumbnails.default.url} alt={`${video.snippet.title} YouTube`} />
            <p>{video.snippet.description}</p>
          </li>
        )
      })
      : <p>Click a button to get videos</p>}
    </ul>
  </>
  )
}

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join('&');
}

export default Study