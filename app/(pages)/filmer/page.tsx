import MovieList from '@/app/ui/filmer/MovieList';
import { Typography } from '@mui/material';

export default function MovieListPage() {
  return (
    <>
      <Typography variant="h4" component="h1" align="center" margin={3}>
        Filmer
      </Typography>
      <MovieList />
    </>
  );
}
