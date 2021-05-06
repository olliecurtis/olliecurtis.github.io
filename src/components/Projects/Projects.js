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
        title="Backpack"
        subtitle="The Skyscanner design system for building Skyscanner products"
        href="https://backpack.github.io"
      />
      <Card
        title="Bullseye"
        subtitle="A simple Bullseye game for iOS using SwiftUI"
        href="https://github.com/olliecurtis/Bullseye"
      />
      <Card
        title="Android Dice App"
        subtitle="Learning Android development with a simple Dice App"
        href="https://github.com/olliecurtis/Android-Dice-App"
      />
      <Card
        title="Chatty AI"
        subtitle="A AI project"
        href="https://github.com/olliecurtis/Chatty-Chat-AI"
      />
    </div>
  </div>
);

export default Projects;
