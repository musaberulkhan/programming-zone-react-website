import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact container">
            <div className="row">
                <h2 className="section-title mt-5">Contact Us</h2>
                <div className="col-md-6 col-12">
                    <h3 className="my-3">Leave us a message</h3>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" rows="4"></textarea>
                    </div>
                    <button className="btn px-4 send-button"><i className="fas fa-paper-plane"></i> Send</button>
                </div>
                <div className="col-md-6 col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4444.1648048738925!2d-74.06152056849277!3d40.72269242714635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250cc15ab9c41%3A0x938874ec5d431e78!2s542-556%20Montgomery%20St%2C%20Jersey%20City%2C%20NJ%2007302%2C%20USA!5e0!3m2!1sen!2sbd!4v1633359818329!5m2!1sen!2sbd" 
                    className="google-map" title="google map" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;