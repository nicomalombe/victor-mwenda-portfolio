import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/victor-mwenda-ab455531a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/MwendaVictor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>

          <a href="mailto:mwendavictor505@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>

          <a
            href="https://wa.me/254790543655"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          <a
            href="https://x.com/FavioVicki38014"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <i className="fab fa-x-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/favio_dimba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="contact-info">
          <p><strong>Phone:</strong> +254 790 543 655</p>
          <p><strong>Email:</strong> mwendavictor505@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
