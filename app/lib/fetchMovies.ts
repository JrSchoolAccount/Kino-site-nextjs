const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

// Fetch all movies
export default async function fetchMovies() {
  const res = await fetch(API_BASE + '/movies/', {
    next: {
      revalidate: 30,
    },
  });
  const payload = await res.json();
  const movieList = payload.data.map((obj: any) => {
    return {
      id: obj.id,
      ...obj.attributes,
    };
  });
  //console.log(movieList);
  return movieList;
}

// Fetch a specific movie
export async function fetchMovie(id: number) {
  const res = await fetch(API_BASE + '/movies/' + id);
  const movie = await res.json();
  //console.log(movie);
  return {
    id: movie.data.id,
    ...movie.data.attributes,
  };
}
