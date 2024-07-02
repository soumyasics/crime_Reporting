import React, { useEffect, useState } from 'react';
import './Police.css';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { PoliceRegistrationSchema } from '../Constants/Schema';
import station from '../../Assets/Images/policestation.png';

function PoliceProfile() {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("policeId") == null) {
      navigate("/");
    }
  }, [navigate]);

  const id = localStorage.getItem('policeId');

  useEffect(() => {
    axiosInstance
      .post(`/viewpolice/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setUserDetails(res.data.data);
        }
      })
      .catch((err) => {
        toast.error("Failed to fetch user details");
        console.error("Error fetching police details:", err);
      });
  }, [id]);

  const onSubmit = (values) => {
    const { confirmPassword, ...dataToSend } = values;
    console.log(dataToSend);
    axiosInstance.post(`/editPoliceById/${id}`, dataToSend)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast.success("Updated Successfully");
        } else {
          toast.warning(res.data.msg);
        }
      })
      .catch((err) => {
        toast.error("Updation Failed");
        console.error("Error updating police details:", err);
      });
  };

  const initialPoliceDetails = {
    policestationname: userDetails.policestationname || '',
    policestationcode: userDetails.policestationcode || '',
    stationchargeofficers: userDetails.stationchargeofficers || '',
    totalofficers: userDetails.totalofficers || '',
    aadhar: userDetails.aadhar || '',
    password: userDetails.password || '',
    address: userDetails.address || '',
    contact: userDetails.contact || '',
    district: userDetails.district || '',
    email: userDetails.email || '',
    idProof: userDetails.idProof,
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialPoliceDetails,
    validationSchema: PoliceRegistrationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <div className="citizen_profile">
      <div className="citizen_profile_head navbar_bg">
        <div className="container citizen_profile_title d-flex justify-content-between">
          <div className="citizen_profile_name">
            <h4>PROFILE</h4>
            <p>{values.policestationname}</p>
          </div>
        </div>
      </div>
      <div className="container citizen_profile_body">
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <div className='row'>
            <div className='col-6'>
              <img src={station} className='img-fluid' alt="station" />
            </div>
            <div className='col-6'>
              <div className="row">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control user_inp"
                    id="policestationname"
                    placeholder="Police Station Name"
                    name="policestationname"
                    value={values.policestationname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.policestationname && touched.policestationname && (
                    <span className="text-danger">{errors.policestationname}</span>
                  )}
                </div>
                <div className="col-6 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp"
                    id="policestationcode"
                    placeholder="Police Station Code"
                    name="policestationcode"
                    value={values.policestationcode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.policestationcode && touched.policestationcode && (
                    <span className="text-danger">{errors.policestationcode}</span>
                  )}
                </div>
                <div className="col-6 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp"
                    id="address"
                    placeholder="Address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address && (
                    <span className="text-danger">{errors.address}</span>
                  )}
                </div>
                <div className="col-6 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp"
                    id="stationchargeofficers"
                    placeholder="Station Charge Officers"
                    name="stationchargeofficers"
                    value={values.stationchargeofficers}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.stationchargeofficers && touched.stationchargeofficers && (
                    <span className="text-danger">{errors.stationchargeofficers}</span>
                  )}
                </div>
                <div className="col-6 mt-2">
                  <input
                    type="number"
                    className="form-control user_inp"
                    id="contact"
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
                    className="form-control user_inp"
                    id="totalofficers"
                    placeholder="Total Officers"
                    name="totalofficers"
                    value={values.totalofficers}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.totalofficers && touched.totalofficers && (
                    <span className="text-danger">{errors.totalofficers}</span>
                  )}
                </div>
                <div className="col-6 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp"
                    id="district"
                    placeholder="District"
                    value={values.district}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="district"
                  />
                  {errors.district && touched.district && (
                    <span className="text-danger">{errors.district}</span>
                  )}
                </div>
                <div className="col-12 mt-2">
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
                  {errors.email && touched.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>
                <div className="col-12 mt-2 text-center">
                  <button type="submit" className="button_bg w-25 mt-3">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PoliceProfile;
