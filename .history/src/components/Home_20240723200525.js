import React from 'react';
import './Home.css';  // Assuming you have a CSS file for styling
import profilePic from '../images/1.png';  // Adjust the path

const Home = () => {
    return (
        <div className="home">
            <nav className="navbar">
                <div className="logo">KABILAN</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
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
                    <a href="https://www.linkedin.com/in/kabilan-s-5602242a4/" className="download-cv" target="_blank" rel="noopener noreferrer">
                        Download CV
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Home;
