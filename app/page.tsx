'use client';

import ScreeningsTableStartpage from './components/screeningsTableStartpage';
import MovieCarousel from './components/movieCarousel';

export default function Home() {
  return (
    <div>
      <ScreeningsTableStartpage />
      <MovieCarousel />
    </div>
  );
}
