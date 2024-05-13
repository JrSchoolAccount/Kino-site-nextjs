'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography } from '@mui/material';
import { carouselSettings } from '../lib/definitions';

const MovieCarousel = () => {
  const settings: carouselSettings = {
    dots: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  return (
    <Container maxWidth="md" style={{ backgroundColor: 'green', marginTop: '500px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Aktuella Filmer
      </Typography>
      <Slider {...settings}>
        <div>
          <h3>FIRST SLIDE</h3>
        </div>
        <div>
          <h3>SECOND SLIDE</h3>
        </div>
        <div>
          <h3>THIRD SLIDE</h3>
        </div>
        <div>
          <h3>FORTH SLIDE</h3>
        </div>
        <div>
          <h3>Fifth SLIDE</h3>
        </div>
        <div>
          <h3>Six SLIDE</h3>
        </div>
        <div>
          <h3>Seven SLIDE</h3>
        </div>
        <div>
          <h3>eigth SLIDE</h3>
        </div>
        <div>
          <h3>nine SLIDE</h3>
        </div>
        <div>
          <h3>ten SLIDE</h3>
        </div>
      </Slider>
    </Container>
  );
};

export default MovieCarousel;
