'use client';
import { Movie } from '@/app/lib/definitions';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, Typography, Box, typographyClasses } from '@mui/material';

export default function MovieDetails({ movieId }: { movieId: string }) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (movieId) {
        const res = await fetch(`/api/movies?_id=${movieId}`);
        const data = await res.json();
        setMovie(data.movie);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return (
      <>
        <Typography variant="h4" align="center" margin={4}>
          Laddar...
        </Typography>
      </>
    );
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
            src={movie?.poster}
            alt="poster"
            layout="intrinsic"
            width={600}
            height={1200}
          />
          <Typography variant="subtitle2" margin={1}>
            {movie?.fullplot}
          </Typography>
          <Box alignSelf={'start'}>
            <Typography variant="subtitle1" fontWeight="bold" margin={1}>
              <p>År: {movie?.year}</p>
              <p>Imdb-Betyg: {movie?.imdb.rating}</p>
              <p>
                Speltid: {movie?.runtime} min (
                {(movie?.runtime / 60).toFixed(1)} h)
              </p>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
