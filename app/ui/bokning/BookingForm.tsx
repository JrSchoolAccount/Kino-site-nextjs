'use client';

import React, { useState } from 'react';
import { TextField, Typography, Button, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/navigation';
import BookingModal from './BookingModal';
import Image from 'next/image';

interface BookingFormProps {
  movieTitle: string;
  movieTime: Date;
  screeningId: string;
  poster: string;
  saloon: string;
}

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const BookingForm: React.FC<BookingFormProps> = ({
  movieTitle,
  movieTime,
  screeningId,
  poster,
  saloon,
}) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedTime = () => {
    const localMovieTime = new Date(movieTime);
    const dayOfMonth = localMovieTime.getUTCDate().toString().padStart(2, '0');
    const month = (localMovieTime.getUTCMonth() + 1)
      .toString()
      .padStart(2, '0');
    const hours = localMovieTime.getUTCHours().toString().padStart(2, '0');
    const minutes = localMovieTime.getUTCMinutes().toString().padStart(2, '0');

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
      alert('Skriv in en giltig e-postadress');
      return;
    }

    if (!isValidFullName(fullName)) {
      alert('Skriv in ditt fullständiga namn (två ord)');
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
      component="form"
      onSubmit={handleSubmit}
      height={''}
      sx={{
        mt: 15,
        maxWidth: 500,
        mx: 'auto',
        mb: 30,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Boka biljetter för: {movieTitle}
      </Typography>
      <Typography variant="h6">Salong: {saloon}</Typography>
      <Typography variant="h6" marginBottom={4}>
        Datum och tid: {formattedTime()}
      </Typography>

      <Box
        sx={{
          width: '100%',
          height: 0,
          paddingBottom: '75%',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          mb: 5,
        }}
      >
        <Image
          src={poster}
          alt={movieTitle}
          width={100}
          height={100}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      <Stack spacing={2}>
        <TextField
          label="E-post"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          sx={{ mt: 50 }}
        />
        <TextField
          label="För- och efternamn"
          variant="outlined"
          fullWidth
          value={fullName}
          onChange={handleFullNameChange}
        />
        <input type="hidden" name="screeningId" value={screeningId} />
        <Box display="flex" justifyContent="center">
          <SubmitButton
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: '30%' }}
          >
            Boka
          </SubmitButton>

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, ml: 2, width: '30%' }}
            onClick={() => router.push('/')}
          >
            Avbryt
          </Button>
        </Box>
      </Stack>
      <BookingModal open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default BookingForm;
