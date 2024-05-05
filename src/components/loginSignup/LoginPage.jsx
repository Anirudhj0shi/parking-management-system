/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './LoginPageHome.css';
import './LoginDetailsPage.css'
import HomePage from '../Homepage/HomePage';

const LoginPage = () => {
  const [showLoginDetails, setShowLoginDetails] = useState(false);
  const [showSignUpDetails, setShowSignUpDetails] = useState(false);

  const handleLoginClick = () => {
    setShowLoginDetails(true);
    setShowSignUpDetails(false); // Make sure to hide sign up details if it's currently shown
  };

  const handleSignUpClick = () => {
    setShowSignUpDetails(true);
    setShowLoginDetails(false); // Make sure to hide login details if it's currently shown
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <div className="login-container">
        <video autoPlay muted className="background-video">
          <source src="src\components\loginSignup\backvideo.mp4" type="video/mp4" />
          <img src='src\components\loginSignup\background.jpg' />
        </video>
        {!showLoginDetails && !showSignUpDetails && (
          <div className="button-container">
            <button className="login-button" onClick={handleLoginClick}>Login</button>
            <button className="signup-button" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        )}
        {showLoginDetails && (
          <div className="details-container">
            <h3>Login Details Page</h3>
            <form className="details-form">
              <div className="form-group">
                <label htmlFor="email">Email / Username:</label>
                <input type="text" id="email" name="email" placeholder="Enter your email or username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        )}
        {showSignUpDetails && (
          <div className="details-container">
            <h3>Sign Up Details Page</h3>
            <form className="details-form">
              <div className="form-group">
                <label htmlFor="newEmail">Email:</label>
                <input type="text" id="newEmail" name="newEmail" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">Password:</label>
                <input type="password" id="newPassword" name="newPassword" placeholder="Enter your password" />
              </div>
              <button type="submit"><HomePage>Sign Up</HomePage></button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
