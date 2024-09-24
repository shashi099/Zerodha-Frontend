import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="row my-5 border-bottom py-4">
                <h1 className='text-center fw-semibold' >Charges</h1>
                <p className='text-center fs-5  mb-4' > List of all charges and taxes </p>
            </div>
            <div>
                <div className="row d-flex text-center justify-content-center">
                    <div className='col-3'>
                        <img src="media/Zero.svg" alt="" srcset="" />
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            <br />adipisicing elit. Et, totam modi temporibus tenetur
                            <br /> distinctio cumque. Eveniet esse omnis dolorem expedita?
                        </p>
                    </div>

                    <div className='col-3  '>
                        <img src="media/twenty.svg" alt="" srcset="" />
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p >Lorem ipsum dolor sit amet consectetur 
                            <br />adipisicing elit. Et, totam modi temporibus tenetur
                            <br /> distinctio cumque. Eveniet esse omnis dolorem expedita?
                        </p>
                    </div>

                    <div className='col-3'>
                        <img src="media/Zero.svg" alt="" srcset="" />
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            <br />adipisicing elit. Et, totam modi temporibus tenetur
                            <br /> distinctio cumque. Eveniet esse omnis dolorem expedita?
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero
