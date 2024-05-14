import { z } from 'zod';

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(5, { message: 'Namn, måste innehålla för- & efternamn.' })
    .regex(/^[a-zA-Z]+\s[a-zA-Z]+$/, {
      message: 'Namn, måste innehålla för- & efternamn.',
    })
    .trim(),
  email: z
    .string()
    .email({ message: 'Var vänlig använd giltig epost.' })
    .trim(),
  password: z
    .string()
    .min(6, { message: 'Minst 6 tecken långt.' })
    .regex(/[a-zA-Z]/, { message: 'Måste innehålla minst en bokstav.' })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const SigninFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long.' }),
});

export type SessionPayload = {
  userId: string;
  email: string;
  expires: Date;
  role: 'admin' | 'user';
};
