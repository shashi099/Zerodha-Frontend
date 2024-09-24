import React from 'react'

const Pricing = () => {
  return (
    <div className='conatiner row-12 px-5 mt-5 d-flex justify-content-around'>
        <div className="row-5 pt-5 ">
            <h1 className='fs-3'>Unbeatable Pricing</h1>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing 
              <br />odio, delectus blanditiis illum adipisci minus vel!
            </p>
            <a href="" className='text-decoration-none fw-semibold'>see pricing <i class="fa-solid fa-arrow-right"></i> </a>
        </div>       
        <div className="row-5 ">
            <img src="media/Zero.svg" alt="" srcset="" />
            <img src="media/Zero.svg" alt="" srcset="" />
            <img src="media/twenty.svg" alt="" srcset="" />
        </div>
    </div>
  )
}

export default Pricing
