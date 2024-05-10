
/* export default function MovieInfo( {params}: {
    params: { Id: string}
} ) {
    return(
        <>
        <h1>Film information {params.Id} </h1>
        </>
    );
}
 */
'use client';
import { useEffect, useState } from 'react';
import Movie from '@/app/lib/models';

export default function MovieInfo({ params }: { params: { Id: string } }) {
    const [movie, setMovie] = useState<Movie | null>(null); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`/api/movies/${params.Id}`); 
        const data = await response.json();
        
        setMovie(data); 
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [params.Id]);

  
  if (!movie) {
    return <div>Loading...</div>;
  }
  console.log('här är filmerna:', movie);
  return (
    <>
      <h1>Film information {movie.title}</h1>
      <p>År: {movie.year}</p>
      
    </>
  );
}