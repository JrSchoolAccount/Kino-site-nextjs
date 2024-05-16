import { Movie } from './models';
import connectMongo from './connectMongodb';

//Fetch all movies from the database
export async function fetchAllMovies() {
  try {
    await connectMongo();
    const movies = await Movie.find({});
    return movies;
  } catch {
    throw new Error('Failed to fetch current movies.');
  }
}
//Fetch a specific movie from the database
export async function fetchMovie(id: string) {
  try {
    await connectMongo();
    const movie = Movie.findById(id);
    return movie;
  } catch (error) {
    throw new Error('Failed to fetch movie with id.');
  }
}
