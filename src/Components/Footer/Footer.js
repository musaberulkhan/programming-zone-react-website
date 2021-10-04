import React from 'react';
import { Link, useHistory  } from 'react-router-dom';
import './Footer.css';

const Footer = () => {    
    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <h5 className="section-title">Our Goal</h5>
                        <p className="pe-4">To spread the light of programming knowledge among beginner programmers within their budget</p>
                    </div>
                    <div className="col-md-4 col-12 get-in-touch">
                        <h5 className="section-title">Get in Touch</h5>                        
                        <p className="mb-0 mt-3"><i className="fas fa-phone-alt"></i>+91 254-310-0794</p>
                        <p><i className="fas fa-envelope"></i>info@programming-zone.com</p>
                    </div>
                    <div className="col-md-4 col-12 search">
                        <h5 className="section-title">Serach</h5>                        
                        <input type="text" placeholder="Write here what to search"></input>
                        <button className="btn px-4">Search</button>
                    </div>
                </div>
                <div>
                    <p className="text-center mb-0 mt-4">Copyright @2021 || Programming Zone</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;