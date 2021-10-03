import React from 'react';
import './Header.css';
import headerImage from '../../../Images/header.jpg';

const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center left">
                        <div>
                            <h5>School of Code Hunters</h5>
                            <h1> <span>Programming</span> Zone</h1>
                            <p>Join here today! Boost up your career</p>
                            <button className="sign-up">Sign Up</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src={headerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;