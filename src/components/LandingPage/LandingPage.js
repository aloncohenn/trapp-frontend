import React from 'react';
import './LandingPage.css';
import gif from '../../assets/landing1.gif';
import screenshot from '../../assets/trapp1.png'
 

const LandingPage = () => {
  return (
    <>
      <header role="banner" id="header">
        <h1>In the TrApp house? We will help you get out </h1>
      </header>

      <main role="main">
    
        <div className="landing">
        <img src={gif} alt="TrApp demo animation" />

          <h3>
            You focus on applying, we’ll take care of organizing your search
          </h3>
        </div>

        <div className="landing">
          <h3>
            Keep track of your tasks for each of your job applications
          </h3>

          <img src={screenshot} alt="TrApp screenshot" />
        </div>
        
      </main>
    </>
  );
};

export default LandingPage;
