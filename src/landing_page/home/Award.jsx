import React from 'react'

const Award = () => {
  return (
         <div className="container row-12 d-flex flex-row mt-5 pt-5 px-5">
          <div className="col-6">
              <img src="/media/largestBroker.svg" alt="" srcset="" />
          </div>
          <div className="col-6 mt-4">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet debitis hic at mollitia iusto.</p>
              <div className="list d-flex flex-row fs-6 justify-content-between">
              <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                   
              </ul>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
              
            </div>
            <div className='mt-5'>
                <img src="media/pressLogos.png" alt=""  className='row-2'/>
              </div>

          </div>
        </div>
  )
}

export default Award
