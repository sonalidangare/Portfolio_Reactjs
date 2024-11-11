import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><i className="fa-solid fa-paper-plane"></i> dangresonali21@gmail.com</p>
            <p><i className="fa-solid fa-phone-volume"></i> 8806338516</p>
            <div className="social-icons">
              <a href="https://github.com/sonalidangare" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://twitter.com/"><i className="fa-brands fa-twitter-square"></i></a>
              <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/sonali-dangre/"><i className="fa-brands fa-linkedin"></i></a>
              
            </div>
            <a href="SONALI DANGARE.pdf" download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
