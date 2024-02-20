import React from 'react';
import './Intro.css';
import  Image from './assets/descrip.png' ;

function Intro() {
  return (
    <div className='description'>
      <div className='content'>
        <h1>We Create Value<br /> to Business</h1>
        <p>With lots of unique blocks, you can easily build a page without coding. Build your next website fast.</p>
        <button id='getStarted'>Get Started</button>
      </div>
      <div>
        <img src={Image} height={`60%`} width={`35%`}></img>
        
      </div>
    </div>
  )
}

export default Intro