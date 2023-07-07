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
      <div className={length > 1 ? 'prev-arrow' : 'element-hidden'} onClick={prevSlide} />
      <div className={length > 1 ? 'next-arrow' : 'element-hidden'} onClick={nextSlide} />
      <p className={length > 1 ? 'img-count' : 'img-count element-hidden'}>{`${current + 1}/${length}`}</p>
      {myImages.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='Travel preview' className='slider-style' />
            )}
          </div>
        );
      })}
    </div>
  );
};




export default Slider