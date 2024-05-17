import { fetchAllMovies } from '../../lib/fetchMovies';
import Link from 'next/link';

export default async function MovieList() {
  const movies = await fetchAllMovies();
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
