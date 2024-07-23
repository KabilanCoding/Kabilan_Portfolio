import React from 'react';
import './Home.css';  // Assuming you have a CSS file for styling
import profilePic from '../images/1.png';  // Adjust the path

const Home = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">KABILAN</div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <section id="home" className="home">
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
            </section>
            <section id="about" className="about">
                <h2>About</h2>
                <p>Details about you.</p>
            </section>
            <section id="services" className="services">
                <h2>Services</h2>
                <p>Details about your services.</p>
            </section>
            <section id="blog" className="blog">
                <h2>Blog</h2>
                <p>Details about your blog.</p>
            </section>
            <section id="contact" className="contact">
                <h2>Contact</h2>
                <p>Details about how to contact you.</p>
            </section>
        </div>
    );
};

export default Home;
