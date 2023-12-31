import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark">
   
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <img 
       className="App-logo"
       height="52"
       width="100"
       src="Perro.png"
       alt="Perro"
       ></img>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to={'/'} className="nav-link  text-ligth">
              Home
          </Link></li>
          <li><Link to={'/user-form'} className="nav-link  text-ligth">
              Formulario
          </Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  )
}
