import mongoose, { Document, Schema } from 'mongoose';
export interface IScreening extends Document {
  movie: string;
  saloon: string;
  date: string;
}

const screeningSchema: Schema = new mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },
  saloon: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Screening = mongoose.models.Screening || mongoose.model<IScreening>('screening', screeningSchema);

export default Screening;
