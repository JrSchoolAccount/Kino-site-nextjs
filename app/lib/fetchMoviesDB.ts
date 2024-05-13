import connectMongo from './connectMongodb';
import Movie from './movieModel';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Anslut till MongoDB
    await connectMongo();

    // Hämta alla filmer från databasen
    const movies = await Movie.find({});

    // Returnera filmerna som svar
    return NextResponse.json({ data: movies });
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch movies' },
      { status: 500 }
    );
  }
}
