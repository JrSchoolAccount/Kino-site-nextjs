import { useRouter } from 'next/router';
import BookingForm from '@/app/components/BookingForm';

const BookMoviePage: React.FC = () => {
  const router = useRouter();
  const { screeningId, movieTitle, movieTime } = router.query;

  if (!screeningId || !movieTitle || !movieTime) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BookingForm
        movieTitle={movieTitle as string}
        movieTime={new Date(movieTime as string)}
        screeningId={screeningId as string}
      />
    </div>
  );
};

export default BookMoviePage;
