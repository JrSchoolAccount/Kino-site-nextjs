import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@/app/lib/connectMongodb';
import User from '@/app/lib/models/user';
import bcrypt from 'bcrypt';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  await connectMongo();

  if (req.method === 'POST') {
    const name: string = req.body.name;
    const email: string = req.body.email;
    const password: string = req.body.password;

    try {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        name,
        email,
        password: hashPassword,
      });

      await newUser.save();

      res.redirect(307, '/login');
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
