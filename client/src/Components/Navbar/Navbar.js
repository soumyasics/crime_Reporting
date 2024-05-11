import React from "react";
import "../../Assets/Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar_bg">
        <div class="container-fluid container navbar_box">
          <p class=" navbar_title" href="#">
            Crime Reporting
          </p>
          <div className="navbar_sub_title d-flex justify-content-between" >
            <p><Link to='/' >Home</Link></p>
            <p><Link to='/about' >About</Link></p>
            <p><Link to='/citizen_login' >Login</Link></p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
