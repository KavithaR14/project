import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div>
          <h3>CuraSlot</h3>
          <p>
            Healthcare is the foundation of a thriving society, and access to quality medical services is not a privilege but a fundamental human right. As Virgil wisely said, "The greatest wealth is health."
          </p>
        </div>
        <div>
          <h3>COMPANY</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h3>GET IN TOUCH</h3>
          <p>+9-987-456-967</p>
          <p>CuraSlot123@gmail.com</p>
        </div>
      </div>
      <div>
        <p>Copyright 2024 © CuraSlot.dev - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
