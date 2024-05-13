import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../lib/connectMongodb';
import Booking from '../../models/Booking';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  await connectMongo();
  try {
    const { email, fullName, movieTitle, movieTime, screeningId } = req.body;

    if (!email || !fullName || !movieTitle || !movieTime || !screeningId) {
      return res
        .status(400)
        .json({ error: 'Email, full name, title and time required.' });
    }

    const booking = new Booking({
      email,
      fullName,
      movieTitle,
      movieTime: new Date(movieTime),
      screeningId,
    });

    await booking.save();
    res.status(201).json({ message: 'Booking submitted succesfully', booking });
  } catch {
    console.error('Error submitting booking:');
    res.status(500).json({ error: 'Failed to submit booking' });
  }
}
