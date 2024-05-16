import mongoose, { Document, Schema } from 'mongoose';
import type { Screening } from './definitions';

const screeningSchema: Schema = new mongoose.Schema<Screening>({
  movie: String,
  saloon: String,
  date: String,
});

const ScreeningModel =
  mongoose.models.Screening ||
  mongoose.model('Screening', screeningSchema, 'screenings');

export default ScreeningModel;

