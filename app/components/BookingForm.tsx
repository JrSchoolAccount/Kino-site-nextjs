import React, { useState } from 'react';
import { TextField, Typography, Button, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';

interface BookingFormProps {
  movieTitle: string;
  movieTime: Date;
  screeningId: string;
}

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const BookingForm: React.FC<BookingFormProps> = ({
  movieTitle,
  movieTime,
  screeningId,
}) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          fullName,
          movieTitle,
          movieTime,
          screeningId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      setEmail('');
      setFullName('');
      alert('Booking submitted successfully');
    } catch (error) {
      console.error('Error submitting booking:');
      alert('Failed to submit booking. Please try again.');
    }
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{ mt: 2, maxWidth: 500, mx: 'auto' }}
    >
      <Typography variant='h6' gutterBottom>
        Boka biljetter för {movieTitle}
      </Typography>
      <Typography>Datum: {movieTime.toString()}</Typography>
      <Stack spacing={2}>
        <TextField
          label='Email'
          variant='outlined'
          fullWidth
          value={email}
          onChange={handleEmailChange}
          sx={{ mt: 50 }}
        />
        <TextField
          label='Full Name'
          variant='outlined'
          fullWidth
          value={fullName}
          onChange={handleFullNameChange}
        />
        <input type='hidden' name='screeningId' value={screeningId} />
        <Box display='flex' justifyContent='center'>
          <SubmitButton
            type='submit'
            variant='contained'
            color='primary'
            sx={{ mt: 2, width: '30%' }}
          >
            Boka
          </SubmitButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default BookingForm;
