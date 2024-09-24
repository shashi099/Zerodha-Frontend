import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className='text-center py-5 my-5 border-bottom'>
        <h3>We pioneered the discount broking model in India.</h3>
        <h3>Now, we are breaking ground with our technology.</h3>
      </div>

      <div className='d-flex justify-content-evenly my-5 row-10 mx-5'>
        <div className='row-5 my-5'>
          <p>
            We kick-started operations on the 15th of August,<br />
            2010 with the goal of breaking all barriers that traders <br />
            and investors face in India in terms of cost, support, and <br />
            technology. We named the company Zerodha, a combination of <br />
            Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house <br />
            technology have made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day <br />
            through our powerful ecosystem of investment platforms, <br />
            contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className='row-5 my-5'>
          <p>In addition, we run a number of popular open <br />
            online educational and community initiatives <br />
            to empower retail traders and investors. </p>

          <p> <Link className='fw-semibold text-decoration-none'> Rainmatter </Link>, our fintech fund and incubator, <br />
            has invested in several fintech startups withbr <br />
            the goal of growing the Indian capital markets.</p>

          <p>And yet, we are always up to something new <br />
            every day. Catch up on the latest updatesbr <br />
            on our <Link className='fw-semibold text-decoration-none'> blog </Link> 
            or see what the media is 
            <Link className='fw-semibold text-decoration-none'> saying about us.</Link></p>
        </div>
      </div>

    </div>
  )
}

export default Hero
