import { Movie } from '@/app/lib/definitions';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    return <h3>Failed to find movie details</h3>;
  }

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
