import { Providers } from './providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainNavbar from './ui/MainNavbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body>
        <MainNavbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
