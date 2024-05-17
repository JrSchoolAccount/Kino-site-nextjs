import mongoose, { Document, Schema, Model } from 'mongoose';
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

// ----------moved from Model/rerview.ts----------
// Define an interface that matches the schema of Review model and prevents errors
// import Review from "@/Model/review" in pages/api/data.ts
interface IReview extends Document{
  movieId: string;  
  movieTitle: string; 
  name: string;
  rating: number;
  comment: string;
}

const reviewSchema = new mongoose.Schema<IReview>({
  movieTitle: { type: String, required: true }, 
  movieId: { type: String, required: true }, 
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});
// connection to Database name:kinoDB, Collection name:reviews
let Review: Model<IReview>;
if (mongoose.models.Review) {
  // If the model already exists, use it directly.
  // This prevents Mongoose from throwing an error when trying to overwrite an already compiled model.
  Review = mongoose.model<IReview>('Review');
} else {
  // If the 'Review' model does not exist, create it using the schema.
  // This is done only once to avoid duplication and errors on hot reloads or multiple compilations.
  Review = mongoose.model<IReview>('Review', reviewSchema, 'reviews');
}

export { Movie, ScreeningModel, Review };
