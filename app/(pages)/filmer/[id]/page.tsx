import Link from 'next/link';
import { fetchMovie } from '../../../lib/fetchMovies';

export default async function MovieDetails({ params }: any) {
  const id: number = params.id;
  const movie = await fetchMovie(params.id);
  return (
    <>
      <Link href='/filmer'>
        <p>Tillbaka till filmer</p>
      </Link>
      <h2>Film ID: {id}</h2>
      <h2>{movie.title}</h2>
      <img src={movie.image.url} width={200} alt={movie.title} />
      <p>{movie.intro.slice(0, 60)}...</p>
    </>
  );
}
