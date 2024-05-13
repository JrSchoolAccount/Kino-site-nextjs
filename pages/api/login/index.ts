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
    const email: string = req.body.email;
    const password: string = req.body.password;

    try {
      const user = await User.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          res.status(200).json({ message: 'Passwords match' });
        } else {
          res.status(400).json({ message: 'Passwords do not match' });
        }
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error comparing password:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
