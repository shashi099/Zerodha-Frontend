import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <div className='my-5'>
      <div className='text-center'>
        <h3>PEOPLE</h3>
      </div>

      <div className='container d-flex my-5 row-12 mt-5 px-5'>
        <div className="col-6 py-4 px-4 text-center">
          <img className='col-6 row-5 rounded-circle' src="media/nithinKamath.jpg" alt="" />
          <p className='mt-2'>shashi singh</p>
          <p>Founder CEO</p>
        </div>

        <div className="row-5 my-5">
          <div className='my-3'>
            <p className='text-muted'>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
              <br /> he faced during his decade long stint as a trader.
              <br /> Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p className='text-muted mt-4'>
              He is a member of the SEBI Secondary Market Advisory Committee <br />
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p>Playing basketball is his zen.</p>
            <p>Connect on <Link className='fw-semibold text-decoration-none'> Homepage </Link>
             / <Link className='fw-semibold text-decoration-none'>TradingQnA </Link> 
             / <Link className='fw-semibold text-decoration-none'> Twitter </Link> </p>
          </div>



        </div>



      </div>



    </div>
  )
}

export default Team
