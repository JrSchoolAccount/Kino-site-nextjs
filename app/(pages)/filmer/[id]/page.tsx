import MovieDetails from '@/app/ui/filmer/MovieDetails';
import Reviews from '@/app/ui/filmer/reviews';
import ScreeningsTableSpecificMovie from '@/app/ui/filmer/screeningsTableSpecificMovie';
import BackButton from '@/app/ui/filmer/BackButton';

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
      <BackButton />
      <MovieDetails movieId={params.id} />
      <ScreeningsTableSpecificMovie movie_id={params.id} />
      <Reviews movieId={movieId} movieTitle={movieId} />
    </>
  );
}
