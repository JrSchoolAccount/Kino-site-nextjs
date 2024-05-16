'use client';

import BookingForm from '@/app/components/BookingForm';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const BookMoviePage: React.FC = () => {
  const searchParams = useSearchParams();
  const screeningId = searchParams.get('screeningId');
  const movieTitle = searchParams.get('movieTitle');
  const movieTime = searchParams.get('movieTime');

  if (!screeningId || !movieTitle || !movieTime) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BookingForm
        movieTitle={movieTitle}
        movieTime={new Date(movieTime)}
        screeningId={screeningId}
      />
    </div>
  ) as React.ReactElement;
};

export default BookMoviePage;
