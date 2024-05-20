import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand" href={''}>Shopping</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile" >Profile</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href={''} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href={''}>Add</Link></li>
            <li><Link className="dropdown-item" href={''}>Upadte</Link></li>
           
          </ul>
        </li>
        <li className="nav-item mx-2">
          <Link className="btn btn-outline-primary" to="/signup" >Sign Up</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="btn btn-outline-primary" to="/login" >Log In</Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="dropdown ms-3">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    User
  </a>

  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header