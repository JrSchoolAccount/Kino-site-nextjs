'use client';
import ScreeningsTableStartpage from '@/app/ui/screeningsTableStartpage';
import MovieCarousel from '@/app/ui/movieCarousel';

export default function Home() {
  return (
    <div>
      <ScreeningsTableStartpage />
      <MovieCarousel />
    </div>
  );
}
