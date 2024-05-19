'use client';
import Link from 'next/link';
import MovieDetails from '@/app/components/filmer/MovieDetails';
import Reviews from '@/app/ui/reviews';
import ScreeningsTableSpecificMovie from '@/app/ui/screeningsTableSpecificMovie';
import { Button } from '@mui/material';

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const movieId = params.id;

  return (
    <>
      <Button href={`/filmer`}>Tillbaka till filmer</Button>

      <MovieDetails movieId={params.id} />
      <ScreeningsTableSpecificMovie movie_id={params.id} />
      <Reviews movieId={movieId} movieTitle={movieId} />
    </>
  );
}
