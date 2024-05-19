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
          Failed to load movie...
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
          alignItems="flex-start"
          maxWidth={400}
        >
          <Typography variant="h4" component="h2" align="center" margin={3}>
            {movie?.title}
          </Typography>
          <Image
            alt="poster"
            src={movie?.poster}
            max-height={800}
            width={400}
            height={600}
          />
          <Typography variant="subtitle2" margin={1}>
            {movie?.plot.slice(0, 200) + '...'}
          </Typography>
          <Box>
            <Typography variant="subtitle1" margin={1}>
              <p>År: {movie?.year}</p>
              <p>Imdb Betyg: {movie?.imdb.rating}</p>
              <p>Speltid: {movie?.runtime} minuter</p>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
