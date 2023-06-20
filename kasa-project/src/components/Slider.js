import React, { useState } from 'react';
import '../stylesheets/slider.scss'

function Slider({ myImages }) {

  const [current, setCurrent] = useState(0);
  const length = myImages?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(myImages) || myImages.length <= 0) {
    return null;
  }

  return (
    <div className='slider'>
      <div className='prev-arrow' onClick={prevSlide} />
      <div className='next-arrow' onClick={nextSlide} />
      {myImages.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </div>
  );
};




export default Slider