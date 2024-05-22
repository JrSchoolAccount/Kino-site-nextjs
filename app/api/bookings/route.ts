import { NextResponse } from 'next/server';
import connectMongo from '@/app/lib/connectMongodb';
import Booking from '@/app/models/Booking';

export async function POST(req: Request) {
  await connectMongo();

  try {
    const data = await req.json();

    const { email, fullName, movieTitle, movieTime, screeningId } = data;

    if (!email || !fullName || !movieTitle || !movieTime || !screeningId) {
      return NextResponse.json(
        { message: 'Email, Full Name, Title and time required' },
        { status: 400 },
      );
    }

    const booking = new Booking({
      email,
      fullName,
      movieTitle,
      movieTime,
      screeningId,
    });

    await booking.save();

    return NextResponse.json({ message: 'Booking created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Booking failed' }, { status: 500 });
  }
}
