'use client';
import Link from 'next/link';
import MovieDetails from '@/app/components/filmer/MovieDetails';

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
        <MovieDetails movieId={params.id} />
      </div>
    </>
  );
}
