import MovieList from './MovieList';
import connectMongo from '@/app/lib/connectMongodb';

export default async function MovieListPage() {
  const testConnect = await connectMongo();
  console.log(testConnect);

  return (
    <div>
      <h2>Filmer</h2>
      <MovieList />
    </div>
  );
}
