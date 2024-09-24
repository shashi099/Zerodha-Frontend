import React from 'react'

const Universe = () => {
    return (
        <div className='conatiner text-center my-5'>
            <p className='my-5 py-5 fs-4 fw-semibold '>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <h1>The Zerodha Universe</h1>
            <p className='my-3 fs-6'>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='row d-flex justify-content-center my-5'>
                <div className='col-3'>
                    <img src="media/smallcaseLogo.png" alt="" />
                    <p>Lorem ipsum dolor sit amet. Lorem <br />ipsum dolorsit amet c elit. <br /> Voluptati ducimus ea accusamus a.</p>
                </div>
                <div className='col-3'>
                    <img src="media/smallcaseLogo.png" alt="" />
                    <p>Lorem ipsum dolor sit amet. Lorem <br />ipsum dolorsit amet coelit. <br /> Voluptatib ucimus ea accusamus a.</p>
                </div>
                <div className='col-3'>
                    <img src="media/sensibullLogo.svg" alt="" />
                    <p>Lorem ipsum dolor sit amet. Lorem <br />ipsum dolorsit amet c elit. <br /> Voluptati ducimus ea accusamus a.</p>
                </div>
            </div>


            <div className='row d-flex justify-content-center my-5'>
                <div className='col-3'>
                    <img src="media/streakLogo.png" alt="" className='col-5' />
                    <p>Lorem ipsum dolor sit amet. Lorem <br />ipsum dolorsit amet c elit. <br /> Voluptati ducimus ea accusamus a.</p>
                </div>
                <div className='col-3 '>
                    <img src="media/dittoLogo.png" alt="" className='col-4' />
                    <p>Lorem ipsum dolor sit amet. Lorem <br />ipsum dolorsit amet coelit. <br /> Voluptatib ucimus ea accusamus a.</p>
                </div>
                <div className='col-3'>
                    <img src="media/zerodhaFundhouse.png" alt="" className='col-5' />
                    <p>Lorem ipsum dolor sit amet. Lorem <br />ipsum dolorsit amet c elit. <br /> Voluptati ducimus ea accusamus a.</p>
                </div>
            </div>
            <div class="d-grid gap-1 col-2 mx-auto">
            <button type="button" class="btn btn-primary btn-lg">Sign up for free</button>
          </div>

        </div>
    )
}

export default Universe
