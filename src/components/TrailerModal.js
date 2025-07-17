import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  boxShadow: 24,
  p: 2,
  outline: 'none',
  maxWidth: '80vw',
  maxHeight: '80vh',
};

const TrailerModal = ({ url, onClose }) => {
  return (
    <Modal open={Boolean(url)} onClose={onClose} aria-labelledby="modal-trailer">
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
        {url && (
          <iframe
            width="100%"
            height="400"
            src={url}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </Box>
    </Modal>
  );
};

export default TrailerModal;
