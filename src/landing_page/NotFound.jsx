import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='my-5'>
      <h1 className='text-center fw-semibold' >404 Not Found</h1>
      <p className='text-center fs-6 my-4' >We couldn't find the page you were looking for. Visit <Link to="/"> Zerodha’s home page </Link> </p>
    </div>
  )
}

export default NotFound
