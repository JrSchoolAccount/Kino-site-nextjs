import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ResponsiveAppBar from './ui/navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './lib/theme';
import Footer from './ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Biograf Regna',
  description: 'Kolla på film i Regna',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
