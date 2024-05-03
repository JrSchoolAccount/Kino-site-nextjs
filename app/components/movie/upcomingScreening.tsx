import { getSpecificScreenings } from '../../lib/data';

const UpcomingScreening = () => {
  const specificScreenings = getSpecificScreenings(1).data;
  

  return (
    <div>
      <h1>Enskilda visningar</h1>
      <ul>
        {specificScreenings.map((screening) => (
          <li key={screening.id}>{screening.start_time}</li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingScreening;


