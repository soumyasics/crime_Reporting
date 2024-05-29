import React from "react";
import "../../Assets/Styles/AdminLogin.css";
import img from '../../Assets/Images/adminImg.png'

function AdminLogin() {
  return (
    <div>
      <div className="container row">
        <div className="col-md-8 admin_login_leftbox">
            <div className="admin_login_leftbox_container">
                <p className="admin_login_leftbox_title" >Admin</p>
                <div className="citizen_login_input_grp">
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
            </div>
        </div>
        <div className="col-md-4 admin_login_rightbox">
            <img src={img} />
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
