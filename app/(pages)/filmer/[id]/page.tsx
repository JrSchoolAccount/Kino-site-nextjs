'use client';
import Link from 'next/link';
import MovieDetails from '@/app/components/filmer/MovieDetails';
import Reviews from '@/app/ui/reviews';
import ScreeningsTableSpecificMovie from '@/app/ui/screeningsTableSpecificMovie';

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const movieId = params.id;
 

  return (
    <>
      <Link href='/filmer'>
        <p>Tillbaka till filmer</p>
      </Link>
      <div>
        <MovieDetails movieId={params.id} />
        <ScreeningsTableSpecificMovie movie_id={params.id} />
      </div>
      <Reviews  movieId ={movieId} movieTitle={movieId}/>
    </>
  );
}
