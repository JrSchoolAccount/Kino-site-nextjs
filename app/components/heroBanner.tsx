'use client';
import { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Image from 'next/image';

const SlideContainer = styled('div')({
  display: 'none',
  '&.active': {
    display: 'block',
  },
});

// get movieposters here
// this typing should be done in definitions and imported here, my bad i missed it. 
const posters: string[] = [''];

const HeroBanner = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % posters.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {posters.map((posters, index) => (
        <SlideContainer
          key={index}
          className={index === slideIndex ? 'active' : ''}
        >
          <Image
            width={500}
            height={500}
            src={posters}
            alt={`Movieposter of ${index}`}
          />
        </SlideContainer>
      ))}
    </div>
  );
};

export default HeroBanner;
