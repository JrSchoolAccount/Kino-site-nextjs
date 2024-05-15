import { NextRequest, NextResponse } from 'next/server';
import {Review} from '@/app/lib/models';
import connectMongo from '@/app/lib/connectMongodb';
export async function POST(req: NextRequest, res:NextResponse) {
  console.log('API Endpoint Hit');
  
  await connectMongo();
  console.log('api/reviews/route.ts: MongoDB connected');
  try {
    const body = await req.json();    
    const { name, rating, comment } = body;
    const numericRating = parseInt(rating, 10);
    // console.log('Received data:', body);

    if (!name || typeof name !== 'string' || isNaN(numericRating) || !comment || typeof comment !== 'string') {
      return new NextResponse(JSON.stringify({ message: 'Invalid input' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
     }

    const newReview = new Review({
      name: name,
      rating: numericRating,
      comment: comment,
    });
    await newReview.save();
    console.log('User created:', newReview);

    const headers = new Headers();
    headers.append('Location', '/sendReview');
    return new NextResponse('Redirecting to /sendReview...', { status: 302, headers: headers });
  } catch (error) {
    console.error('Error creating user:', error);
    return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

