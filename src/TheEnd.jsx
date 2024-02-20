import React from 'react';
import './TheEnd.css';
import logo from './assets/logoMain.svg'
import fb from './assets/fb.svg';
import twitter from './assets/twitter.svg';
import linkin from './assets/in.svg';
import ig from './assets/ig.svg'


function TheEnd() {
    return (
      <div className='whole'>
      <div className='TheEnd'>
          <div className='firstEnd'>
          <ul>
              <li>
                 
            </li>
              <img src={logo} height={`20%`}width={`30%`}></img>
              
              <li>
                   Build a modern and creative website with crealand
                  
                  </li>
                  <li className='imagesSocial'>
                <img src={fb} alt="" /><img src={twitter} alt="" /><img src={linkin } alt="" />
                <img src={ ig} />
                  </li>
              </ul>
          </div>
          
          <div className='secondEnd'>
              <ul>
                  <li></li>
                <li>Services</li><br />
                <li>Mobile Apps</li>
                <li>UX Design</li>
                  <li>Web Apps</li>
                  <li>Software</li>
              </ul>
          </div>
          <div className='thirdEnd'>
              <ul>
                <li></li>
                <li>Company</li>
                <li>About</li>
                <li>Mission</li>
                <li>Careers</li>
              </ul>


          </div>
          <div className='FinalEnd'>
              <ul>
                <li></li>
                <li>More</li>
                <li>Contact</li>
                <li>Locations</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
              </ul>
            </div>
            </div>
            <div className='BYE'>Copyright&copy;2022</div>
          
    </div>
  )
}

export default TheEnd