import 'server-only';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { SessionPayload } from '@/app/lib/definitions';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string, email: string) {
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt, email });

  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('15min')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
  if (!session) {
    return null;
  }
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to verify session:', error.message);
    } else {
      console.error('Failed to verify session:', error);
    }
    return null;
  }
}

export async function updateSession() {
  const session = cookies().get('session')?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 15 * 60 * 1000);
  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/',
  });
}

export function deleteSession() {
  cookies().delete('session');
}

export async function getEmailFromSession() {
  const session = cookies().get('session')?.value;
  const payload = await decrypt(session);

  if (payload && 'email' in payload) {
    return payload.email;
  } else {
    return null;
  }
}
