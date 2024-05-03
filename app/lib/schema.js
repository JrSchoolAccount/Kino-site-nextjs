import mongoose from 'mongoose';


const movieSchema =  mongoose.Schema({
    fullplot: String,
    imdb: {
        rating: Number
    },
    year: Number,
    plot: String,
    title: String,
    poster: String,
    released: String,
    runtime: Number,
});



const screeningsSchema = mongoose.Schema({
    movie: String,
    saloon: String,
    date: String,
    __v: Number,
})


export default { movieSchema, screeningsSchema}; 