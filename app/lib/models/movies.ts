import mongoose, { Schema } from 'mongoose';
import type { Movie } from '../definitions';

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

export const MovieModel =
  mongoose.models.Movie || mongoose.model('Movie', movieSchema, 'movies');
