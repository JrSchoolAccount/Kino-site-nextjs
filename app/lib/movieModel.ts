import mongoose, { Schema, Model, models } from 'mongoose';

interface IMovie {
  title: string;
  fullplot: string;
  imdb: {
    rating: number;
  };
  year: number;
  plot: string;
  poster: string;
  released: Date;
  runtime: number;
}

const MovieSchema: Schema = new Schema({
  title: { type: String, required: true },
  fullplot: { type: String, required: true },
  imdb: {
    rating: { type: Number, required: true },
  },
  year: { type: Number, required: true },
  plot: { type: String, required: true },
  poster: { type: String, required: true },
  released: { type: Date, required: true },
  runtime: { type: Number, required: true },
});

const Movie: Model<IMovie> =
  mongoose.models.Movie || mongoose.model('Movie', MovieSchema);

export default Movie;
