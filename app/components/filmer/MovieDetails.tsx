import Image from 'next/image';
import { fetchMovie } from '../../lib/fetchMovies';
import Image from 'next/image';

export default async function Movie({ movieId }: { movieId: string }) {
  const movie = await fetchMovie(movieId);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }
  console.log('Fetched Movie:', movie?.title, movie?.year);
  return (
    <>
      <h2>{movie?.title}</h2>
      <Image alt="poster" src={movie?.poster} width="200" />
      <p>{movie?.fullplot.slice(0, 300) + '...'}</p>
      <p>Year: {movie?.year}</p>
      <p>Imdb rating: {movie?.imdb.rating}</p>
      <p>Runtime: {movie?.runtime} min</p>
    </>
  );
}
