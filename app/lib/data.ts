import { SpecificScreeningsResponse } from './definitions';
import connectMongo from './connectMongodb';
import Screening from './models';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

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

export async function fetchUpcomingScreeningsOnStartpage(date: String) {
  await connectMongo();
  try {
    const screenings = await Screening.find({
      date: { $regex: `^${date}` },
    });
    return screenings;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch screenings.');
  }
}
