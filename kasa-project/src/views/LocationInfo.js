import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import { useNavigate, useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import '../stylesheets/locationInfo.scss'
import Tags from '../components/Tags';
import Host from '../components/Host';
import Ratings from '../components/Ratings';

function LocationInfo({ mockData }) {

  let { id } = useParams()
  const navigate = useNavigate();
  const [idVerifiedLocation, setIdVerifiedLocation] = useState(mockData.find(draft => draft.id === id))

  useEffect(() => {
    setIdVerifiedLocation(mockData.find(draft => draft.id === id))
    if (!idVerifiedLocation) {
      navigate(`/notfound`)
    }
  }, [id])

  if (idVerifiedLocation) {
    return (
      <div>
        <Slider myImages={idVerifiedLocation.pictures} />
        <div className='infos-container'>
          <div className='title-tag'>
            <div className='title-container'>
              <p className='big-title'>{idVerifiedLocation.title}</p>
              <p className='subtitle'>{idVerifiedLocation.location}</p>
            </div>
            <Tags tagsInfos={idVerifiedLocation.tags} />
          </div>
          <div className='host-rating'>
            <Host hostInfos={idVerifiedLocation.host} />
            <Ratings rated={idVerifiedLocation.rating} />
          </div>
        </div>
        <div className='collapses-container'>
          <div className='collapse-wrapper'>
            <Collapse title={"Description"} content={idVerifiedLocation.description} />
          </div>
          <div className='collapse-wrapper'>
            <Collapse title={"Équipements"} content={idVerifiedLocation.equipments} />
          </div>
        </div>
      </div>
    )
  }
  else
    return (null)

}

export default LocationInfo