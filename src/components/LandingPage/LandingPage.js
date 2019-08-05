import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (

        <>
            <header role="banner" id="header">
                <h2>In the TrApp house? We will help you get out </h2>
            </header>

            <main role="main">

                <div class="landing">
                    <img src="https://via.placeholder.com/200.png?text=screenshot1" alt="organzed columns" />

                    <p>You focus on applying, we’ll take care of organizing your search.</p>
                </div>

                <div class="landing">

                    <p>Oversee your metrics and analyze what’s working, and what’s not.</p>

                    <img src="https://via.placeholder.com/200.png?text=screenshot2" alt="metrics" />

                </div>


            </main>
        </>


    )
}

export default LandingPage

