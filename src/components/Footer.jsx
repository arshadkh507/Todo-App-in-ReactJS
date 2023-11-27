import React from "react";
import "./Footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp, FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://web.facebook.com/code.master.arshad/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://github.com/arshadkh507" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/arshad-khan-2a6923213/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.link/mslfok" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://arshadkh507.github.io./" target="_blank" rel="noopener noreferrer">
            <FaUser />
          </a>
        </div>
        <p>&copy; 2024 - TaskMate. All rights reserved. Developed by arshadkh507</p>
      </div>
    </footer>
  );
};

export default Footer;
