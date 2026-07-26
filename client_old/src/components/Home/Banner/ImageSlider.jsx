import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.scss';

const ImageSlider = ({ images, autoplay }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (autoplay && slider) {
      const interval = setInterval(() => {
        slider.slickNext();
      }, 3000); // Change the duration as needed
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true, // Enable draggable functionality
    autoplay: autoplay, // Enable autoplay
    arrows: false,
  };

  return (
    <Slider className='slider' ref={sliderRef} {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
