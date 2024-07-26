import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import XLogo from './x-logo.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="JJlogo">
        <div className="JJ-content">
          <img src="https://i.ibb.co/5FhKRhX/JJ-Singh-logo-01.png" alt="JJ Singh Logo - Black Version" className="JJ-logo-black" />
          <img src="https://i.ibb.co/ZMfNrv3/JJ-Singh-logo-02.png" alt="JJ Singh Logo - White Version" className="JJ-logo-white" />
          <a href="mailto:me@jigarjitsingh.com" className="JJ-email">
            me@jigarjitsingh.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/terms.html" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
        <div className="footer-icons">
          <a href='https://www.facebook.com/jigarjits' target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://x.com/JigarjitSingh" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X">
            <img className='xlogo' src={XLogo} alt="X Logo" />
          </a>
          <a href='https://www.instagram.com/jigarjit/' target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href='https://wa.me/qr/3XZPERIYUOWBM1' target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href='http://www.youtube.com/@jigarjit' target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
