import React from 'react';
import '../stylesheets/host.scss'

function Host({ hostInfos }) {

  let hostName = hostInfos.name

  hostName = hostName.split(" ")
  return (
    <div className='host'>
      <p>{hostName[0]}<br/>{hostName[1]}</p>
        <img src={hostInfos.picture} alt='host picture' className='profile-bubble' />
    </div>
  )

}

export default Host