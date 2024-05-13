import Link from 'next/link';
import fetchMovies from '../../lib/fetchMovies';

export default async function MovieList() {
  const movies = await fetchMovies();

  return (
    <div>
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <Link href={`/filmer/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

//<img src={movie.image.url} width={80} alt={movie.title} />
//href={`/filmer/${movie.title.replace(/\s/g, '_').toLowerCase()}`}
