
import UpcomingScreening from "./components/movie/upcomingScreening";
import MovieCarousel from "./components/movieCarousel";



export default function Home() {
  return (
      <div>
        <MovieCarousel />
        <UpcomingScreening />
      </div>
  );
}
