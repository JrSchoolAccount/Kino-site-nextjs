type Screenings = {
  id: number;
  start_time: string;
};

type SpecificScreeningsResponse = {
  data: Screenings[];
};

export function getSpecificScreenings(id: number): SpecificScreeningsResponse {
  const screenings = [
    { id: 1, start_time: '2024-04-20T10:00:00Z' },
    { id: 2, start_time: '2024-05-26T10:00:00Z' },
    { id: 3, start_time: '2024-05-27T10:00:00Z' },
  ];
  const currentTime = new Date().getTime();

  const specificScreenings = screenings.filter((screening) => {
    return new Date(screening.start_time).getTime() >= currentTime;
  });
  return { data: specificScreenings };
}
