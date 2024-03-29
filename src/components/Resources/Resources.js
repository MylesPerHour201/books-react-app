import React from 'react'
import './ResourcesStyles.css'

import Amazon from '../../assests/amazon.png'
import Barnes from '../../assests/barnes.jpg'
import Audiobook from '../../assests/audiobook.png'

import ResourcesImg from '../ResourcesImg/ResourcesImg'

function Resources() {
  return (
    <div className='resources'>
      <div className="container">
      <ResourcesImg bgImg={Amazon} text='Amazon Books' />
      <ResourcesImg bgImg={Barnes} text='Barnes n Nobles' />
      <ResourcesImg bgImg={Audiobook} text='Digital Platforms' />
      </div>
    </div>
  )
}

export default Resources