import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getMovie } from '../FetchMovies';


export default function Film() {
  const [movie, setMovie] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (typeof id === 'string') {
      getMovie(parseInt(id))
        .then(setMovie)
        .catch(() => router.push('/404'));
    }
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
      <div className='text-center m-20'>
        <Link href='/Filmer'>
          <p className=''>Tillbaka till filmer</p>
        </Link>
        <div></div>
      </div>
  );
}
