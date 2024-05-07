import { getMovies } from '../lib/fetchMovies';
import { MovieCard } from './MovieList';

export default async function MovieList() {
  const movies = await getMovies();

  return (
    <div>
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <MovieCard movie={movie} onMovieClick={() => {}} />
          </li>
        ))}
      </ul>
      {movies.length == 0 && (
        <div>
          <h2>Inga filmer hittade</h2>
        </div>
      )}
    </div>
  );
}
