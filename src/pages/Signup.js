import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/profiles');
  };

  return (
    <div className="signup-page">
      <div className="form-wrapper">
        <h2>Sign up to Netflix Clone</h2>
        <form onSubmit={handleSignup}>
          <div className="form-control">
            <input
              type="email"
              placeholder=" "
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="form-control">
            <input
              type="password"
              placeholder=" "
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <div className="form-control">
            <input
              type="password"
              placeholder=" "
              value={confirm}
              required
              onChange={(e) => setConfirm(e.target.value)}
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
