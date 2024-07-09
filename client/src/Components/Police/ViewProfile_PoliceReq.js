import React, { useEffect, useState } from 'react';
import axiosInstance from '../Constants/BaseUrl';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import station from '../../Assets/Images/policestation.png';
import { useFormik } from 'formik';
import { PoliceRegistrationSchema } from '../Constants/Schema';

function ViewProfile_PoliceReq() {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

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
      });
  }, [id]);

  const handleApprove = () => {
    axiosInstance.post(`/acceptPoliceById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setUserDetails({ ...userDetails, adminApproved: true });
          navigate("/newpolicestationreq")
        } else {
          console.error("Failed to approve");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleReject = () => {
    axiosInstance.post(`/rejectPoliceById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setUserDetails({ ...userDetails, adminApproved: false });
          navigate("/newpolicestationreq")
        } else {
          console.error("Failed to reject");
        }
      })
      .catch((error) => {
        console.error("Error", error);
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
    idProof: userDetails.idProof || '',
  };

  const { values } = useFormik({
    initialValues: initialPoliceDetails,
    validationSchema: PoliceRegistrationSchema,
    enableReinitialize: true,
  });

  return (
    <div className='container'>
      <div className='pt-5'>
          <h4 className='admin-dash-h4'>Welcome Admin</h4>
          <p className='admin-dash-para'>All System are running smoothly</p>
        </div>

    <div className='viewprofile_policereq container'>
      
      <div className="citizen_profile">
        <div className="container citizen_profile_body">
          <form>
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
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <input
                      type="text"
                      className="form-control user_inp"
                      id="policestationcode"
                      placeholder="Police Station Code"
                      name="policestationcode"
                      value={values.policestationcode}
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <input
                      type="text"
                      className="form-control user_inp"
                      id="address"
                      placeholder="Address"
                      name="address"
                      value={values.address}
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <input
                      type="text"
                      className="form-control user_inp"
                      id="stationchargeofficers"
                      placeholder="Station Charge Officers"
                      name="stationchargeofficers"
                      value={values.stationchargeofficers}
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <input
                      type="number"
                      className="form-control user_inp"
                      id="contact"
                      placeholder="Contact"
                      name="contact"
                      value={values.contact}
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <input
                      type="text"
                      className="form-control user_inp"
                      id="totalofficers"
                      placeholder="Total Officers"
                      name="totalofficers"
                      value={values.totalofficers}
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <input
                      type="text"
                      className="form-control user_inp"
                      id="district"
                      placeholder="District"
                      value={values.district}
                      name="district"
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="email"
                      className="form-control user_inp"
                      id="email"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                    />
                  </div>

                  <div className="col-12 mt-2 text-center">
                      <button
                        type="button"
                        className='ms-4 viewprofile_policestation_tick_icon'
                        onClick={handleApprove}
                      >
                        Approve
                      </button>

                      <button
                        type="button"
                        className='ms-4 viewprofile_policestation_cross_icon'
                        onClick={handleReject}
                      >
                        Reject
                      </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ViewProfile_PoliceReq;
