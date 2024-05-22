import MovieDetails from '@/app/ui/filmer/MovieDetails';
import Reviews from '@/app/ui/filmer/reviews';
import ScreeningsTableSpecificMovie from '@/app/ui/filmer/screeningsTableSpecificMovie';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

export default function Page({ params }: { params: { id: string } }) {
  const movieId = params.id;

  return (
    <>
      <Box margin={2}>
        <Button href={`/filmer`}>{'< Tillbaka till filmer'}</Button>
      </Box>
      <MovieDetails movieId={params.id} />
      <ScreeningsTableSpecificMovie movie_id={params.id} />
      <Reviews movieId={movieId} movieTitle={movieId} />
    </>
  );
}
