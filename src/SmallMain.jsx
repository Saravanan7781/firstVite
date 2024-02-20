import React from 'react'
import './main.css'
import Navbar from './Navbar.jsx'
import Intro from './Intro.jsx'
import BuiltBy from './BuiltBy.jsx'
import Projects from './Projects.jsx'
import BottomFirst from './BottomFirst.jsx'
import './SmallMain.css'
import TheEnd from './TheEnd.jsx'

function SmallMain() {
  return (
      <div className='TheMain'>
          <Navbar />
    <Intro />
    <BuiltBy />
    <Projects />
 
      <BottomFirst />
      <TheEnd />
      </div>
  )
}

export default SmallMain