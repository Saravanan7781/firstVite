import React from 'react'
import './BottomFirst.css'

import uiux from './assets/UIUX.png';
import soft from './assets/SOFT.png';
import mobile from './assets/mob.png'

function BottomFirst() {
    return (
      <div className='whole'>
      <div className='container-3'>
          <button id='explore-more-2'>Explore more</button>

          <div className='stats'>
              <div className='textStats'>
                  <h1>
                      Let’s Build the Business Together
                  </h1>
                  <p>
                      With lots of unique blocks, you can easily build a page without coding. Build your next website fast.
                  </p>
                  <button id='getStarted2'>Get Started</button>
              </div>
              <div className='gridStats'>
                  <div className='row1'>
                      <div className='first'>
                          <h1 className='h1'>439</h1>
                          <p>Exclusive Clients</p>
                      </div>
                      <div className='second'>
                          <h1  className='h1'>85</h1>
                          <p>85
Completed Projects</p>
                      </div>
                  </div>
                  <div className='row2'>
                      <div className='third'>
                          <h1  className='h1'>99%</h1>
                          <p>99%
Success Rate</p>
                      </div>
                      <div className='fourth'>
                          <h1  className='h1'>27</h1>
                          <p>27
Finance Experts</p>
                      </div>
                  </div>
              </div>
          </div>

                {/* ? */}
                <div className='TARGET'>
          <div className='midBus '>
          <h1 >Get Started Your Business</h1>
          <p>With lots of unique blocks, you can easily build a page without coding. Build <br />your next website within few minutes.</p>

          </div>

          {/* Containers */}


          <div className='theSales'>
              <div className='sales1'>
                            <div className='salesImages'>
                                <img src={uiux } ></img>
                  </div>
                  <h1>UX Design</h1>
<p>With lots of unique blocks, you can easily build a page without coding. Build your next website within few minutes.</p>
              </div>
              <div className='sales2'>
                            <div className='salesImages'>
                                <img src={ soft}></img>
                  </div>
                  <h1>
                      Software Dev
                  </h1>
                  <p>
                      With lots of unique blocks, you can easily build a page without coding. Build your next website within few minutes.
                  </p>
              </div>
              <div className='sales3'>
                            <div className='salesImages'>
                                <img src={ mobile} height={`30%`} width={`50%`}></img>
                  </div>
                  <h1>
                      Mobile App
                  </h1>
                  <p>
                      With lots of unique blocks, you can easily build a page without coding. Build your next website within few minutes.
                  </p>
              </div>
          </div>
            </div>
            </div>
            </div>
  )
}

export default BottomFirst;