import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'
import Navbar from './Navbar.jsx'
import Intro from './Intro.jsx'
import BuiltBy from './BuiltBy.jsx'
import Projects from './Projects.jsx'
import BottomFirst from './BottomFirst.jsx'
import SmallMain from './SmallMain.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmallMain />
  </React.StrictMode>
)
