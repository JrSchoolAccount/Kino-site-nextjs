export async function fetchMovies() {
  const res = await fetch('/api/movies');
  const data = await res.json();
  console.log(data);
  return data;
}

export async function fetchMovieById(movieId: string) {
  const res = await fetch(`/api/movies?_id=${movieId}`);
  const data = await res.json();
  return data.movie;
}
