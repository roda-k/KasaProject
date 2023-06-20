import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import { useParams } from 'react-router-dom';

function LocationInfo({ mockData }) {

  let { id } = useParams()
  const [idVerifiedLocation, setIdVerifiedLocation] = useState(null)

  useEffect(() => {
    setIdVerifiedLocation(mockData.find(draft => draft.id === id))
    if (idVerifiedLocation)
      console.log("id => ", idVerifiedLocation)
    else
      console.log("press f")
  }, [id])

  if (idVerifiedLocation) {
    return (
      <Slider myImages={idVerifiedLocation.pictures} />
    )
  }
  else
    return (null)

}

export default LocationInfo