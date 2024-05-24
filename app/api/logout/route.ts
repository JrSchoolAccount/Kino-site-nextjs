import { deleteSession } from '@/app/lib/session';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    deleteSession();

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error('Failed to delete session:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
