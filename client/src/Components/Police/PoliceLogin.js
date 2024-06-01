import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { LoginSchema } from "../Constants/Schema";
import policelogin from '../../Assets/Images/policelogin.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PoliceLogin() {

  const onSubmit = (values) => {
    // Handle login submission
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
      <Row>
        <Col className='container'>
          <img className='image' src={policelogin} alt='img'></img>
        </Col>
        <Col className='container'>
        <h2 className="policelog" >Police Login</h2>
             <div className="citizen_login_input_grp">
               <input 
                type="email" 
                className="form-control user_inp" 
                id="password" 
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

              <p className="text-end"><Link to='/police_forgotpassword' >Forgot Password?</Link></p>

              <button type="submit" className="btnlogin" onClick={handleSubmit}>
                Login
              </button>
              <p>Don't have an account? <Link to='/police_register'>Register</Link></p>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default PoliceLogin
