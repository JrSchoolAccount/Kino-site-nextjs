import connectMongo from '@/app/lib/connectMongodb';
import ScreeningModel from '@/app/lib/models';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  await connectMongo();
  try {
    const date = request.nextUrl.searchParams.get('date');

    if (date == null) throw new Error('null date'); // Look at this

    console.log(date);

    const screenings = await ScreeningModel.aggregate([

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

          movie_id: { $toString: { $first: '$Without_array._id' } },

        },
      },
    ]);
    console.log(screenings);
    return NextResponse.json(screenings);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
