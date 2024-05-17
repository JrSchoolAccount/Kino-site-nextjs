import Link from 'next/link';
import Movie from '@/app/components/filmer/MovieDetails';
import ScreeningsTableSpecificMovie from '@/app/ui/screeningsTableSpecificMovie';

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <>
      <Link href='/filmer'>
        <p>Tillbaka till filmer</p>
      </Link>
      <div>
        <Movie movieId={params.id} />
        <ScreeningsTableSpecificMovie movie_id={params.id} />
      </div>
    </>
  );
}
