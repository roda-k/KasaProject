import React from 'react';
import ActiveStar from '../assets/star-active.png'
import InactiveStar from '../assets/star-inactive.png'
import '../stylesheets/rating.scss'

function Ratings({ rated }) {

  const starsNumber = parseInt(rated)
  let stars = []
  console.log("rate => ", starsNumber)
  for (let i = 0; i < 5; i++) {
    stars.push(
      i < starsNumber ?
        <img src={ActiveStar}
          className='star-sizing'
          alt='star rating active'
          key={starsNumber + i}
        />
        :
        <img src={InactiveStar}
          className='star-sizing'
          alt='star rating inactive'
          key={starsNumber + i}
        />
    )
  }
  return (
    <div className='ratings'>
      {stars}
    </div>
  )

}

export default Ratings