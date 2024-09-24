import React from 'react'

const Education = () => {
  return (
     <div className='container d-flex justify-content-between row-12 mt-5 px-5'>
      <div className="col-6  ">
         <img src="media/education.svg" alt="" />
      </div>

      <div className="row-5 my-5">
        <h1 className='my-4 fs-4'>Free and open market education</h1>
        <div className='my-3'>
          <p className='text-muted'>
            Varsity, the largest online stock market education book in the world 
            <br /> covering everything from the basics to advanced trading.
          </p>
          <a href="" className='text-decoration-none'> Varisity <i class="fa-solid fa-arrow-right"></i></a>

          <p className='text-muted mt-4'>
          TradingQ&A, the most active trading and investment community in 
          <br /> India for all your market related queries.
          </p>
          <a href="" className='text-decoration-none'> TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a>
        </div>
         
         
         
      </div>
      


    </div>
  )
}

export default Education
