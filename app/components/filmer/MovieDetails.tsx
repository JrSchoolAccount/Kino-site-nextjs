import Reviews from '@/app/ui/reviews';
import { fetchMovie } from '../../lib/fetchMovies';

export default async function Movie({ movieId }: { movieId: string }) {
  const movie = await fetchMovie(movieId);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }
  console.log('Fetched Movie:', movie?.title, movie?.year);
  return (
    <>
      <h2>{movie?.title}</h2>
      <img src={movie?.poster} width='200'></img>
      <p>{movie?.fullplot.slice(0, 300) + '...'}</p>
      <p>Year: {movie?.year}</p>
      <p>Imdb rating: {movie?.imdb.rating}</p>
      <p>Runtime: {movie?.runtime} min</p>
      <Reviews movieId={movie._id.toString()} movieTitle={movie.title}/>
    </>
  );
}
