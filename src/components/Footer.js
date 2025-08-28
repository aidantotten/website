import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Aidan V. Totten</h3>
          <p className="footer-description">
            Business Systems Analyst & Software Developer passionate about creating impactful solutions through technology and data-driven insights.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#intro">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Connect</h4>
          <ul className="footer-links">
            <li><a href="mailto:aidanvt64@gmail.com">Email</a></li>
            <li><a href="https://linkedin.com/in/aidan-totten" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="tel:703-472-8139">Phone</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Location</h4>
          <p className="footer-location">
            Richmond, Virginia, 23220<br />
            United States
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {currentYear} Aidan V. Totten. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
