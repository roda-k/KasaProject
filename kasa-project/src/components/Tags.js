import React from 'react';
import '../stylesheets/tags.scss'

function Tags({ tagsInfos }) {

  return (
    <div className='tags-container'>
      {tagsInfos.map((item, index) => {
        return (
          <div className='tags' key={`tagKey + ${index + 1}`}>
            <p>{item}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Tags