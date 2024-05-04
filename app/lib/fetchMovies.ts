const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

// Fetch all movies from CMS API
export async function getMovies() {
  const res = await fetch(API_BASE + '/movies/');
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

// Fetch one movie based of the id from CMS API
export async function getMovie(id: string) {
  const res = await fetch(API_BASE + '/movies/' + id);
  const movie = await res.json();
  //console.log(movie);
  return {
    id: movie.data.id,
    ...movie.data.attributes,
  };
}
