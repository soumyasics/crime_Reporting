import React, { useEffect, useState } from "react";
import "../../Assets/Styles/CitizenProfile.css";
import { useFormik } from "formik";
import { CitizenRegistrationSchema } from "../Constants/Schema";
import axiosInstance from "../Constants/BaseUrl";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function CitizenProfile() { 
  const [userDetails, setUserDetails] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("citizenToken") == null) {
      navigate("/");
    }
  });

  const id=localStorage.getItem('citizenToken')

  useEffect(() => {
    axiosInstance
      .post(`/viewCitizenById/${id}`)
      .then((res) => {
        console.log("woking", res);
        if (res.data.status === 200) {
          setUserDetails(res.data.data);
        }
      })
      .catch((err) => {
        toast.error("Registration Failed");
      });
  }, []);

  const onSubmit = (e) => {
    const { confirmPassword, ...dataToSend } = values;
    console.log("Submitting data:", dataToSend); 

    axiosInstance
      .post(`/editCitizenById/${id}`, dataToSend)
      .then((res) => {
        console.log("Response:", res);
        if (res.data.status === 200) {
          toast.success("Updated Successfully");
        } else if (res.data.status == 409) {
          toast.warning(res.data.msg);
        } else if (res.data.status == 500) {
          toast.warning(res.data.msg);
        }
      })
      .catch((err) => {
        console.error("Error:", err); 
        toast.error("Updation Failed");
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const formattedDate = userDetails.dob ? formatDate(userDetails.dob) : "";

  const initialUserDetails = {
    firstname: userDetails.firstname,
    lastname: userDetails.lastname,
    email: userDetails.email,
    dob: formattedDate, 
    contact: userDetails.contact,
    aadhar: userDetails.aadhar,
    password: userDetails.password, 
    housename: userDetails.housename,
    street: userDetails.street,
    state: userDetails.state,
    nationality: userDetails.nationality,
    pincode: userDetails.pincode,
    gender: userDetails.gender, 
    confirmPassword: userDetails.password,
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: initialUserDetails,
    validationSchema: CitizenRegistrationSchema,
    onSubmit,
    enableReinitialize: true, 
  });

  console.log(values);

  return (
    <div className="citizen_profile">
      <div className="citizen_profile_head">
        <div className="container citizen_profile_title d-flex justify-content-between">
          <div >
            <h4>PROFILE</h4>
            <p>
              {values.firstname} {values.lastname}
            </p>
          </div>
          {/* <Link to={'/'} onClick={()=>{localStorage.clear()}} > <h6 className="text-dark fw-bold"   >Logout</h6></Link> */}
        </div>
      </div>
      <div className="container citizen_profile_body">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                class="form-control user_inp "
                id="firstname"
                placeholder="First Name"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstname && touched.firstname && (
                <span className="text-danger">{errors.firstname}</span>
              )}
            </div>

            <div className="col-6">
              <input
                type="text"
                class="form-control user_inp "
                id="exampleFormControlInput1"
                placeholder="Second Name"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastname && touched.lastname && (
                <span className="text-danger">{errors.lastname}</span>
              )}
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
              {errors.email && touched.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="col-6 d-flex justify-content-between mt-2">
              <label>Date of Birth</label>
              <input
                type="date"
                class="form-control user_inp "
                id="exampleFormControlInput1"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dob && touched.dob && (
                <span className="text-danger">{errors.dob}</span>
              )}
            </div>
            <div className="col-6 mt-2">
              <input
                type="number"
                class="form-control user_inp "
                id="exampleFormControlInput1"
                placeholder="Contact"
                name="contact"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.contact && touched.contact && (
                <span className="text-danger">{errors.contact}</span>
              )}
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                class="form-control user_inp "
                id="exampleFormControlInput1"
                placeholder="Aadhaar"
                name="aadhar"
                value={values.aadhar}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.aadhar && touched.aadhar && (
                <span className="text-danger">{errors.aadhar}</span>
              )}
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                class="form-control user_inp "
                id="exampleFormControlInput1"
                placeholder="House Name"
                name="housename"
                value={values.housename}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.housename && touched.housename && (
                <span className="text-danger">{errors.housename}</span>
              )}
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                class="form-control user_inp "
                id="exampleFormControlInput1"
                placeholder="Street Name"
                name="street"
                value={values.street}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.street && touched.street && (
                <span className="text-danger">{errors.street}</span>
              )}
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                class="form-control user_inp "
                id="exampleFormControlInput1"
                placeholder="State"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                name="state"
              />
              {errors.state && touched.state && (
                <span className="text-danger">{errors.state}</span>
              )}
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                class="form-control user_inp "
                id="exampleFormControlInput1"
                placeholder="Nationality"
                value={values.nationality}
                onChange={handleChange}
                onBlur={handleBlur}
                name="nationality"
              />
              {errors.nationality && touched.nationality && (
                <span className="text-danger">{errors.nationality}</span>
              )}
            </div>
            <div className="col-6 mt-2">
              <input
                type="number"
                class="form-control user_inp "
                id="pincode"
                placeholder="Pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
                name="pincode"
              />
              {errors.pincode && touched.pincode && (
                <span className="text-danger">{errors.pincode}</span>
              )}
            </div>

            <div className="col-12 mt-2 text-center">
              <button type="submit" className="button_bg w-25 mt-3">
                Update
              </button>
              {errors.gender && touched.gender && (
                <span className="text-danger">{errors.gender}</span>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CitizenProfile;
