import React from 'react';
import './Home.css';  // Assuming you have a CSS file for styling
import profilePic from '../images/1.png';  // Adjust the path

const Home = () => {
    return (
        <div className="home" id="home">
            <nav className="navbar">
                <div className="logo">PORTFOLIO</div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <header className="header">
                <div className="profile-pic">
                    <img src={profilePic} alt="Kabilan" />
                </div>
                <div className="intro">
                    <h1>Kabilan</h1>
                    <p>I’m a <span>Web Developer</span></p>
                    <p>Passionate about programming, I am developing a diverse set of skills necessary for a challenging and rewarding career in the IT industry. I am highly interested in problem-solving and implementing innovative projects. I am an ambitious, loyal, and hardworking individual, dedicated to consistently delivering my best effort.</p>
                    <a href="https://drive.google.com/file/d/1bl25H6iOfh6Fz0hQTN4TIENDvZRnPhfm/view?usp=sharing" className="download-cv" target="_blank" rel="noopener noreferrer">
                        Download CV
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Home;
