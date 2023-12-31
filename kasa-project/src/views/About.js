import React from 'react';
import Banner from '../components/Banner';
import aboutBanner from '../assets/About_banner.png'
import Collapse from '../components/Collapse';
import '../stylesheets/about.scss'

function About() {

  return (
    <div>
      <Banner
        homeBanner={aboutBanner}
      />
      <div className='collapse-wrapper-about'>
        <Collapse title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
     régulièrement vérifiées par nos équipes."/>
      </div>
      <div className='collapse-wrapper-about'>
        <Collapse title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme."/>
      </div>
      <div className='collapse-wrapper-about'>
        <Collapse title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme."/>
      </div>
      <div className='collapse-wrapper-about'>
        <Collapse title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
    </div>
  )
}
export default About