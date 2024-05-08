import mongoose, { Document, Schema } from 'mongoose';
import type { Screening } from './definitions';

const screeningSchema: Schema = new mongoose.Schema<Screening>({
  movie: String,
  saloon: String,
  date: String,
});

const Screening =
  mongoose.models.Screening ||
  mongoose.model('screening', screeningSchema, 'screenings');

export default Screening;

