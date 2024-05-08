import mongoose, { Document, Schema } from 'mongoose';
export type Screening = {
  movie: string;
  saloon: string;
  date: string;
};

const screeningSchema: Schema = new mongoose.Schema<Screening>({
  movie: String,
  saloon: String,
  date: String,
});

const Screening =
  mongoose.models.Screening ||
  mongoose.model('screening', screeningSchema, 'screenings');

export default Screening;
