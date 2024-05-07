import Link from 'next/link';
import { getMovies } from '../lib/fetchMovies';

/*
interface Movie {
  id: number;
  title: string;
  image: {
    url: string;
  };
}

interface MovieCardProps {
  movie: Movie;
  onMovieClick: (id: number) => void;
}

export const MovieCard = ({ movie, onMovieClick }: MovieCardProps) => {
  const handleClick = () => onMovieClick(movie.id);

  return (
    <div onClick={handleClick}>
      <Link href={`/filmer/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};
*/

export default async function MovieList() {
  const movies = await getMovies();

  return (
    <div>
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <Link href={`/filmer/${movie.id}`}>
              <h3>{movie.title}</h3>
              <img src={movie.image.url} width={80} alt={movie.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

//
//href={`/filmer/${movie.title.replace(/\s/g, '_').toLowerCase()}`}
