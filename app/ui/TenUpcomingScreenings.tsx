import {fetchTenUpcomingScreenings} from '../lib/data';
import { Screening } from '../lib/definitions';
import { mockedScreenings } from '../lib/mockedScreenings';
import { FC } from 'react';

const TenUpcomingScreenings: FC = () => {
  // Creates an array that sorts each screening into an object corresponding to the date of the screening, to be used as headline for representing screenings in the DOM
  const tenUpcomingScreenings = fetchTenUpcomingScreenings(mockedScreenings);
  function createSortedScreeningsArray() {
    const dateCategories = new Set<string>();
    
    tenUpcomingScreenings.forEach((screening) => {
      dateCategories.add(screening.start_time.slice(0, 10));
    });

    const sortedScreeningsArray: {screening_date: string, screening_info: Screening[]}[] = [];
    dateCategories.forEach((date) => {
      sortedScreeningsArray.push({ screening_date: date, screening_info: [] });
    });
    tenUpcomingScreenings.forEach((screening) => {
      sortedScreeningsArray.forEach((screeningCategory, index) => {
        if (
          screening.start_time.slice(0, 10) == screeningCategory.screening_date
        ) {
          sortedScreeningsArray[index].screening_info.push(screening);
        }
      });
    });
    // console.log('date categories :', dateCategories);
    // console.log('sorted screenings :', sortedScreeningsArray);
    return sortedScreeningsArray;
  }

  const sortedScreenings = createSortedScreeningsArray();

  return (
    <div>
      <h1>Nästkommande visningar</h1>
      {sortedScreenings.map((screeningDate) => {
        return (
          <>
            <h2>{screeningDate.screening_date}</h2>
            {screeningDate.screening_info.map((screening) => {
              return <p>{screening.title}</p>;
            })}
          </>
        );
      })}
    </div>
  );
}

export default TenUpcomingScreenings;