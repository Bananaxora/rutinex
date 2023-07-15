import React from 'react'
import logo from '../img/logo.png'
import gatorade from '../img/gatorade.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-primary rounded mt-3" aria-label="Thirteenth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a className="navbar-brand col-lg-3 me-0" href="http://localhost:3000/"><img src= {logo} width={'120px'} alt="" /></a>
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="http://localhost:3000/"><p className=' h3 fw-semibold text-info'>Inicio</p></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/watch?v=Chv8EXvWkZI"><p className='h3 fw-semibold text-warning'>Patrocinador</p></a>
            </li>
          </ul>
          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
          <a className="navbar-brand col-lg-3 me-0" href="https://gatorade.lat/cl/"><img src= { gatorade } width={'70px'} alt="" /></a>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;