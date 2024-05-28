import React from "react";
import "../../Assets/Styles/Navbar.css";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
 
function LandingNavbar() {
  return (
    <div>
      {/* <nav class="navbar navbar_bg">
        <div class="container-fluid container navbar_box">
          <div className="navbar_logo" >
            <img src={logo} className="img-fluid" alt="logo" />
            <div>
              <p class=" navbar_title" href="#">
              Crime <span>Reporting</span>
            </p>
            <p className="navbar_slogan" >Stay connect stay safe</p>

            </div>
          </div>

          <div className="navbar_sub_title d-flex justify-content-between">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <Link to="/citizen_login">Login</Link>
            </p>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar_bg">
        <div class="container-fluid">
         
          <Link to='/' className="text-decoration-none" >
          <div className="navbar_logo">
            <img src={logo} className="img-fluid" alt="logo" />
            <div>
              <p className="navbar_title">
                Crime <span>Reporting</span>
              </p>
              <p className="navbar_slogan">Stay connected stay safe</p>
            </div>
          </div>
            </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0 mt-3">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 " id="text_color_white">
              <li class="nav-item">
                <Link
                to={'/'}
                  class="nav-link"
                  aria-current="page"
                  id="text_color_white"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link" href="#" id="text_color_white">
                  About Us
                </Link>
              </li>
              
              <li class="nav-item">
                <Link to="/citizen_login" class="nav-link" href="#" id="text_color_white">
                  Sign In
                </Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LandingNavbar;
