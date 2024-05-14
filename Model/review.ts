import mongoose, { Model } from 'mongoose';

// Define an interface that matches the schema of Review model and prevents errors
// import Review from "@/Model/review" in pages/api/data.ts
interface IReview {
  name: string;
  rating: number;
  comment: string;
}

const reviewSchema = new mongoose.Schema<IReview>({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});
// connection to Database name:kinoDB, Collection name:reviews
let Review: Model<IReview>;
if (mongoose.models.Review) {
  // If the model already exists, use it directly.
  // This prevents Mongoose from throwing an error when trying to overwrite an already compiled model.
  Review = mongoose.model<IReview>('Review');
} else {
  // If the 'Review' model does not exist, create it using the schema.
  // This is done only once to avoid duplication and errors on hot reloads or multiple compilations.

  Review = mongoose.model<IReview>('Review', reviewSchema, 'reviews');
}
export default Review;
