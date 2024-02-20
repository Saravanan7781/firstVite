import React from 'react'
import './Navbar.css'
import logo from './assets/logoMain.jpg'

function Navbar() {
  return (
      <nav className='navbar'>
          <ul>
        <img src={ logo} height={`10%`} width={`20%`}></img>            <li><a>Services</a></li>
            <li><a>Expertise</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Company</a></li>
            <li><a>Blog</a></li>
            <li><a>Let's Talk</a></li>
          </ul>
    </nav>
  )
}

export default Navbar 