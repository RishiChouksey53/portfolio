import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Get In Touch</h1>
      <div>
        <h2>Let's work together</h2>
        <p>
          I'm currently available for freelance work and job opportunities. <br /> If
          you have a project that needs some creative thinking or if you're
          looking to hire, <br /> feel free to reach out.
        </p>
        <div className="contact-card">
          <div className="contact-card-left">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div>
            <h3>Email</h3>
            <a href="mailto:choukseyrishi89@gmail.com">
              choukseyrishi89@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card-left">
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <h3>Social Media</h3>
            <a href="https://www.linkedin.com/in/rishichouksey53/">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
