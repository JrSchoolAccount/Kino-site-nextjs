import { LoadMovies } from './FetchMovies';

export default function Filmer() {
  return (
    <div className='text-center m-20'>
      <h2 className='my-5 text-2xl'>Filmer</h2>
      <LoadMovies />
    </div>
  );
}
