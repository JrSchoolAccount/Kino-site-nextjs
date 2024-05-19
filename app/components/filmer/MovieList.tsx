import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Movie } from '@/app/lib/definitions';
import { List, ListItem, ListItemText, Button } from '@mui/material';
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
        <Grid container spacing={10}>
          {movies &&
            movies.map((movie: any) => (
              <Grid item xs={12} sm={6} md={3} lg={2} key={movie._id}>
                <ListItem>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Link href={`/filmer/${movie._id}`}>
                      <Image
                        src={movie.poster}
                        alt={movie.title}
                        height={250}
                        width={180}
                      />
                      <Button size="medium">
                        <Typography align="center">
                          <ListItemText primary={movie.title} />
                        </Typography>
                      </Button>
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
