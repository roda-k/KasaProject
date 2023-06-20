import React from 'react';
import footerLogo from "../assets/FooterLogo.png"
import '../stylesheets/footer.scss'

function Footer() {

  return (
    <div className='footer'>
      <img src={footerLogo} alt='Kasa Logo' />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )

}

export default Footer