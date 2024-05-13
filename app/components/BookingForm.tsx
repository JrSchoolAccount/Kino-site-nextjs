import React, { useState } from 'react';
import { TextField, Typography, Button } from '@mui/material';

interface BookingFormProps {
  movieTitle: string;
  movieTime: Date;
}

const BookingForm: React.FC<BookingFormProps> = ({ movieTitle, movieTime }) => {
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
        body: JSON.stringify({ email, fullName, movieTitle, movieTime }),
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
    <form onSubmit={handleSubmit}>
      <Typography variant='h6' gutterBottom>
        Boka biljetter för {movieTitle}
      </Typography>
      <TextField
        label='Email'
        variant='outlined'
        fullWidth
        value={email}
        onChange={handleEmailChange}
        margin='normal'
      />
      <TextField
        label='Full Name'
        variant='outlined'
        fullWidth
        value={fullName}
        onChange={handleFullNameChange}
        margin='normal'
      />
      <Button type='submit' variant='contained' color='primary'>
        Boka
      </Button>
    </form>
  );
};

export default BookingForm;
