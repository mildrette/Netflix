// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Netflix Clone. All rights reserved.</p>
      <div style={styles.links}>
        <a href="#" style={styles.link}>Privacy</a>
        <a href="#" style={styles.link}>Terms</a>
        <a href="#" style={styles.link}>Contact</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#141414',
    color: '#888',
    padding: '20px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    fontSize: 14,
    marginTop: 40,
  },
  text: {
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: 15,
  },
  link: {
    color: '#888',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default Footer;
