'use client';
import Link from 'next/link';
import { getMovies } from '../lib/fetchMovies';
import { MovieDetails } from './[id]/MovieDetails';

interface Movie {
  id: any;
  title: string;
  image: {
    url: string;
  };
}

interface MovieCardProps {
  movie: Movie;
  onMovieClick: (id: any) => void;
}

const MovieCard = ({ movie, onMovieClick }: MovieCardProps) => {
  const handleClick = () => onMovieClick(movie.id);

  return (
    <div onClick={handleClick}>
      <Link href={`/filmer/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;

export async function LoadMovies() {
  const movies = await getMovies();

  const handleMovieClick = (id: any) => {
    console.log('Movie ID:', id);
  };

  return (
    <div>
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <MovieCard movie={movie} onMovieClick={handleMovieClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
// Working version
export async function LoadMovies() {
  const movies = await getMovies();

  return (
    <div>
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <Link href={`/filmer/${movie.id}`}>
              <h3> {movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/

//<img src={movie.image.url} width={100} alt={movie.title} />
//href={`/filmer/${movie.title.replace(/\s/g, '_').toLowerCase()}`}
