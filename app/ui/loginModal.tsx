'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Login from '../ui/login';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export default function LoginModal({
  open,
  onClose,
  setIsLoggedIn,
}: LoginModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="Login modal"
        aria-describedby="Here is a login modal"
      >
        <Box sx={style}>
          <Login setIsLoggedIn={setIsLoggedIn} onClose={onClose} />
        </Box>
      </Modal>
    </div>
  );
}
