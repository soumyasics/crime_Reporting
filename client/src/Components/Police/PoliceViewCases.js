import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoMdEye } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import './Police.css';
import axiosInstance from '../Constants/BaseUrl';
import { Link, useNavigate, useParams } from 'react-router-dom';

function PoliceViewCases() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const policestationname = localStorage.getItem('policestationName');
    if (!policestationname) {
      navigate('/');
    } else {
      getData(policestationname);
    }
  }, [navigate]);

  const getData = (policestationname) => {
    console.log(policestationname)
    axiosInstance.post('/viewCaseByPolicestation', { policestationname })
      .then((res) => {
        if (res.data.status === 200) {
          setData(res.data.data || []);
        } else if (res.data.status === 404) {
          setData([]);
          console.log("No data found for this police station");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const handleApprove = (caseId) => {
    axiosInstance.post(`/acceptCrimeById/${caseId}`)
      .then((res) => {
        if (res.data.status === 200) {
          setData(data.map(caseData => 
            caseData._id === caseId ? { ...caseData, adminApproved: true } : caseData
          ));
          navigate("/policeviewcases");
          window.location.reload();
        } else {
          console.error("Failed to approve");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleReject = (caseId) => {
    axiosInstance.post(`/rejectCrimeById/${caseId}`)
      .then((res) => {
        if (res.data.status === 200) {
          console.log("Rejected")
          navigate("/policeviewcases");
          window.location.reload();
        } else {
          console.error("Failed to reject");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div className='container mb-5 police_view_case_main'>
      <div className='container ms-5 mt-5 text-danger'>
        <h4>Recent Cases</h4>
      </div>
      <div>
        {data.length===0 && (
          <h1>No Data Found</h1>
        )}
        {data.length>0 && (
        <table className="table table-striped border">
          <thead>
            <tr>
              <th>Victim Name</th>
              <th>Type of Crime</th>
              <th>Witness Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>No of Suspects</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((caseData) => (
              <tr key={caseData._id}>
                <td>{caseData.victimname}</td>
                <td>{caseData.crimetype}</td>
                <td>{caseData.witnessname}</td>
                <td>{caseData.incidentdate}</td>
                <td>{caseData.incidentlocation}</td>
                <td>{caseData.numofsuspect}</td>
                <td>
                  <button className='policeview-cases-cross' onClick={() => handleReject(caseData._id)}><RxCross2 /></button>
                  <button className='policeview-cases-tick ms-3' onClick={() => handleApprove(caseData._id)}><TiTick /></button>
                  <Link to={`/casedetails/${caseData._id}`}><button className='policeview-cases-eye ms-3'><IoMdEye /></button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
    </div>
  );
}

export default PoliceViewCases;
