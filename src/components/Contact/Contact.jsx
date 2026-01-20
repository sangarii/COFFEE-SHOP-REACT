import React from "react";
import "./Contact.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="mainText">
        CONTACT <span className="highlightText">US</span>
      </h2>
      <article className="contact-items">
        <section className="contact-card">
          <h3>Get In Touch</h3>
          <form action="#">
            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" className="my-input" placeholder="Name" required />
            </div>
            <div className="input-box">
              <MdEmail className="icon" />
              <input type="email" className="my-input" placeholder="Email" required />
            </div>
            <div className="input-box">
              <FaPhoneAlt className="icon" />
              <input type="number" className="my-input" placeholder="Number" required />
            </div>
            <a href="" className="btn contact-btn ">
              Contact Now
            </a>
          </form>
        </section>
        <section className="contact-info">
          <p className="contact-details">
            <IoLocationSharp />
            123 Campsite Avenue, Wilderness, CA 98765
          </p>
          <p className="contact-details">
            <MdEmail />
            info@coffeeshopwebsite.com
          </p>
          <p className="contact-details">
            <FaPhoneAlt />
            (123) 456-78909
          </p>
          <p className="contact-details">
            <LuClock />
            Monday - Friday: 9:00 AM - 5:00 PM
          </p>
          <p className="contact-details">
            <LuClock />
            Saturday: 10:00 AM -3:00 PM
          </p>
          <p className="contact-details">
            <LuClock />
            Sunday: Closed
          </p>
          <p className="contact-details">
            <TbWorld />
            www.codingnepalweb.com
          </p>
        </section>
      </article>
    </div>
  );
};

export default Contact;
