export type Screenings = {
    id: number;
    start_time: string;
  };
  
export type SpecificScreeningsResponse = {
    data: Screenings[];
  };

export type Settings = {
    dots: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    infinite: boolean;
    autoplay: boolean;
    autoplaySpeed: number;
  };