import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import connectMongo from '@/app/lib/connectMongodb'
import UserModel from '@/app/lib/models/user'
import type { User } from '@/app/lib/models/user'
import bcrypt from 'bcrypt';
 
async function getUser(email: string): Promise<User | undefined> {
    
    await connectMongo();

    try {
    const user = await UserModel.findOne({ email });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(password, user.password);
   
            if (passwordsMatch) return user;
          }
   
          return null;
      },
    }),
  ],
});