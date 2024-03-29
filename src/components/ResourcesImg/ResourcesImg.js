import React from 'react'
import './ResourcesImgStyles.css'


function ResourcesImg(props) {
  return (
    <div className='resources-img'>
        <img src={props.bgImg} alt='/' />
        <div className="overlay">
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default ResourcesImg