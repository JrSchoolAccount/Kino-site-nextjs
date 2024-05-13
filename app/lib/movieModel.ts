import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  plot: String,
  fullplot: String,
  poster: String,
  imdb: { rating: Number },
  released: Date,
  runtime: Number,
});

const Movie = mongoose.model('Movie', MovieSchema);

export default Movie;
