import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='text-center border-bottom my-5 py-5'>
            <h1 className='fs-1'>Technology</h1>
            <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
            <p>Check out our <Link className='fw-semibold text-decoration-none'> investment offerings  → </Link> </p>

        </div>
    )
}

export default Hero
