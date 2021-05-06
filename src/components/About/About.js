import React from 'react';
import './About.scss';

const About = () => (
  <div className="About">
    <div className="About_Image-container">
      <img
        className="About_Image"
        src="https://via.placeholder.com/250"
        alt="this is car"
      />
    </div>
    <div className="About_Intro">
      <p>
        Hello{' '}
        <span role="img" aria-label="waving emoji">
          👋
        </span>{' '}
        My name is Ollie and I am a software engineer currently working at Skyscanner as a front-end enginner building the design system - <a href="https://backpack.github.io">Backpack</a>
      </p>
      <p>
        I have worked as an Software Engineer for 4 years and know a polyglot of programmering langauges which I have used to develop many projects that you can find listed below.
        Take a look around and if you have any questions then reach out using the contact section at the bottom of the page! I look forward to chatting to you.
      </p>
      <p>
        Known languages:
        <ul>
          <li>React</li>
          <li>SASS</li>
          <li>Node JS</li>
          <li>Javascript</li>
          <li>React Native</li>
        </ul>
      </p>
    </div>
  </div>
);

export default About;
