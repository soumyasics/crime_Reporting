import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";


function UserNavbar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("citizenToken") == null) {
      navigate("/");
    }
  });



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
              <Link to="/citizen_home">Home</Link>
            </p>
            <p>
              <Link to="/citizen_profile">Profile</Link>
            </p>
            <p>
              <Link onClick={()=>{localStorage.clear();window.location.reload(false)}}>
                <i class="ri-logout-box-r-line fs-6"></i>
              </Link>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UserNavbar;
