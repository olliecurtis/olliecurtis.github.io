import React from 'react';

import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <div className="App_main">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
