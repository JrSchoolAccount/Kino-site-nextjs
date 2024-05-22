'use client';

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { useRouter } from 'next/navigation';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ open, onClose }) => {
  const router = useRouter();

  const handleCloseAndRedirect = () => {
    onClose();
    router.push('/');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Bokingsbekräftelse</DialogTitle>
      <DialogContent>
        <DialogContentText>Din bokning var lyckad</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseAndRedirect}>Stäng</Button>
      </DialogActions>
    </Dialog>
  );
};
export default BookingModal;
