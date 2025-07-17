import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
    navigate('/login');
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav style={styles.nav}>
      <Link to="/home">
         <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className="landing-logo"
        />
      </Link>
      <div style={styles.links}>
        <Link to="/home" style={styles.link}>Home</Link>
        {user ? (
          <>
            <Link to="/profiles" style={styles.link}>Profiles</Link>
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.link}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#141414',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 30px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    justifyContent: 'space-between',
  },
  logo: {
    height: 40,
    cursor: 'pointer',
  },
  links: {
    display: 'flex',
    gap: 20,
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: 16,
  },
  logoutBtn: {
    backgroundColor: '#e50914',
    border: 'none',
    color: 'white',
    padding: '6px 12px',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 14,
  },
};

export default Navbar;
