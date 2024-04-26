export type Screenings = {
    id: number;
    start_time: string;
  };
  
export type SpecificScreeningsResponse = {
    data: Screenings[];
  };