import mongoose, { Schema } from 'mongoose';
import type { Screening } from '../definitions';

const screeningSchema: Schema = new mongoose.Schema<Screening>({
  movie: String,
  saloon: String,
  date: String,
});

export const ScreeningModel =
  mongoose.models.Screening ||
  mongoose.model('Screening', screeningSchema, 'screenings');
