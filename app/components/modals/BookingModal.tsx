import React from 'react';
import { Modal, Button } from '@mui/material';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <h2>Bokingsbekräftelse</h2>
        <p>Din bokning var lyckad</p>
        <Button onClick={onClose}>Stäng</Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
