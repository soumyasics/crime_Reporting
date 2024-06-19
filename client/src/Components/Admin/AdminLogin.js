import React from "react";
import "../../Assets/Styles/AdminLogin.css";
import img from '../../Assets/Images/adminImg.png'

function AdminLogin() {
  return (
    <div className="container" >
      <div className="row">
        <div className="col-7 admin_login_leftbox">
            <div className="admin_login_leftbox_container">
                <p className="admin_login_leftbox_title pb-5" >Admin</p>
                <div className="">
                <input
                  type="email"
                  className="form-control user_inp mb-4"
                  id="email"
                  placeholder="Email"
                  name="email"
                  
                />
                <input
                  type="password"
                  className="form-control user_inp"
                  id="email"
                  placeholder="Password"
                  name="password"
                  
                />
                </div>
                <button type="submit" className="btnlogin mt-4 w-25" >
              Login
            </button>
            </div>
        </div>
        <div className="col-5 admin_login_rightbox">
            <img src={img} width={500} />
        </div>
        
      </div>
    </div>
  );
}

export default AdminLogin;
