import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../Assets/Images/logo.png";


function PoliceNavbar() {

    const navigate=useNavigate();

  useEffect(() => {
    if (localStorage.getItem("policeId") == null) {
      navigate("/");
    }
  });

  const id = localStorage.getItem('policeId');


    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
      };

      useEffect(() => {
        if (localStorage.getItem('policestationName') == null) {
          navigate('/');
        }
      }, [navigate]);
        
        const policestationname=localStorage.getItem('policestationName')

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar_bg">
        <div class="container-fluid">
         
        <Link to='/police_home' className="text-decoration-none" >
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
              <li class="nav-item m-3">
                <Link
                to={'/police_home'}
                  class="nav-link"
                  aria-current="page"
                  id="text_color_white"
                >
                  Home
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link
                to={`/policeprofile/${id}`}
                  class="nav-link"
                  aria-current="page"
                  id="text_color_white"
                >
                  Profile
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link
                to={`/policeviewcases`}
                  class="nav-link"
                  aria-current="page"
                  id="text_color_white"
                >
                  View All Cases
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link
                to={'/'} onClick={handleLogout}
                  class="nav-link"
                  aria-current="page"
                  id="text_color_white"
                >
                  Logout
                </Link>
              </li>
              
             
              {/* <li class="nav-item">
                <a class="nav-link" href="#" id="text_color_white">
                  Complaints
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" id="text_color_white">
                  View Alerts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" id="text_color_white">
                  Police Station
                </a>
              </li> */}
              <li class="nav-item ">
               
                {/* <div class="dropdown-center">
                  <button
                    class=" button_bg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link to={'/citizen_profile'} class="dropdown-item" href="#">
                        Profile
                      </Link>
                      <Link to={'/'} onClick={handleLogout} class="dropdown-item" href="#">
                        Logout
                      </Link>
                    </li>
                   
                  </ul>
                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default PoliceNavbar
