import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';
import config from '../../config'; 

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_za3sf2i', 'template_3vgld58', e.target, 'S70nsorCSd-jZcG93')
      .then((result) => {
        console.log(result.text);
        setFormSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="contact-container">
      <div className="form-container">
        {formSubmitted ? (
          <div className="thank-you">
            <h2>{config.contactForm.successMessageTitle}</h2>
            <p>{config.contactForm.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={sendEmail}>
            <h2>{config.contactForm.title}</h2>
            <div className="inputBox">
              <input type="text" name="user-name" required="required" />
              <span>{config.contactForm.fullNameLabel}</span>
            </div>
            <div className="inputBox">
              <input type="email" name="user-email" required="required" />
              <span>{config.contactForm.emailLabel}</span>
            </div>
            <div className="inputBox">
              <input type="text" name="user-mobile" required="required" />
              <span>{config.contactForm.mobileLabel}</span>
            </div>
            <div className="inputBox">
              <textarea name="user-message" required="required"></textarea>
              <span>{config.contactForm.messageLabel}</span>
            </div>
            <input type="submit" value={config.contactForm.buttonLabel} />
          </form>
        )}
      </div>
      <div className="details-container">
        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt size={30} style={{ color: "#ff0000" }} />
            <div>
              <h4>{config.contactDetails.location.title}</h4>
              <p>{config.contactDetails.location.address}</p>
            </div>
          </div>
          <div className="info-box">
            <FaPhoneAlt size={30} style={{ color: "#25d366" }} />
            <div>
              <h4>{config.contactDetails.phone.title}</h4>
              <p>{config.contactDetails.phone.number1}</p>
              <p>{config.contactDetails.phone.number2}</p>
            </div>
          </div>
          <div className="info-box">
            <FaEnvelope size={30} style={{ color: "#d44638" }} />
            <div>
              <h4>{config.contactDetails.email.title}</h4>
              <p>{config.contactDetails.email.address}</p>
              <p>{config.contactDetails.email.website}</p>
            </div>
          </div>
          <div className="info-box">
            <FaInstagram size={30} style={{ color: "#C13584" }} />
            <div>
              <h4>{config.contactDetails.instagram.title}</h4>
              <p>{config.contactDetails.instagram.profile}</p>
            </div>
          </div>
          <div className="info-box">
            <FaLinkedin size={30} style={{ color: "#0077B5" }} />
            <div>
              <h4>{config.contactDetails.linkedin.title}</h4>
              <p>{config.contactDetails.linkedin.profile}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
