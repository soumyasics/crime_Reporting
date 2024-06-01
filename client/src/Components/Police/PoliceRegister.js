import React from 'react'
import '../../Assets/Styles/CitizenRegistration.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { PoliceRegistrationSchema } from '../Constants/Schema'

function PoliceRegister() {

  const onSubmit=(values)=>{
    console.log(values)
  }
  const { values,errors,touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues:{
      station_name:'',
      station_incharge_officer:'',
      total_officers:'',
      email:'',
      contact:'',
      district:'',
      state:'',
      password:'',
      confirm_password:''
    },
    validationSchema:PoliceRegistrationSchema,
    onSubmit:onSubmit
    
  })
  console.log(values);
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
                  name="station_name"
                  value={values.station_name} 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                />
              {errors.station_name && touched.station_name && (<span className="text-danger">{errors.station_name}</span>)}

              </div>

              <div className="col-6 mt-2">
                <input
                  type="text"
                  class="form-control user_inp "
                  id="exampleFormControlInput1"
                  placeholder="Station Incharge Officer"
                  name="station_incharge_officer"
                  value={values.station_incharge_officer} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                />
            {errors.station_incharge_officer && touched.station_incharge_officer && (<span className="text-danger">{errors.station_incharge_officer}</span>)}

              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  class="form-control user_inp "
                  id="exampleFormControlInput1"
                  placeholder="Total Officers"
                  name="total_officers"
                  value={values.total_officers} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                />
                 {errors.total_officers && touched.total_officers && (<span className="text-danger">{errors.total_officers}</span>)}
             
              </div>
             
              
              <div className="col-6 mt-2">
                <input
                  type="email"
                  class="form-control user_inp "
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  name="email"
                  value={values.email} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (<span className="text-danger">{errors.email}</span>)}

              </div>
               
              <div className="col-6 mt-2">
                    <input
                    type="text"
                    class="form-control user_inp "
                    id="exampleFormControlInput1"
                    placeholder="Contact"
                    name="contact"
                    value={values.contact} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    />
              {errors.contact && touched.contact && (<span className="text-danger">{errors.contact}</span>)}

                </div>
               
                <div className="col-6 mt-2">
                    <input
                    type="text"
                    class="form-control user_inp "
                    id="exampleFormControlInput1"
                    placeholder="District"
                    name="district"
                    value={values.district} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    />
              {errors.district && touched.district && (<span className="text-danger">{errors.district}</span>)}

                </div>
                <div className="col-6 mt-2">
                    <input
                    type="text"
                    class="form-control user_inp "
                    id="exampleFormControlInput1"
                    placeholder="State"
                    name="state"
                    value={values.state} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    />
              {errors.state && touched.state && (<span className="text-danger">{errors.state}</span>)}

                </div>
                
                <div className="col-6 mt-2">
                    <input
                    type="text"
                    class="form-control user_inp "
                    id="exampleFormControlInput1"
                    placeholder="Password"
                    name="password"
                    value={values.password} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    />
              {errors.password && touched.password && (<span className="text-danger">{errors.password}</span>)}

                </div>
                <div className="col-6 mt-2">
                    <input
                    type="text"
                    class="form-control user_inp "
                    id="exampleFormControlInput1"
                    placeholder="Confirm Password"
                    name="confirm_password"
                    value={values.confirm_password} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    />
              {errors.confirm_password && touched.confirm_password && (<span className="text-danger">{errors.confirm_password}</span>)}

                </div>
                <div className="col-12 mt-2">
                    <button type="submit" className="btn btn-secondary w-100 mt-3" onClick={handleSubmit}>
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
