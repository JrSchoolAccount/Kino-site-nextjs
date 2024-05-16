import mongoose, { Document, Schema } from 'mongoose';
import type { Movie, Screening } from './definitions';

const movieSchema: Schema = new mongoose.Schema<Movie>({
  fullplot: String,
  imdb: {
    rating: Number,
  },
  year: Number,
  plot: String,
  title: String,
  poster: String,
  released: Date,
  runtime: Number,
});

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema, 'movies');

const screeningSchema: Schema = new mongoose.Schema<Screening>({
  movie: String,
  saloon: String,
  date: String,
});

const ScreeningModel =
  mongoose.models.Screening ||
  mongoose.model('Screening', screeningSchema, 'screenings');

export default ScreeningModel;

export { Movie, Screening };
