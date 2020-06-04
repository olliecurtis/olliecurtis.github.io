import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.scss';

const Contact = () => (
  <div className="Contact">
    <h1 className="Contact_Title">Contact</h1>
    <div className="Contact_Intro">Want to get in touch?</div>
    <div className="Contact_Body">
      <p>
        <FontAwesomeIcon icon="Github" /> Github
      </p>
      <p>
        <FontAwesomeIcon icon="Github" /> LinkedIn
      </p>
      <p>
        <FontAwesomeIcon icon="Github" /> Twitter
      </p>
      <p>
        <FontAwesomeIcon icon="Github" /> Email
      </p>
    </div>
  </div>
);

export default Contact;
