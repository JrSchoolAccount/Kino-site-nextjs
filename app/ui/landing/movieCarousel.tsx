'use client';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { Movie } from '../../lib/definitions';
import { useRouter } from 'next/navigation';

const MovieCarousel = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  const handleClick = (movieId: any) => {
    router.push(`/filmer/${movieId}`);
  };

  const settings = {
    dots: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/movies');
        const data = await response.json();
        if (Array.isArray(data.movies)) {
          const movieData = data.movies.map((movie: any) => ({
            title: movie.title,
            id: movie._id,
            poster: movie.poster,
          }));
          setMovies(movieData);
        } else {
          console.error(
            'Data received from API does not contain an array of movies:',
            data,
          );
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: '100px', marginBottom: '100px' }}
    >
      <Typography
        sx={{
          fontSize: '45px',
          textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          marginBottom: '20px',
          fontWeight: 'bold',
        }}
        variant="h2"
        align="center"
        gutterBottom
      >
        Aktuella Filmer
      </Typography>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Box
            key={movie.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => handleClick(movie.id)}
          >
            <Box
              sx={{
                marginRight: 5,
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Image
                src={movie.poster}
                alt={movie.title}
                width={200}
                height={300}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Box>
            <Typography
              variant="h3"
              align="center"
              sx={{ fontSize: 20, marginTop: 2 }}
            >
              {movie.title}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default MovieCarousel;
