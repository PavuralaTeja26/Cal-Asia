import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faLinkedin,
  faFacebook,
  /*faYoutube,*/
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <div className="contact-title">
    <h2>Contact Us</h2>

    {/* Office Location Map */}
    <div className="map-section">
      <h3>Our Office Location</h3>
      <div className="map-container">
       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <iframe title="CalAsia Hyderabad Office Location"
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.949381150022!2d78.53662187428934!3d17.366168583517386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99b6975a96ed%3A0x1323f8a153ea5428!2sCal-Asia%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1749121765369!5m2!1sen!2sin"
   width="600"
   height="450"
   style={{ border: 0 }}
   allowFullScreen=""
   loading="lazy"
   referrerPolicy="no-referrer-when-downgrade"
/>

</div>

      </div>
    </div>

    {/* Contact Info and Form */}
    <div className="contact-container">
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FontAwesomeIcon icon={faEnvelope} />
           <a href="mailto:india.services@cal-asia.com" style={{ textDecoration: 'none', color: 'inherit' }}>
    india.services@cal-asia.com
  </a>
  {" / "}
  <a href="mailto:deekshit@cal-asia.com" style={{ textDecoration: 'none', color: 'inherit' }}>
    deekshit@cal-asia.com
          </a>
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:+91938067599" style={{ textDecoration: 'none', color: 'inherit' }}>
            +91938067599
          </a>
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          Cal-Asia India Private Limited, H.No. A-42, H.No.11-7-241, Huda Complex, Saroor Nagar, Hyderabad, Telangana, 500035, India
        </p>

        {/* Social Media Links */}
        <div style={{ marginTop: '20px' }}>
          <p><strong>Connect with us:</strong></p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <SocialIcon href="https://wa.me/91938067599" bg="#25D366" icon={faWhatsapp} />
            <SocialIcon href="https://www.linkedin.com/company/cal-asia/" bg="#007bb5" icon={faLinkedin} />
            <SocialIcon href="https://www.facebook.com/calasiapl/" bg="#3B5998" icon={faFacebook} />
            
        {/*  <SocialIcon href="https://www.youtube.com/" bg="#FF0000" icon={faYoutube} /> */}
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <h3>Send a Message</h3>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <textarea placeholder="Your Message" rows="4" className="form-textarea"></textarea>
          <button type="button" className="form-submit-btn" onClick={() => alert('Message sent!')}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Reusable Social Icon Button
const SocialIcon = ({ href, icon, bg }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      height: '50px',
      backgroundColor: bg,
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      transition: 'opacity 0.3s ease',
    }}
    onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
    onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
  >
    <FontAwesomeIcon icon={icon} size="lg" />
  </a>
);

export default Contact;
