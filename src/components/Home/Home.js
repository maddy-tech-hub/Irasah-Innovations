import React from 'react';
import './Home.css';
import mainBanner from '../../assets/images/main-banner.jpg';
import Service from '../Services/Services'

function Home() {
  return (
    <div>
      <section className="app-banner">
        <div className="app-container">
          <div className="app-container-title">
            <h1>Get Solutions to Expert Consultant</h1>
            <button onClick={() => window.location.href='#services'}>Discover More</button>
          </div>
          <div className="app-container-right-thumbnail">
            <div className="app-container-right-bg-shape">
              <img src={mainBanner} alt="MainBanner" className="round-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="services-section" id="services">
        <Service />
      </section>
    </div>
  );
}

export default Home;
