import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className="row">
          <img src="media/homeHero.png" alt="" srcset="" className='p-16   modal-dialog modal-xl w-70 mb-4' />
          <h1 className='text-center fw-semibold' >Invest in everything</h1>
          <p className='text-center fs-3 fst-italic mb-4' >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <div class="d-grid gap-2 col-3 mx-auto">
            <button type="button" class="btn btn-primary btn-lg">Sign up for free</button>
          </div>
      </div>
    </div>
  )
}

export default Hero
