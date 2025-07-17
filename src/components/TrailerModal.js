import React from 'react';

const TrailerModal = ({ isOpen, onClose, trailerUrl }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose}>X</button>
        <iframe
          width="100%"
          height="400"
          src={trailerUrl}
          title="Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top:0, left:0, right:0, bottom:0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    width: '80%',
    maxWidth: 800,
    background: '#000',
    padding: 20,
    borderRadius: 8,
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 18,
    color: '#fff',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
};

export default TrailerModal;
