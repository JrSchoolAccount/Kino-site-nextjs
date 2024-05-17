export type SessionPayload = {
  userId: string;
  expiresAt: Date;
  email: string;
};
export type Screenings = {
  id: number;
  start_time: string;
};

export type SpecificScreeningsResponse = {
  data: Screenings[];
};

export type Movie = {
  id: string;
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

export type carouselSettings = {
  dots: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  infinite: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
};

//This type is based on the info in our database, at some point we should fix so we don't have both Screenings and Screening as types if it doesn't fill a purpose
export type Screening = {
  movie: string;
  saloon: string;
  date: string;
  runtime?: string;
  movie_id?: string;
};
