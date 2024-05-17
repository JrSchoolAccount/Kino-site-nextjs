import Link from 'next/link';
import Movie from '@/app/components/filmer/MovieDetails';
import Reviews from '@/app/ui/reviews';
import { fetchMovie } from '@/app/lib/fetchMovies';
import ScreeningsTableSpecificMovie from '@/app/ui/screeningsTableSpecificMovie';

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const movieId = params.id;
  const movie = await fetchMovie(movieId);

  return (
    <>
      <Link href='/filmer'>
        <p>Tillbaka till filmer</p>
      </Link>
      <div>
        <Movie movieId={params.id} />
        <ScreeningsTableSpecificMovie movie_id={params.id} />
      </div>
      <Reviews  movieId ={movie._id.toString()} movieTitle={movie.title}/>
    </>
  );
}
