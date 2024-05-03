import {
    SpecificScreeningsResponse,
} from './definitions'
import mongoose from 'mongoose';
import movieSchema from './schema';
import screeningsSchema from './schema';

const URL: string = process.env.DB_URL ?? '';

mongoose.connect(URL).catch((error) => {
  throw new Error(error)}); 

export function getSpecificScreenings(id: number): SpecificScreeningsResponse {
    const screenings = [
      { id: 1, start_time: '2024-04-20T10:00:00Z' },
      { id: 2, start_time: '2024-05-26T10:00:00Z' },
      { id: 3, start_time: '2024-05-27T10:00:00Z' },
    ];
    
    const currentTime = new Date().getTime();
    const specificScreenings = screenings.filter((screening) => {
      return new Date(screening.start_time).getTime() >= currentTime;
    });
    return { data: specificScreenings };
  }

  export default async function fetchMovies() {
    try {
      
      const movies = await movieSchema.find();
      console.log('Movies', movies);
      return movies; 
      
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error; 
    }
  }

