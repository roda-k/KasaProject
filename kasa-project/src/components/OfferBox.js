import React from 'react';
import '../stylesheets/home.scss'

function OfferBox({ data }) {

  return (
    <figure className='offer-boxes'>
      <img src={data?.cover} className='offer-img' alt='Location image'/>
      <figcaption className='image-text'>{data?.title}</figcaption>
    </figure>
  )
}

export default OfferBox