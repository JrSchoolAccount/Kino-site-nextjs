// Fetch movies from CMS API

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export interface Movie {
  id: string;
  title: string;
}

export async function fetchMovies() {
  const res = await fetch(API_BASE + '/movies');
  const data = await res.json();

  return data.map((movie: { id: any; attributes: { title: any } }) => ({
    id: movie.id,
    title: movie.attributes.title,
  }));
}

/*
export async function loadMovie(id: number): Promise<Movie> {
  try {
    const res = await fetch(API_BASE + '/movies/' + id);

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Movie not found');
      } else {
        throw new Error('Failed to fetch movie');
      }
    }

    const payload = await res.json();

    if (!payload.data) {
      throw new Error('Movie not found');
    }
    return {
      id: payload.data.id,
      ...payload.data.attributes,
    };
  } catch (error) {
    throw new Error('Failed to load movie');
  }
}
*/
