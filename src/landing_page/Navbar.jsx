import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary px-5 py-3 border-bottom">
      <div class="container-fluid ">
        <Link class="navbar-brand" to="/">
          <img src="media/logo.svg" style={{ width: "20%" }} alt="" srcset="" />
        </Link>
      </div>
        
        <form class="collapse navbar-collapse ">
          <ul class="navbar-nav me-auto mb-2  mb-lg-0">
            <li class="nav-item mx-3">
              <Link class="nav-link active" aria-current="page" to="/signup"> signup </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" to="/about"> About</Link>
            </li>
            <li class="nav-item dropdown mx-3">
            <Link class="nav-link" to="/product"> Products</Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" to="/pricing"> Pricing</Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" to="/support" >Support</Link>
            </li>
          </ul>

        </form>
      
    </nav>
  )
}

export default Navbar
