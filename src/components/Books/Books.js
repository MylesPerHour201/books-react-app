import React from 'react'
import './BooksStyles.css'

import Logic from '../../assests/logic.jpg'
import Money from '../../assests/money.jpg'
import Camus from '../../assests/camus.jpg'

function Books() {
  return (
    <div name='books' className='books'>
        <div className="container">
            <h1>
                A few of my favorite books!
            </h1>
            <div className="img-container">
                <img className='span-3 image-grid-row-2' src={Logic} alt="/" />
                <img src={Money} alt="/" />
                <img src={Camus} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Books