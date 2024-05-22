export async function fetchMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/movies`);
  const movies = await res.json();
  return movies;
}

export async function fetchMovieById(movieId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/movies?_id=${movieId}`,
  );
  const movie = await res.json();
  return movie;
}
