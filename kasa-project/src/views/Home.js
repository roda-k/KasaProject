import React from 'react';
import { useNavigate } from "react-router-dom";
import homeBanner from "../assets/Home_banner_img.png"
import Banner from '../components/Banner';
import '../stylesheets/home.scss'
import OfferBox from '../components/OfferBox';

function Home({ mockData }) {

  const navigate = useNavigate();

  return (
    <div>
      <Banner
        format='home'
        homeBanner={homeBanner}
        msg="Chez vous, partout et ailleurs"
      />
      <div className='offers-container'

      >
        {mockData.map((item) => {
          return (
            <div key={`${item.id}`}
              className='clickable-div'
              onClick={() => { navigate(`location/${item.id}`) }}>
              <OfferBox data={item} />
            </div>
          )
        })}
      </div>
    </div>
  )

}

export default Home