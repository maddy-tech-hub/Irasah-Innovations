import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCog, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import teamImg from '../../assets/about/team.png';
import devImg from '../../assets/about/dev-img.jpg';
import innvImg from '../../assets/about/Innovation.png';
import trainingImg from '../../assets/about/training.png';

function About() {
  return (
    <div className="about-container">
      <h1 className="title">About Us</h1>
      <h2 className="subtitle">Providing the Best Experience and Expertise</h2>
      <div className="content">
        <div className="text-container">
          <p className="text">
            Welcome to <strong>Irasah Innovations</strong>! We are dedicated to offering unparalleled training and placement services, ensuring you have access to the <strong>best experience and expertise</strong> in the industry. Our wide range of courses and services includes:
          </p>
          <ul className="services-list">
            <li>App Development</li>
            <li>Web Development</li>
            <li>UX / UI Design Strategy</li>
            <li>Full Stack Development</li>
            <li>Backend Development</li>
            <li>Automation Testing</li>
          </ul>
          <p className="text">
            At <strong>Irasah Innovations</strong>, we thrive on providing a complete and wide range of software services and solutions
            in information technology, specializing in areas such as <strong>web designing, web development, product design,
            package design, corporate films, outdoor marketing, advertising, branding, mobile app development,
            and digital marketing services</strong>.
          </p>
          <p className="text">
            Our team is endowed with experience, expertise, and knowledge in ideating, conceptualizing, designing,
            and developing web and mobile applications with <strong>customer-centric business module services</strong> to meet the
            client's requirements. At <strong>Irasah Innovations</strong>, we design and develop the website with ease of usage for our clients.
            We believe in cost-effective solutions without compromising on the quality of the product. We help
            our clients to overcome any business challenges with our <strong>unique and innovative solutions</strong>.
          </p>
        </div>
        <div className="image-container">
          <div className="image-card square">
            <img src={teamImg} alt="Team" className="image" />
          </div>
          <div className="image-card rectangle">
            <img src={trainingImg} alt="Training" className="image" />
          </div>
          <div className="image-card square">
            <img src={devImg} alt="Development" className="image" />
          </div>
          <div className="image-card rectangle">
            <img src={innvImg} alt="Innovation" className="image" />
          </div>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon users">
          <FontAwesomeIcon icon={faUsers} />
          <span><strong>Build Real Users</strong></span>
        </div>
        <div className="icon cog">
          <FontAwesomeIcon icon={faCog} />
          <span><strong>Process Easily</strong></span>
        </div>
        <div className="icon star">
          <FontAwesomeIcon icon={faStar} />
          <span><strong>Best Experience</strong></span>
        </div>
        <div className="icon trophy">
          <FontAwesomeIcon icon={faTrophy} />
          <span><strong>Expertise</strong></span>
        </div>
      </div>
    </div>
  );
}

export default About;
