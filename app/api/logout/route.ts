import { deleteSession } from '@/app/lib/session';
import { Message } from '@mui/icons-material';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    deleteSession();

    return NextResponse.redirect(new URL('/', req.url));
  } catch (error) {
    console.log('Failed to delete session');
    return NextResponse.json(
      { Message: 'internal server error' },
      { status: 500 },
    );
  }
}
