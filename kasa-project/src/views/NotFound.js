import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/notFound.scss'

function NotFound() {

  const navigate = useNavigate();

  return (
    <div className='not-found'>
      <p className='number-style'>404</p>
      <p className='message-style'>Oups! La page que vous demandez n'existe pas.</p>
      <p className='homelink'
        onClick={() => { navigate(`/`) }}>
        Retourner sur la page d'accueil</p>
    </div>
  )

}

export default NotFound