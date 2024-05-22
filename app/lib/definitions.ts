export type SessionPayload = {
  userId: string;
  expiresAt: Date;
  email: string;
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

export type Screening = {
  movie: string;
  saloon: string;
  date: string;
  runtime?: string;
  id?: string;
};

export interface IReview extends Document {
  movieId: string;
  movieTitle: string;
  name: string;
  rating: number;
  comment: string;
}
