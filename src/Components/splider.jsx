import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

function MyCarousel() {
  return (
    <Splide
      options={{
        type: 'fade', // Change type to 'fade' for image transition
        rewind: true, // Allows looping from last slide to first and vice versa
        arrows: true, // Enable previous and next arrows
        autoplay: true, // Enable automatic sliding
     // Set the interval between slides in milliseconds (optional)
      }}
      className="my-carousel "
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img src="../src/assets/Pic1.jpeg" alt="" />
      </SplideSlide>
      <SplideSlide>
        <img src="../src/assets/pic2.jpeg" alt="" />
      </SplideSlide>
      <SplideSlide>
        <img src="../src/assets/pic3.jpeg" alt="" />
      </SplideSlide>
      <SplideSlide>
        <img src="../src/assets/pic4.jpeg" alt="" />
      </SplideSlide>
    </Splide>
  );
}

export default MyCarousel;
