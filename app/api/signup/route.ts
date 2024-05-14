import { NextResponse } from 'next/server';
import connectMongo from '@/app/lib/connectMongodb';
import User from '@/app/lib/models/user';
import bcrypt from 'bcrypt';
import { request } from 'http';

export async function POST(req: Request) {
  await connectMongo();

  try {
    const data = await req.json();

    const name: string = data.name;
    const email: string = data.email;
    const password: string = data.password;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    const loginUrl = new URL('/login', req.url);

    return NextResponse.redirect(loginUrl);
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
