import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Movie } from '@/app/lib/definitions';
import { ListItem } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch('/api/movies');
      const data = await res.json();
      setMovies(data.movies);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Container>
        <Grid
          container
          spacing={8}
          justifyContent={'center'}
          alignContent={'center'}
        >
          {movies &&
            movies.map((movie: any) => (
              <Grid
                item
                xs={14}
                sm={6}
                md={4}
                lg={3}
                key={movie._id}
                justifyContent="center"
              >
                <ListItem>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignContent="center"
                  >
                    <Link
                      href={`/filmer/${movie._id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Image
                        src={movie.poster}
                        alt={movie.title}
                        height={650}
                        width={400}
                        layout="intrinsic"
                      />
                      <Typography
                        textAlign="center"
                        variant="h5"
                        color="white"
                        margin={1}
                      >
                        {movie.title}
                      </Typography>
                    </Link>
                  </Box>
                </ListItem>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}
