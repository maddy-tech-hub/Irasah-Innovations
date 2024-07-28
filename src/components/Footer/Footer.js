import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import config from '../../config';
import mainLogo from '../../assets/images/main-logo.jpeg';

function Footer() {
  const { location, socialLinks, companyName } = config.contactDetails;

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={mainLogo} alt="Logo" className="footer-logo" />
          <address>{location.address}</address>
          <div className="footer-social">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h4>Quick Links</h4>
            {config.quickLinks.map((link, index) => (
              <Link to={link.url} key={index} onClick={handleLinkClick}>{link.label}</Link>
            ))}
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            {config.services.map((service, index) => (
              <Link to={service.url} key={index} onClick={handleLinkClick}>{service.title}</Link>
            ))}
          </div>
          <div className="footer-section">
            <h4>Technologies</h4>
            {config.technologies.map((tech, index) => (
              <Link to={tech.url} key={index} onClick={handleLinkClick}>{tech.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 {companyName}. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
