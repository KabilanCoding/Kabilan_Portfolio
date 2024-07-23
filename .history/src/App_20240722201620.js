import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';  // Assuming you have a CSS file for styling

const App = () => {
    return (
        <div className="App">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </div>
    );
};

export default App;
