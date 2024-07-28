import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Services.css';
import config from '../../config';

function Services() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="services">
      <h1>Our Services</h1>
      <div className="services-container">
        {config.services.map((service, index) => (
          <div key={index} className="service-card">
            <div className={`service-icon ${service.icon}`} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Services;
