import React, { useEffect, useState } from "react";
import "../../Assets/Styles/CitizenLogin.css";
import axiosInstance from "../Constants/BaseUrl";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { AddCrimeSchema } from "../Constants/Schema";

function ReportCrime() {
  const [viewPoliceStation, setViewPoliceStation] = useState([]);
  const [selectedCaseType, setSelectedCaseType] = useState("");

  const districts = [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad",
  ];

  const caseTypes = [
    "Theft",
    "Assault",
    "Vandalism",
    "Missing Person",
    "Domestic Violence",
    "Fraud",
    "Others",
  ];

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        district: "",
        policeStation: "",
        victimName: "",
        victimGender: "",
        victimEmail: "",
        victimAddress: "",
        incidentDate: "",
        incidentTime: "",
        incidentLocation: "",
        incidentCity: "",
        witnessName: "",
        witnessContact: "",
        witnessAddress: "",
        witnessStatement: "",
        caseDescription: "",
        caseType: "",
        theftStolenItems: "",
        theftStolenSuspected: "",
        assaultInjuries: "",
        assaultMedicalAttention: "",
        vandalismDescription: "",
        vandalismCostOfDamage: "",
        missingPersonName: "",
        missingPersonDescription: "",
        domesticViolenceDescription: "",
        domesticViolenceInjuries: "",
        fraudDescription: "",
        fraudFinancialLoss: "",
        others: "",
        evidenceFile: [],
      },
      validationSchema: AddCrimeSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const handleCaseTypeChange = (e) => {
    handleChange(e);
    setSelectedCaseType(e.target.value);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFieldValue("evidenceFile", files);
  };

  useEffect(()=>{
    axiosInstance
      .post(`/viewPoliceByDistrict/${values.district}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setViewPoliceStation(res.data.data||[]);
        }
      })
      .catch((err) => {
        console.log("Failed to fetch user details");
      });
  },[values.district])


  return (
    <div className="mb-5">
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="text-center text-danger mt-5 mb-5">
          <h4 className="report-crime-h4">Report a Crime</h4>
        </div>
        <div className="report-crime-box container mt-5">
          <div className="container mt-5">
            <div className="row">
              <div className="col-6">
                <select
                  className="report-crime-textbox ps-3"
                  name="district"
                  value={values.district}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
                {touched.district && errors.district && (
                  <div className="error-message">{errors.district}</div>
                )}
              </div>
              <div className="col-6">
                <select
                  className="report-crime-textbox ps-3"
                  name="policeStation"
                  value={values.policeStation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Select Police Station</option>
                  {viewPoliceStation.map((station, index) => (
                    <option key={index} value={station._id}>
                      {station.policestationname}
                    </option>
                  ))}
                </select>
                {touched.policeStation && errors.policeStation && (
                  <div className="error-message">{errors.policeStation}</div>
                )}
              </div>
            </div>
          </div>
          <div className=" text-center ">
            <div className="report-crime-victim  mt-4 pt-2">
              <span className="report-crime-victim-span">Crime Details</span>
            </div>
          </div>
          <div className="row container">
            <div className="col mt-3">
              <div>
                <label>Case Description </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="report-crime-textbox ps-3"
                  name="caseDescription"
                  value={values.caseDescription}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {touched.caseDescription && errors.caseDescription && (
                  <div className="error-message">{errors.caseDescription}</div>
                )}
              </div>
            </div>
            <div className="col mt-3">
              <div>
                <label>Select Type </label>
              </div>
              <div className="mt-2">
                <select
                  className="report-crime-textbox ps-3"
                  name="caseType"
                  value={values.caseType}
                  onChange={handleCaseTypeChange}
                  onBlur={handleBlur}
                >
                  <option>Select Type</option>
                  {caseTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {touched.caseType && errors.caseType && (
                  <div className="error-message">{errors.caseType}</div>
                )}
              </div>
            </div>
          </div>
          {selectedCaseType === "Theft" && (
            <div className="row container">
              <div className="col mt-3">
                <div>
                  <label>Stolen Items</label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="report-crime-textbox ps-3"
                    name="theftStolenItems"
                    value={values.theftStolenItems}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
                  
                </div>
              </div>
              <div className="col mt-3">
                <div>
                  <label>Suspected Perpetrator (Description)</label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="report-crime-textbox ps-3"
                    name="theftStolenSuspected"
                    value={values.theftStolenSuspected}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
                 
                </div>
              </div>
            </div>
          )}
          {selectedCaseType === "Assault" && (
            <div className="row container">
              <div className="col mt-3">
                <div>
                  <label>Injuries Sustained (Description)</label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="report-crime-textbox ps-3"
                    name="assaultInjuries"
                    value={values.assaultInjuries}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
                  
                </div>
              </div>
              <div className="col mt-3">
                <div>
                  <label>Medical Attention</label>
                </div>
                <div className="mt-2">
                  <select
                    className="report-crime-textbox ps-3"
                    name="assaultMedicalAttention"
                    value={values.assaultMedicalAttention}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  
                </div>
              </div>
            </div>
          )}

          {selectedCaseType === "Vandalism" && (
            <div className="row container">
              <div className="col mt-3">
                <div>
                  <label>Description of Vandalism</label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="report-crime-textbox ps-3"
                    name="vandalismDescription"
                    value={values.vandalismDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
                
                </div>
              </div>
              <div className="col mt-3">
                <div>
                  <label>Cost of Damage</label>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    className="report-crime-textbox ps-3"
                    name="vandalismCostOfDamage"
                    value={values.vandalismCostOfDamage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>

                </div>
              </div>
            </div>
          )}
          {selectedCaseType === "Missing Person" && (
            <div className="row container">
              <div className="col mt-3">
                <div>
                  <label>Missing Person Name</label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="report-crime-textbox ps-3"
                    name="missingPersonName"
                    value={values.missingPersonName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
             
                </div>
              </div>
              <div className="col mt-3">
                <div>
                  <label>Missing Person Description</label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="report-crime-textbox ps-3"
                    name="missingPersonDescription"
                    value={values.missingPersonDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
             
                </div>
              </div>
            </div>
          )}

          {selectedCaseType === "Domestic Violence" && (
            <div className="row container">
              <div className="col mt-3">
                <div>
                  <label>Description of Violence</label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="report-crime-textbox ps-3"
                    name="domesticViolenceDescription"
                    value={values.domesticViolenceDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
           
                </div>
              </div>
              <div className="col mt-3">
                <div>
                  <label>Injuries Sustained (Description)</label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="report-crime-textbox ps-3"
                    name="domesticViolenceInjuries"
                    value={values.domesticViolenceInjuries}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
           
                </div>
              </div>
            </div>
          )}

          {selectedCaseType === "Fraud" && (
            <div className="row container">
              <div className="col mt-3">
                <div>
                  <label>Description of Fraud</label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="report-crime-textbox ps-3"
                    name="fraudDescription"
                    value={values.fraudDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
                
                </div>
              </div>
              <div className="col mt-3">
                <div>
                  <label>Financial Loss (Amount)</label>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    className="report-crime-textbox ps-3"
                    name="fraudFinancialLoss"
                    value={values.fraudFinancialLoss}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
                
                </div>
              </div>
            </div>
          )}

          {selectedCaseType === "Others" && (
            <div className="row container">
              <div className="col mt-3">
                <div>
                  <label>Description</label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="report-crime-textbox ps-3"
                    name="others"
                    value={values.others}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></input>
                
                </div>
              </div>
            </div>
          )}
          <div className="text-center ">
            <div className="report-crime-victim mt-4 pt-2">
              <span className="report-crime-victim-span">
                Victim Information
              </span>
            </div>
          </div>
          <div className="row container">
            <div className="col mt-3">
              <div>
                <label>Name</label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="report-crime-textbox ps-3"
                  name="victimName"
                  value={values.victimName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  
                ></input>
                {touched.victimName && errors.victimName && (
                  <div className="error-message">{errors.victimName}</div>
                )}
              </div>
              <div className="mt-3">
                <label>Email</label>
              </div>
              <div>
                <input
                  type="email"
                  className="report-crime-textbox ps-3"
                  name="victimEmail"
                  value={values.victimEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {touched.victimEmail && errors.victimEmail && (
                  <div className="error-message">{errors.victimEmail}</div>
                )}
              </div>
            </div>
            <div className="col mt-3">
              <div>
                <label>Gender</label>
              </div>
              <div className="mt-2">
                <select
                  className="report-crime-textbox ps-3"
                  name="victimGender"
                  value={values.victimGender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
                {touched.victimGender && errors.victimGender && (
                  <div className="error-message">{errors.victimGender}</div>
                )}
              </div>
              <div className="mt-3">
                <label>Address</label>
              </div>
              <div>
                <input
                  type="text"
                  className="report-crime-textbox ps-3"
                  name="victimAddress"
                  value={values.victimAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {touched.victimAddress && errors.victimAddress && (
                  <div className="error-message">{errors.victimAddress}</div>
                )}
              </div>
            </div>
          </div>
          <div className=" text-center ">
            <div className="report-crime-victim  mt-4 pt-2">
              <span className="report-crime-victim-span">Incident Details</span>
            </div>
          </div>
          <div className="row container">
            <div className="col mt-3">
              <div>
                <label>Date</label>
              </div>
              <div className="mt-2">
                <input
                  type="date"
                  className="report-crime-textbox ps-3"
                  name="incidentDate"
                  value={values.incidentDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {touched.incidentDate && errors.incidentDate && (
                  <div className="error-message">{errors.incidentDate}</div>
                )}
              </div>
              <div className="mt-3">
                <label>Location</label>
              </div>
              <div>
                <input
                  type="text"
                  className="report-crime-textbox ps-3"
                  name="incidentLocation"
                  value={values.incidentLocation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {touched.incidentLocation && errors.incidentLocation && (
                  <div className="error-message">{errors.incidentLocation}</div>
                )}
              </div>
            </div>
            <div className="col mt-3">
              <div>
                <label>Time</label>
              </div>
              <div className="mt-2">
                <input
                  type="time"
                  className="report-crime-textbox ps-3"
                  name="incidentTime"
                  value={values.incidentTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {touched.incidentTime && errors.incidentTime && (
                  <div className="error-message">{errors.incidentTime}</div>
                )}
              </div>
              <div className="mt-3">
                <label>City</label>
              </div>
              <div>
                <input
                  type="text"
                  className="report-crime-textbox ps-3"
                  name="incidentCity"
                  value={values.incidentCity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {touched.incidentCity && errors.incidentCity && (
                  <div className="error-message">{errors.incidentCity}</div>
                )}
              </div>
            </div>
          </div>
          <div className=" text-center ">
            <div className="report-crime-victim  mt-4 pt-2">
              <span className="report-crime-victim-span">Evidence Details</span>
            </div>
          </div>
          <div className="row container">
          <div className="col mt-3">
              <div>
                <label>Evidence Upload</label>
              </div>
              <div className="mt-2">
              <input
  type="file"
  className="report-crime-textbox ps-3"
  name="evidenceFile"
  multiple
  onChange={handleFileChange}
  onBlur={handleBlur}
/>
{touched.evidenceFile && errors.evidenceFile && (
  <div className="error-message">{errors.evidenceFile}</div>
)}
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="report-crime-victim mt-4 pt-2">
              <span className="report-crime-victim-span">Witness Details</span>
            </div>
          </div>
          <div className="row container">
            <div className="col mt-3">
              <div>
                <label>Witness Name</label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="report-crime-textbox ps-3"
                  name="witnessName"
                  value={values.witnessName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.witnessName && errors.witnessName && (
                  <div className="error-message">{errors.witnessName}</div>
                )}
              </div>
              <div className="mt-3">
                <label>Address</label>
              </div>
              <div>
                <input
                  type="text"
                  className="report-crime-textbox ps-3"
                  name="witnessAddress"
                  value={values.witnessAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.witnessAddress && errors.witnessAddress && (
                  <div className="error-message">{errors.witnessAddress}</div>
                )}
              </div>
            </div>
            <div className="col mt-3">
              <div>
                <label>Contact</label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="report-crime-textbox ps-3"
                  name="witnessContact"
                  value={values.witnessContact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.witnessContact && errors.witnessContact && (
                  <div className="error-message">{errors.witnessContact}</div>
                )}
              </div>
              <div className="mt-3">
                <label>Witness Statement</label>
              </div>
              <div>
                <input
                  type="text"
                  className="report-crime-textbox ps-3"
                  name="witnessStatement"
                  value={values.witnessStatement}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.witnessStatement && errors.witnessStatement && (
                  <div className="error-message">{errors.witnessStatement}</div>
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <button type="submit" className="report-crime-crimebtn">
              Add Crime
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReportCrime;
