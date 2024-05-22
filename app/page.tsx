'use client';
import ScreeningsTableStartpage from './ui/landing/screeningsTableStartpage';
import MovieCarousel from './ui/landing/movieCarousel';

export default function Home() {
  return (
    <div>
      <ScreeningsTableStartpage />
      <MovieCarousel />
    </div>
  );
}
