import React from 'react';
import './Projects.css';
import img1 from "./assets/image1.png"

function Projects() {
  // const img1 = ;

  return (
    <div className='whole'>
    <div className="container2">
        <div className='Image firstImage'>
          <img src={ img1} height={`80%`} width={`77%`}></img>
      </div>
      <div className='projectDetails project1'>
        <h1>Project name</h1>
        <p className='first-p'>With lots of unique blocks, you can easily build a page without coding. </p>
        <div>UX DESIGN</div>
        <p className='second-p'>With lots of unique blocks, you can easily build a page without coding. Unique blocks, you can easily build a page without coding. Build your next website fast. With lots of unique blocks, you can easily build a page without coding. Build your next website fast. With lots of unique blocks, you can easily build a page without coding. Build your next website fast. With lots of unique blocks, you can easily build a page without coding. Unique blocks, you can easily build a page without coding...</p>

        <button id='learn-more'>Learn more</button>
      </div>
      
      </div>
      <div className="container2">
        <div className='projectDetails firstImage'>
          <h1>Project name</h1>
        <p className='first-p'>With lots of unique blocks, you can easily build a page without coding. </p>
        <div>UX DESIGN</div>
        <p className='second-p'>With lots of unique blocks, you can easily build a page without coding. Unique blocks, you can easily build a page without coding. Build your next website fast. With lots of unique blocks, you can easily build a page without coding. Build your next website fast. With lots of unique blocks, you can easily build a page without coding. Build your next website fast. With lots of unique blocks, you can easily build a page without coding. Unique blocks, you can easily build a page without coding...</p>

          <button id='learn-more'>Learn more</button>     
      </div>
      <div className=' Image project1'>
        
            <img src={ img1} height={`80%`} width={`77%`}></img>
      </div>
      
      </div>
      </div>

  )
}

export default Projects