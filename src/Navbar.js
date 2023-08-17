import React from 'react'
import './Navbar.css';
import {Link} from "react-router-dom";
const Navbar = () => {
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top navi" >
  <div className="container-fluid">
    <a className="navbar-brand navi" href="/">WoRdIfY</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active  navi" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navi" to="/About">About</Link>
        </li>
       
        
      </ul>
      {/* <form className="d-flex" role="search">
        <button className="btn btn-light mode" type="submit" onClick={() => setDarkMode(!isDarkMode)}><i class="bi bi-brightness-low"></i></button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar