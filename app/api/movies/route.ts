import connectMongo from '@/app/lib/connectMongodb';
import Movie from '@/app/lib/models';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  await connectMongo();
  try {
    const allMovies = await Movie.find();
    console.log('All movies:', allMovies);

    return NextResponse.json({ movies: allMovies });
  } catch (err: any) {
    console.error('Error:', err.message);
    return NextResponse.json({ error: err.message });
  }
}
