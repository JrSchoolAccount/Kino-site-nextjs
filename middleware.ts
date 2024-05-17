import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/app/lib/session';
import { cookies } from 'next/headers';

const protectedRoutes = ['/profil'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  if (path.startsWith('/profil') && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  return NextResponse.next();
}
