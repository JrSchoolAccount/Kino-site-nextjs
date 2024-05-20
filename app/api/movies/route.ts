import connectMongo from '@/app/lib/connectMongodb';
import { Movie } from '@/app/lib/models';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  await connectMongo();
  const id = request.nextUrl.searchParams.get('_id');
  try {
    if (id) {
      const movie = await Movie.findById(id);
      if (!movie) {
        return NextResponse.json({ error: 'Movie not found.' });
      }
      return NextResponse.json({ movie });
    } else {
      const allMovies = await Movie.find();
      return NextResponse.json({ movies: allMovies });
    }
  } catch (err: any) {
    console.error('Error:', err.message);
    return NextResponse.json({ error: err.message });
  }
}
