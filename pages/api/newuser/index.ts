import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '@/app/lib/connectMongodb'
import User from '@/app/lib/models/user'
import bcrypt from 'bcrypt'
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  
  await connectMongo();

  if (req.method === 'POST') {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    })

    try {
      await newUser.save();

      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {

      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
  
}