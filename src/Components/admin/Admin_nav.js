import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin_nav() {
  return (
    <>

      <header>

        <nav className="navbar navbar-expand-lg text-light">
          <div className="container-fluid">
            <div className="navlogo">
            <NavLink to="/"> <img src="./amazon_PNG25.png" alt="logo" /> </NavLink>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">

              <ul className="navbar-nav ml-auto mb-2 mx-5 mb-lg-0  ">
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-white active" aria-current="page" to="/viewuser">view user</NavLink>
                </li>
                <li className="nav-item  mx-2">
                  <NavLink className="nav-link text-white" to="/adduser">add user </NavLink>
                </li>
                <li className="nav-item  mx-2">
                  <NavLink className="nav-link text-white" to="/viewproduct">view product</NavLink>
                </li>
                <li className="nav-item  mx-2">
                  <NavLink className="nav-link text-white" to="/addproduct">add product</NavLink>
                </li>


              </ul>

            </div>
          </div>
        </nav>
      </header>

    </>
  )
}
export default Admin_nav