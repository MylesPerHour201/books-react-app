import React from 'react'
import './HeroStyles.css'

import Video from '../../assests/video-bg.mp4'

function Hero() {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4'/>
        </video>
        <div className="overlay"></div>
        <div className="content">
            <h1>
                Expand your horizons through the wonderful world of Books!
            </h1>
            <h2>
            “You will learn most things by looking, but reading gives understanding. Reading will make you free.” ― Paul Rand
            </h2>
            <h2>
                This website is dedicated to the great wealth of knowledge that can be earned through the simple act of reading. I have compiled some of my favorite books, and encourage you to check them out!
            </h2>
        </div>
        
    </div>
  )
}

export default Hero