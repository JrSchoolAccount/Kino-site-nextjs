import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Movie } from '@/app/lib/definitions';

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
      <div>
        <ul>
          {movies &&
            movies.map((movie: any) => (
              <li key={movie._id}>
                <Link href={`/filmer/${movie._id}`}>
                  <h3>{movie.title}</h3>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
