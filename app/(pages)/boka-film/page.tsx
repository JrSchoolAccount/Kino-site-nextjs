import { useRouter } from 'next/router';
import BookingForm from '@/app/components/BookingForm';

const BookMoviePage: React.FC = () => {
  const router = useRouter();
  const { id, movieTitle, movieTime } = router.query;

  return (
    <div>
      <h1>Book Tickets for {movieTitle}</h1>
      <h2>Time: {movieTime}</h2>
      <BookingForm
        movieTitle={movieTitle as string}
        movieTime={new Date(movieTime as string)}
        screeningId={id as string}
      />
    </div>
  );
};

export default BookMoviePage;
