import React from 'react';
import '../stylesheets/host.scss'

function Host({ hostInfos }) {

  let hostName = hostInfos.name

  hostName.split(" ").join("\n")
  return (
    <div className='host'>
      <p>{hostName}</p>
        <img src={hostInfos.picture} alt='host picture' className='profile-bubble' />
    </div>
  )

}

export default Host