'use client';

import ScreeningsTableStartpage from './ui/screeningsTableStartpage';
import MovieCarousel from './components/movieCarousel';

export default function Home() {
  return (
    <div>
      <ScreeningsTableStartpage />
      <MovieCarousel />
    </div>
  );
}
