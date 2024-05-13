import React from "react";
import "../../Assets/Styles/CitizenLogin.css";
import img from "../../Assets/Images/loginpage.jpg";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import { LoginSchema } from "../Constants/Schema";

function CitizenLogin() {

  const onSubmit = (values) => {

    console.log(values);

  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: onSubmit
  });

  return (
    <div>
      <div className="container">
        <div className="row citizen_login_box">
          <div className="col-lg-7 col-md-4 col-sm-6 citizen_login_left"></div>
          <div className="col-lg-5 col-md-8 col-sm-6 citizen_login_right">
            <h2 className="citizen_login_title">Citizen Login</h2>
            <div className="citizen_login_input_grp">
              <input
                type="email"
                className="form-control user_inp"
                id="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (<span className="text-danger">{errors.email}</span>)}
              <input
                type="password"
                className="form-control user_inp mt-3"
                id="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (<span className="text-danger">{errors.password}</span>)}

              <p className="text-end"><Link to='/citizen_forgotpassword' >Forgot Password?</Link></p>

              <button type="submit" className="btn btn-secondary w-100 mt-3" onClick={handleSubmit}>
                Login
              </button>
              <p>Don't have an account? <Link to='/citizen_register' >Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CitizenLogin;
