import React from 'react';
import './About.scss';

const About = () => (
  <div className="About">
    <img
      className="About_Image"
      src="https://via.placeholder.com/250"
      alt="this is car"
    />
    <div className="About_Intro">
      Hello{' '}
      <span role="img" aria-label="waving emoji">
        👋
      </span>{' '}
      My name is Ollie and I am a software engineer currently working at
      Skyscanner, building the design system Backpack
    </div>
  </div>
);

export default About;
