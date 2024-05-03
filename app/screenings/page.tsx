import { useEffect, useState } from 'react';

export default async function Page() {
  const fetchScreenings = async () => {
    const res = await fetch('http://localhost:3000/api/screenings');
    const screenings = await res.json();
    return screenings;
  };

/*   const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    fetchScreenings().then((screenings) => {
      setScreenings(screenings);
    });
  }, []);
 */

  const screenings = await fetchScreenings();

  return (
    <div>
      <h1>Screenings</h1>
      {screenings.map((screening: any) => (
        <div key={screening._id}>
          <h2>{screening.movie}</h2>
          <p>{screening.saloon}</p>
          <p>{screening.date}</p>
        </div>
      ))}
      <h1>Hi and mjau</h1>
    </div>
  );
}
