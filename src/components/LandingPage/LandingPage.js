import React from 'react';
import './LandingPage.css';
import gif from '../../assets/landing.gif';
import screenshot from '../../assets/trapp.png';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <>
      <header role="banner" id="header">
        <h1>In the TrApp house? We will help you get out </h1>
      </header>
      <main role="main">
        <div className="landing">
          <img src={gif} alt="TrApp demo animation" />
          <span>
            <h3>
              You focus on applying, we’ll take care of organizing your search
          </h3>
          </span>
        </div>
        <div className="landing">
          <span>
            <h3>
              Keep track of your tasks for each of your job applications
            </h3>
          </span>
          <img src={screenshot} alt="TrApp screenshot" />
        </div>
        <div className="landing-buttons">
          <Link to="/signup">
            <button type="submit" class="landing-button">Sign Up</button>
          </Link>
          <Link to="/login">
            <button type="submit" class="landing-button">Log In</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
