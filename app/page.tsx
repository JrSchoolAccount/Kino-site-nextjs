'use client';
import ScreeningsTableStartpage from '@/app/ui/landing/screeningsTableStartpage';
import MovieCarousel from '@/app/ui/landing/movieCarousel';

export default function Home() {
  return (
    <div>
      <ScreeningsTableStartpage />
      <MovieCarousel />
    </div>
  );
}
