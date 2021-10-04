import React from 'react';
import './About.css';
import AboutImage from '../../Images/about.jpg';
const About = () => {
    return (
        <div className="About container">
            <h2 className="section-title">About Us</h2>
            <div className="d-flex justify-content-center">
                <img className="about-image" src={AboutImage} alt="" />
            </div>
            <h4 className="mt-5">What is Programming Zone?</h4>
            <p>We create simplified and interactive learning experiences.
                Learning programming should be easy to understand and available for everyone, everywhere!
                Programming Zone is a school for programmers, covering all the aspects of software development.</p>
            <p>Programming Zone originated from the idea that there exists a class of readers who respond better to
                online content and prefer to learn new skills at their own pace from the comforts of their drawing rooms.
                The journey commenced with a single tutorial on HTML in 2021 and elated by the response it generated, we worked our
                way to adding fresh tutorials to our repository which now proudly flaunts a wealth of tutorials and allied articles
                on topics ranging from programming languages to web designing to academics and much more.</p>
            <p>Our content and resources are freely available and we prefer to keep it that way to encourage our readers acquire
                as many skills as they would like to. We don’t force our readers to sign up with us or
                submit their details either. No preconditions and no impediments. Simply Easy Learning!</p>
        </div>
    );
};

export default About;