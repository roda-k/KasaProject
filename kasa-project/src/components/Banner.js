import React from 'react';
import '../stylesheets/banner.scss'

function Banner({ format, homeBanner, msg = null }) {

  return (
    <div className='banner-container'>
      <div className={format === 'large' ? 'banner-large' : 'banner-small'}>
        <img src={homeBanner} className="banner-img" alt="Home banner" />
        {msg ?
          <p className='banner-msg'>{msg}</p>
          :
          null
        }
      </div>
    </div>
  )

}

export default Banner