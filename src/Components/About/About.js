import React from 'react';
import './About.css';
import AboutImage from '../../Images/about.jpg';
const About = () => {
    return (
        <div className="About container">
            <h1 className="section-title">About Us</h1>
            <div className="d-flex justify-content-center">
                <img className="about-image" src={AboutImage} alt="" />
            </div>
            <h4>What is Programming Zone?</h4>
            <p>We create simplified and interactive learning experiences.
                Learning programming should be easy to understand and available for everyone, everywhere!
                Programming Zone is a school for programmers, covering all the aspects of software development.</p>
        </div>
    );
};

export default About;