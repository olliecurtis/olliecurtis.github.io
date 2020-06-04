import React from 'react';

import Card from '../Card';
import './Projects.scss';

// const ProjectList = ['Chatty AI', 'Hue Node', 'Backpack'];

const Projects = () => (
  <div className="Projects">
    <h1 className="Projects_Title">Projects</h1>
    <p className="Projects_Intro">Here is some of my most recent projects</p>
    <div className="Projects_List">
      <Card
        title="Chatty AI"
        subtitle="A AI project"
        href="https://google.co.uk"
      />
      <Card
        title="Hue Node API"
        subtitle="A node server to interact with Hue API"
        href="https://google.co.uk"
      />
      <Card
        title="Backpack"
        subtitle="The Skyscanner Design System"
        href="https://google.co.uk"
      />
    </div>
  </div>
);

export default Projects;
