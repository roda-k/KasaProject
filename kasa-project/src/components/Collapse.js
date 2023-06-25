import React, { useState } from 'react';
import '../stylesheets/collapse.scss'

function Collapse({title, content}) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='collapse'>
      <div className='collapse-title'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='collapse-text-title'>{title}</p>
      </div>
      {isOpen &&
      <div className='collapse-body'>
        {typeof content === "string" &&
        <p>{content}</p>
        }
      </div>
    }
    </div>
  )

}

export default Collapse