import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
          name:{type: String, required:true},
          rating:{type: Number, required:true},
          comment:{type: String, required:true},
});
// connection to Database name:Kino, Collection name:reviews 
const Review = mongoose.models.Review || mongoose.model('reviews', reviewSchema);

export default Review;