import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-column">
        <div className="footer-logo">
          <img src="your-logo-url.png" alt="Logo" />
        </div>
        <div className="footer-address">
          <p>1234 Street Name, City, Country</p>
          <p>Email: example@email.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="footer-column">
        <h4>QUICK LINKS</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/team">Our Team</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/info">FAQ</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>FOLLOW US</h4>
        <div className="footer-social-media">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/facebook.png" alt="Facebook" className="social-icon" />
          </a>
         
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/twitter.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>

      <div className="footer-column">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <form>
        <input type="text" placeholder="Name" />  
          <input type="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>

    <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </>

  );
};

export default Footer;
