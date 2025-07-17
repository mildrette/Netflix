import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/profiles');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="login-page">
      <div className="form-wrapper">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email or phone number</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="submit">Sign In</button>

          <div className="form-help">
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div>
              <a href="#">Need help?</a>
            </div>
          </div>
        </form>

        <p>
          New to Netflix? <Link to="/signup">Sign up now</Link>
        </p>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <a href="#">Learn more.</a>
        </small>
      </div>
    </div>
  );
};

export default Login;
