import Link from 'next/link';

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

async function getMovies() {
  const res = await fetch(API_BASE + '/movies');
  const payload = await res.json();
  const modifiedArr = payload.data.map((obj: any) => {
    return {
      id: obj.id,
      ...obj.attributes,
    };
  });
  return modifiedArr;
}

export default async function MovieList() {
  const movies = await getMovies();

  return (
    <div>
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <Link href={`/filmer/${movie.id}`}>
              <p className='text-base hover:text-blue-500'>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
