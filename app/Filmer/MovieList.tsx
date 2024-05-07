'use client';
import Link from 'next/link';
import MovieList from './MovieList.server';
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

export function ClientMoviesList() {
  return <MovieList />;
}

//<img src={movie.image.url} width={100} alt={movie.title} />
//href={`/filmer/${movie.title.replace(/\s/g, '_').toLowerCase()}`}
