import mongoose, { Schema, Document } from 'mongoose';

interface Booking extends Document {
  email: string;
  fullName: string;
  movieTitle: string;
  movieTime: Date;
  screeningId: mongoose.Types.ObjectId;
}

const bookingSchema: Schema<Booking> = new mongoose.Schema({
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  movieTitle: { type: String, required: true },
  movieTime: { type: Date, required: true },
  screeningId: {
    type: Schema.Types.ObjectId,
    ref: 'Screening',
    required: true,
  },
});

const BookingModel =
  mongoose.models.Booking ||
  mongoose.model<Booking & Document>('Booking', bookingSchema, 'bookings');

export default BookingModel;
