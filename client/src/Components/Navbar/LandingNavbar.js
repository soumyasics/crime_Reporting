import React from "react";
import "../../Assets/Styles/Navbar.css";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
 
function LandingNavbar() {
  return (
    <div>
      <nav class="navbar navbar_bg">
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
      </nav>
    </div>
  );
}

export default LandingNavbar;
