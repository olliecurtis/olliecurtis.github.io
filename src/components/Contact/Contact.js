import React from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoMdMail } from "react-icons/io";
import './Contact.scss';

const Contact = () => (
  <div className="Contact">
    <h1 className="Contact_Title">Contact</h1>
    <div className="Contact_Intro">Want to get in touch?</div>
    <div className="Contact_Body">
      <a href="https://github.com/olliecurtis">
        <IoLogoGithub /> <p>Github</p>
      </a>
      <div>
        <IoLogoLinkedin /> LinkedIn
      </div>
      <div>
        <IoLogoTwitter /> Twitter
      </div>
      <div>
        <IoMdMail /> Email
      </div>
    </div>
  </div>
);

export default Contact;
