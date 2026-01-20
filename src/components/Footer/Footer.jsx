import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <div className="footer-circle-avatar">
          <FaFacebookF className="footer-icon" />
        </div>
        <div className="footer-circle-avatar">
          <FaTwitter className="footer-icon"/>
        </div>
        <div className="footer-circle-avatar">
          <FaInstagramSquare className="footer-icon"/>
        </div>
        <div className="footer-circle-avatar">
          <FaLinkedin className="footer-icon"/>
        </div>
        <div className="footer-circle-avatar">
          <FaGithub className="footer-icon"/>
        </div>
      </div>

      <h4>
        Created By<span className="footer-highlight">Web Designer</span> | All
        Rights Reserved
      </h4>
    </div>
  );
};

export default Footer;
