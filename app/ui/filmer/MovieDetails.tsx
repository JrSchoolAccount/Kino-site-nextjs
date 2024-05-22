'use client';
import { Movie } from '@/app/lib/definitions';
import { useState } from 'react';
import Image from 'next/image';
import { Container, Typography, Box } from '@mui/material';
import { fetchMovieById } from '@/app/lib/fetchMovies';

export default function MovieDetails({ movieId }: { movieId: string }) {
  const [movie, setMovie] = useState<Movie | null>(null);

  if (movie === null) {
    (async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data.movie);
      } catch (error) {
        console.error(error);
      }
    })();
  }

  return (
    <>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth={600}
          padding={2}
        >
          <Typography variant="h4" component="h2" align="center" margin={3}>
            {movie?.title}
          </Typography>
          <Image
            src={movie?.poster ?? ''}
            alt="poster"
            width={800}
            height={1200}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <Typography variant="subtitle2" margin={1}>
            {movie?.fullplot}
          </Typography>
          <Box alignSelf={'start'}>
            <Typography variant="subtitle1" fontWeight="bold" margin={1}>
              <p>År: {movie?.year}</p>
              <p>Imdb-Betyg: {movie?.imdb.rating}</p>
              <p>Speltid: {movie?.runtime ?? 0}</p>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
