import React, { useState } from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  TextField,
  Box,
  Typography,
} from '@mui/material';

interface BookTicketModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (numTickets: number, email: string) => void;
}
const BookModal: React.FC<BookTicketModalProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  const [step, setStep] = useState(1);
  const [numTickets, setNumTickets] = useState(2);
  const [email, setEmail] = useState('');

  const handleNumTicketsChange = (value: number) => {
    setNumTickets(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleConfirm = () => {
    onConfirm(numTickets, email);
    onClose();
  };

  const handleClose = () => {
    onClose();
    setStep(1);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='buy-ticket-modal'
      aria-describedby='buy-ticket-modal-description'
      closeAfterTransaction
      BackdropComponent={Backdrop}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Customize backdrop styles here
        },
      }}
    >
      <Fade in={open}>
        <Box>
          <Box>
            {step === 1 && (
              <>
                <Typography variant='body2'></Typography>
                <Box>
                  <Button
                    variant='contained'
                    onClick={() => handleNumTicketsChange(numTickets - 1)}
                    disabled={numTickets === 1}
                  ></Button>
                  <TextField
                    margin='dense'
                    id='numTickets'
                    label='Antal biljetter'
                    type='number'
                    fullWidth
                    value={numTickets}
                    onChange={(e) =>
                      handleNumTicketsChange(parseInt(e.target.value, 10))
                    }
                  />
                  <Button
                    variant='contained'
                    onClick={() => handleNumTicketsChange(numTickets + 1)}
                  >
                    +
                  </Button>
                </Box>
                <Button variant='contained' onClick={handleNextStep}>
                  Nästa
                </Button>
              </>
            )}
            {step === 2 && (
              <>
                <Typography variant='body2'>E-postadress</Typography>
                <TextField
                  margin='dense'
                  id='email'
                  label='E-postadress'
                  type='email'
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                />
                <Button variant='contained' onChange={handleConfirm}>
                  Bekräfta
                </Button>
                <Button variant='contained' onClick={() => setStep(step - 1)}>
                  Tillbaka
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookModal;
