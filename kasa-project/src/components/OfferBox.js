import React from 'react';
import '../stylesheets/home.scss'

function OfferBox({ data }) {

  return (
    <div className='offer-boxes'>
      <img src={data?.cover} className='offer-img' alt='Location image'/>
      <p>{data?.title}</p>
    </div>
  )

}

export default OfferBox