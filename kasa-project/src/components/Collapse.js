import React from 'react';
import collapseIcon from "../assets/vector_collapse.png"
import '../stylesheets/collapse.scss'

function Collapse({ title, content }) {

  function handleCollapse() {
    const elem = document.getElementById(`${title}+id`)
    const iconElem = document.getElementById(`${title}+icon`)
    if (elem.classList.contains('is-active')) {
      elem.classList.toggle('is-active')
      iconElem.classList.toggle('opened')
    } else {
      elem.classList.toggle('is-active')
      iconElem.classList.toggle('opened')
    }
  }

  return (
    <div>
      <div className='collapse'>
        <div className='collapse-title'
          onClick={() => handleCollapse()}
        >
          <p className='collapse-text-title'>{title}</p>
          <img src={collapseIcon} className='collapse-icon' id={`${title}+icon`}/>
        </div>
      </div>
      <div className='collapse-body' id={`${title}+id`}>
        <div style={{ padding: '20px' }}>
          {typeof content === "string" &&
            <p>{content}</p>
          }
        </div>
      </div>
    </div>
  )

}

export default Collapse