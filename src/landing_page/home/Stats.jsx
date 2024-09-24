import React from 'react'

const Stats = () => {
  return (
    <div className='container d-flex justify-content-between row-12 mt-5 px-5'>
      <div className="row-5">
        <h1 className='my-4'>Trust with Confidence</h1>
        <div className='my-3'>
          <h2 className='fs-4'>Customer-first always</h2>
          <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with <br />
               ₹4.5+ lakh crores of equity investments and contribute to 
               <br /> 15% of daily retail exchange volumes in India.
          </p>
        </div>
        <div className='my-4'>
          <h2 className='fs-4'>Customer-first always</h2>
          <p className='text-muted'>No gimmicks, spam, "gamification", or annoying
            <br />  push notifications. High quality apps that you 
            <br /> use at your pace, the way you like.
          </p>
        </div>
        <div className='my-4'>
          <h2 className='fs-4'>The Zerodha universe</h2>
          <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with <br />
               ₹4.5+ lakh crores of equity investments and contribute to 
               <br /> 15% of daily retail exchange volumes in India.
          </p>
        </div>
        <div className='my-4'>
          <h2 className='fs-4'>Do better with money</h2>
          <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with <br />
               ₹4.5+ lakh crores of equity investments and contribute to 
               <br /> 15% of daily retail exchange volumes in India.
          </p>
        </div>
      </div>
      <div className="col-6  ">
        <img src="media/ecosystem.png" alt="" className='pt-4 row-6 col-11' />
        <div className='d-flex justify-content-around'>
          <a href="" className='text-decoration-none'>Explore our Products <i class="fa-solid fa-arrow-right"></i> </a>
          <a href="" className='text-decoration-none' >Try kite demo <i class="fa-solid fa-arrow-right"></i> </a>
        </div>
      </div>


    </div>

  )
}

export default Stats
