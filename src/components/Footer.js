import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.linksGroup}>
        {[
          'FAQ', 'Help Center', 'Account', 'Media Center', 'Investor Relations', 'Jobs',
          'Ways to Watch', 'Terms of Use', 'Privacy', 'Cookie Preferences',
          'Corporate Information', 'Contact Us'
        ].map((link, i) => (
          <a key={i} href="/" style={styles.link}>{link}</a>
        ))}
      </div>
      <p style={styles.text}>© 2025 Netflix Clone. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#141414',
    color: '#999',
    padding: '40px 30px',
    fontSize: 13,
    lineHeight: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  linksGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '12px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '800px',
    marginBottom: '25px',
  },
  link: {
    color: '#999',
    textDecoration: 'none',
    fontSize: 12,
    transition: 'color 0.3s ease',
  },
  text: {
    marginTop: '10px',
    fontSize: '12px',
    color: '#666',
  },
};

export default Footer;
