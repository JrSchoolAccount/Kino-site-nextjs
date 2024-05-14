import { NextResponse } from 'next/server';
import connectMongo from '@/app/lib/connectMongodb';
import User from '@/app/lib/models/user';
import { createSession } from '@/app/lib/session';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  await connectMongo();

  try {
    const data = await req.json();

    const email: string = data.email;
    const password: string = data.password;

    const user = await User.findOne({ email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        await createSession(user.id);

        return NextResponse.json(
          { message: 'Password match' },
          { status: 200 },
        );
      } else {
        return NextResponse.json(
          { message: 'Password does not match' },
          { status: 400 },
        );
      }
    } else {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error comparing password:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
