import React from 'react'
import '../../Assets/Styles/CitizenRegistration.css'
import { Link } from 'react-router-dom'

function PoliceRegister() {
  return (
    <div>
      <div className="container">
        <div className="row citizen_reg_box">
          <div className="col-lg-5 col-md-4 col-sm-6 citizen_reg_left"></div>
          <div className="col-lg-7 col-md-8 col-sm-6 citizen_reg_right">
            <h2 className="citizen_reg_title">Station Registration</h2>
            <div className="citizen_reg_input_grp row">
              <div className="col-12">
                <input
                  type="text"
                  class="form-control user_inp "
                  id="exampleFormControlInput1"
                  placeholder="Station Name"
                />
              </div>

              <div className="col-6 mt-2">
                <input
                  type="text"
                  class="form-control user_inp "
                  id="exampleFormControlInput1"
                  placeholder="Station Incharge Officer"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  class="form-control user_inp "
                  id="exampleFormControlInput1"
                  placeholder="Total Officers"
                />
              </div>
             
              
              <div className="col-6 mt-2">
                <input
                  type="email"
                  class="form-control user_inp "
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />

              </div>
               
              <div className="col-6 mt-2">
                    <input
                    type="number"
                    class="form-control user_inp "
                    id="exampleFormControlInput1"
                    placeholder="Contact"
                    />

                </div>
               
                <div className="col-6 mt-2">
                    <input
                    type="text"
                    class="form-control user_inp "
                    id="exampleFormControlInput1"
                    placeholder="District"
                    />

                </div>
                <div className="col-6 mt-2">
                    <input
                    type="text"
                    class="form-control user_inp "
                    id="exampleFormControlInput1"
                    placeholder="State"
                    />

                </div>
                
                <div className="col-6 mt-2">
                    <input
                    type="text"
                    class="form-control user_inp "
                    id="exampleFormControlInput1"
                    placeholder="Password"
                    />

                </div>
                <div className="col-6 mt-2">
                    <input
                    type="text"
                    class="form-control user_inp "
                    id="exampleFormControlInput1"
                    placeholder="Confirm Password"
                    />

                </div>
                <div className="col-12 mt-2">
                    <button type="submit" className="btn btn-secondary w-100 mt-3">
                Sign In
              </button>
                </div>
              
              <p className="citizen_reg_log_link" >Already have an account? <Link to='/police_login' >Login now</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoliceRegister
