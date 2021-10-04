import React from 'react';
import './Login.css';

const Login = () => {
    return (
        // -----------   Login    -----------
        <div className="Login container d-flex flex-column align-items-center mt-5">
            {/* -----------   Title    ----------- */}
            <h2 className="section-title">Login</h2>

            {/* -----------   Login Form    ----------- */}
            <div className="form-container mb-5">                
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Your Password" />
                </div>
                <button className="btn px-4 login-button"><i className="fas fa-sign-in-alt"></i> Login</button>
            </div>
        </div>
    );
};

export default Login;