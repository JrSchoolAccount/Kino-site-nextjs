import connectMongo from '@/app/lib/connectMongodb';
import { MovieModel } from '@/app/lib/models/movies';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  await connectMongo();
  const id = request.nextUrl.searchParams.get('_id');
  try {
    if (id) {
      const movie = await MovieModel.findById(id);
      if (!movie) {
        return NextResponse.json({ error: 'Movie not found.' });
      }
      return NextResponse.json({ movie });
    } else {
      const allMovies = await MovieModel.find();
      return NextResponse.json({ movies: allMovies });
    }
  } catch (err: any) {
    console.error('Error:', err.message);
    return NextResponse.json({ error: err.message });
  }
}
