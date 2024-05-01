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

export async function LoadMovies() {
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

export async function getMovie(id: number) {
  const res = await fetch(API_BASE + '/movies/' + id);
  const payload = await res.json();
  if (!payload.data) {
    throw new Error('Movie not found');
  }

  return {
    id: payload.data.id,
    ...payload.data.attributes,
  };
}

interface Movie {
  id: number;
  title: string;
  intro: string;
  image: {
    url: string;
  };
}
interface Props {
  id: number;
}

export async function LoadMovie({ id }: Props): Promise<React.ReactNode> {
  const movie = await getMovie(id);

  const { title, intro, image } = movie.attributes;

  return (
    <div>
      <h1>{title}</h1>
      <p>{intro}</p>
      <img src={image.url} />
    </div>
  );
}
