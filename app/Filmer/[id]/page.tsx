import Link from 'next/link';
import { MovieDetails } from './MovieDetails';

export default async function MoviePage({
  params,
}: {
  params: { id: number };
}) {
  const movie = await MovieDetails(params.id);

  return (
    <>
      <Link href='/filmer'>
        <p className=''>Tillbaka till filmer</p>
      </Link>
      <div>
        <h2>{movie}</h2>
      </div>
    </>
  );
}
