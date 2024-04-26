
import { getSpecificScreenings } from '../lib/utils';



const TestComponent = () => {
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

export default TestComponent;
