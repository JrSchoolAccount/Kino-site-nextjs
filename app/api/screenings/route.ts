import connectMongo from '@/app/lib/connectMongodb';
import { ScreeningModel, Movie } from '@/app/lib/models';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  await connectMongo();
  try {
    const date = request.nextUrl.searchParams.get('date');
    const movie_id = request.nextUrl.searchParams.get('movie_id');

    let screenings = [];

    if (movie_id && date) {
      const title = await Movie.findById(movie_id);

      screenings = await ScreeningModel.aggregate([
        {
          $match: {
            movie: title.title,
            date: {
              $gte: date.slice(0, 16),
            },
          },
        },
        { $sort: { date: 1 } },
        {
          $project: {
            movie: 1,
            saloon: 1,
            date: 1,
          },
        },
      ]);
    } else if (date) {
      screenings = await ScreeningModel.aggregate([
        {
          $match: {
            date: {
              $regex: `^${date.slice(0, 10)}`,
              $gte: date.slice(11, 16),
            },
          },
        },
        { $sort: { date: 1 } },
        {
          $lookup: {
            from: 'movies',
            localField: 'movie',
            foreignField: 'title',
            as: 'Without_array',
          },
        },
        {
          $project: {
            movie: 1,
            saloon: 1,
            date: 1,
            runtime: {
              $first: '$Without_array.runtime',
            },
          },
        },
      ]);
    }
    
    return NextResponse.json(screenings);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
