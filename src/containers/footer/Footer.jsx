import React from 'react';
import sevaLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="seva__footer section__padding">
    <div className="seva__footer-heading">
      <h1 className="gradient__text">Right Services - Right Places - Right Time</h1>
    </div>

    <div className="seva__footer-btn">
      <p>COMP 6251 - Beta v4.20</p>
    </div>

    <div className="seva__footer-links">
      <div className="seva__footer-links_logo">
        <img src={sevaLogo} alt="seva_logo" />
        <p>Web devlopment and cloud coursework. <br /> "cogito, ergo sum" - I think , Therefore I am. <br /> All right to this belong to us. <br /> I will find you and sue you. </p>
      </div>
      <div className="seva__footer-links_div">
        <h4>My Links Here</h4>
        <p>Instagram</p>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="seva__footer-links_div">
        <h4> Seva Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="seva__footer-links_div">
        <h4>Get in touch</h4>
        <p>Mayflower forest in concrete</p>
        <p>1234567890</p>
        <p>email@hotmail.com</p>
      </div>
    </div>

    <div className="seva__footer-copyright">
      <p>Web dev and cloud .</p>
    </div>
  </div>
);

export default Footer;
