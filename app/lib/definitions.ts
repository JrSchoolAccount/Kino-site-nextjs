export type Screenings = {
  id: number;
  start_time: string;
};

export type SpecificScreeningsResponse = {
  data: Screenings[];
};

export type Movie = {
  fullplot: string;
  imdb: {
    rating: number;
  };
  year: number;
  plot: string;
  title: string;
  poster: string;
  released: Date;
  runtime: number;
};
