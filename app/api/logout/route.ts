import { deleteSession } from '@/app/lib/session';
import { Message } from '@mui/icons-material';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    deleteSession();

    const url = new URL('/', req.url);

    return NextResponse.redirect(url);
  } catch (error) {
    console.log('Failed to delete session');
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 },
    );
  }
}
