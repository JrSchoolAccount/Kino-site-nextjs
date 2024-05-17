import Link from 'next/link';
import Movie from '@/app/components/filmer/MovieDetails';

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
      </div>
    </>
  );
}
