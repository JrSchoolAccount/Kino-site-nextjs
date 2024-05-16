'use client';

import React, { useState } from 'react';
import { TextField, Typography, Button, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BookingModal from './modals/BookingModal';

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
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedTime = () => {
    const dayOfMonth = movieTime.getDate().toString().padStart(2, '0');
    const month = (movieTime.getMonth() + 1).toString().padStart(2, '');
    const hours = movieTime.getHours().toString().padStart(2, '0');
    const minutes = movieTime.getMinutes().toString().padStart(2, '0');
    return `${dayOfMonth}/${month} ${hours}:${minutes}`;
  };

  const isValidEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isValidFullName = (fullName: string) => {
    const parts = fullName.split(' ');
    return parts.length >= 2;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!isValidFullName(fullName)) {
      alert('Please enter your full name');
      return;
    }

    try {
      const response = await fetch('/api/bookings', {
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
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error submitting booking:');
      alert('Failed to submit booking. Please try again.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push('/');
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      height={'60vh'}
      sx={{ mt: 30, maxWidth: 500, mx: 'auto' }}
    >
      <Typography variant='h6' gutterBottom>
        Boka biljetter för: {movieTitle}
      </Typography>
      <Typography marginBottom={4}>Datum: {formattedTime()}</Typography>
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

          <Button
            variant='contained'
            color='secondary'
            sx={{ mt: 2, ml: 2, width: '30%' }}
            onClick={() => router.push('/')}
          >
            Cancel
          </Button>
        </Box>
      </Stack>
      <BookingModal open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default BookingForm;
