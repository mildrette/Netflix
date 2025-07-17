import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay" />

      <div className="landing-content">
        <h1 className="landing-title">Unlimited movies, TV shows, and more</h1>
        <h2 className="landing-subtitle">Watch anywhere. Cancel anytime.</h2>
        <p className="landing-description">
          Ready to watch? Click below to create your account and get started.
        </p>
        <button className="get-started-btn" onClick={() => navigate('/signup')}>Get Started</button>
      </div>
    </div>
  );
};

export default Landing;
