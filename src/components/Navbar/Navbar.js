import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

import {Link} from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className="logo">
          <h2>BOOKS.</h2>
      </div>
      <ul className="nav-menu">
        <Link to='home'><li>Home</li></Link>
        <Link to='books'><li>Books</li></Link>
        <Link to='paper'><li>Paper vs Digital</li></Link>
        <Link to='why'><li>Why Books?</li></Link>
        <Link to='resources'><li>Resources</li></Link>
      </ul>
      <div className="nav-icon">
        <BiSearch className='icon' style={{marginRight: '1rem'}} />
        <BsPerson className='icon' />
      </div>
      <div className='hamburger' onClick={handleNav}>
        <HiOutlineMenuAlt4 className='icon' />
      </div>
    
    </div>
  )
}

export default Navbar