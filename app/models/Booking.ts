import mongoose, { Schema, Document, mongo } from 'mongoose';

export interface BookingDocument extends Document {
  email: string;
  fullName: string;
  movieTitle: string;
  movieTime: Date;
}

const bookingSchema: Schema = new Schema({
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  movieTitle: { type: String, required: true },
  movieTime: { type: Date, required: true },
});

const Booking =
  mongoose.models.Booking ||
  mongoose.model<BookingDocument>('Booking', bookingSchema);

export default Booking;
