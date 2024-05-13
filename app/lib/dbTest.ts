import mongoose from 'mongoose';

export default async function connectDB() {
  if (!process.env.MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    );
  }
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
}
