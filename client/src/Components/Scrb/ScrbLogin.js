import React from 'react'
import '../../Assets/Styles/Scrb.css'
import { Link } from 'react-router-dom'

function ScrbLogin() {
  return (
    <div>
      <div className="container">
        <div className="row citizen_login_box">
          <div className="col-lg-7 col-md-4 col-sm-6 scrb_login_left">
            
          </div>
          <div className="col-lg-5 col-md-8 col-sm-6 citizen_login_right">
            
            <h2 className="citizen_login_title" >SCRB Login</h2>
            <div className="citizen_login_input_grp">
            <input type="email" class="form-control user_inp " id="exampleFormControlInput1" placeholder="Email"/>
            <input type="password" class="form-control user_inp mt-3" id="exampleFormControlInput1" placeholder="Password"/>
            {/* <p className="text-end"><Link to='/scrb_forgotpassword' >Forgot Password?</Link></p> */}

            <button type="submit" className="btn btn-secondary w-100 mt-3" >Login</button>
            {/* <p>Don't have an account? Register</p> */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ScrbLogin
