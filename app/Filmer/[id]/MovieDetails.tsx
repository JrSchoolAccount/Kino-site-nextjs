import { getMovie } from '@/app/lib/fetchMovies';

export async function MovieDetails(id: any) {
  const movie = await getMovie(id);

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image.url} width={300} alt={movie.title} />
      <p>{movie.intro}</p>
    </div>
  );
}
