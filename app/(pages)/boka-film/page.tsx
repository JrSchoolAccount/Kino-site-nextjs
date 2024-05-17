'use client';

import BookingForm from '@/app/components/BookingForm';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import React from 'react';

const BookMoviePage: React.FC = () => {
  const searchParams = useSearchParams();
  const screeningId = searchParams.get('screeningId');
  const movieTitle = searchParams.get('movieTitle');
  const movieTime = searchParams.get('movieTime');
  const poster = searchParams.get('poster');
  const saloon = searchParams.get('saloon');

  if (!screeningId || !movieTitle || !movieTime) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Suspense>
        <BookingForm
          movieTitle={movieTitle}
          movieTime={new Date(movieTime)}
          screeningId={screeningId}
          poster={poster ?? ''}
          saloon={saloon ?? ''}
        />
      </Suspense>
    </div>
  ) as React.ReactElement;
};

export default BookMoviePage;
