import React from 'react'

function ScrbForgotPassword() {
  return (
    <div>
      <div className="container">
        <div className="row citizen_login_box">
          <div className="col-lg-7 col-md-4 col-sm-6 forgot_password_left">
            
          </div>
          <div className="col-lg-5 col-md-8 col-sm-6 citizen_login_right">
            
            <h2 className="citizen_login_title" >Forgot Password</h2>
            <p className='citizen_forgot_password_subtitle' >SCRB</p>
            <div className="citizen_login_input_grp">
            <input type="email" class="form-control user_inp " id="exampleFormControlInput1" placeholder="Email"/>
            <input type="password" class="form-control user_inp mt-3" id="exampleFormControlInput1" placeholder="Password"/>
            <input type="password" class="form-control user_inp mt-3" id="exampleFormControlInput1" placeholder="Confirm Password"/>

            <button type="submit" className="btn btn-secondary w-100 mt-3" >Login</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ScrbForgotPassword
