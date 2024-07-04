import React, { useEffect, useState } from 'react'
import CaseDetails from '../Police/CaseDetails'
import { useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { toast } from 'react-toastify';

function UpdateCrimeReport() {
    const [caseDetails, setCaseDetails] = useState({});
    const { id } = useParams();

  useEffect (() => {
    axiosInstance
      .post(`/viewCrimeById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
            setCaseDetails(res.data.data);
        }
      })
      .catch((err) => {
        toast.error("Failed to fetch user details");
      });
  }, [id]);

  return (
    <div>
        <div className='mb-5'>
      <form 
    //   onSubmit={handleSubmit}
      >
      <div className='text-center text-danger mt-5 mb-5'>
        <h4 className='report-crime-h4'>Report a Crime</h4>
      </div>
      <div className='report-crime-box container mt-5'>
        <div className='container mt-5'>
            <input type='text'
            className='report-crime-textbox ps-3'
            placeholder='Select a Police Station '
            name='policestationname'
            // onChange={handleChange}
            value={caseDetails.policestationname}
            ></input>
            {/* {errors.policestationname && <div className="text-danger">{errors.policestationname}</div>} */}

        </div>
        <div className=' text-center '>
            <div className='report-crime-victim  mt-4 pt-2'>
                <span className='report-crime-victim-span'>Victim Information</span>
            </div>
        </div>
        <div className='row container'>
          <div className='col mt-3'>
            <div>
              <label>Name</label>
            </div>
            <div className='mt-2'>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='victimname'
            //   onChange={handleChange}
              value={caseDetails.victimname}
              ></input>
              {/* {errors.victimname && <div className="text-danger">{errors.victimname}</div>} */}

            </div>
            <div className='mt-3'>
              <label>Email</label>
            </div>
            <div>
              <input type='email'
              className='report-crime-textbox ps-3'
              name='victimemail'
            //   onChange={handleChange}
              value={caseDetails.victimemail}
              ></input>
            {/* {errors.victimemail && <div className="text-danger">{errors.victimemail}</div>} */}

            </div>
          </div>
          <div className='col mt-3'>
          <div>
              <label>Gender</label>
            </div>
            <div className='mt-2'>
              <select
              className='report-crime-textbox ps-3'
              name='victimgender'
            //   onChange={handleChange}
              value={caseDetails.victimgender}
              >
                  <option selected>Open this select menu</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='others'>Others</option>
              </select>
            </div>
            <div className='mt-3'>
              <label>Address</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='victimaddress'
            //   onChange={handleChange}
              value={caseDetails.victimaddress}
              ></input>
            </div>
          </div>
        </div>
        <div className=' text-center '>
            <div className='report-crime-victim  mt-4 pt-2'>
                <span className='report-crime-victim-span'>Incident Details</span>
            </div>
        </div>
        <div className='row container'>
          <div className='col mt-3'>
            <div>
              <label>Date</label>
            </div>
            <div className='mt-2'>
              <input type='date'
              className='report-crime-textbox ps-3'
              name='incidentdate'
            //   onChange={handleChange}
              value={caseDetails.incidentdate}
              ></input>
             {/* {errors.incidentdate && <div className="text-danger">{errors.incidentdate}</div>} */}

            </div>
            <div className='mt-3'>
              <label>Location</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='incidentlocation'
            //   onChange={handleChange}
              value={caseDetails.incidentlocation}
              ></input>
             {/* {errors.incidentlocation && <div className="text-danger">{errors.incidentlocation}</div>} */}

            </div>
          </div>
          <div className='col mt-3'>
          <div>
              <label>Time</label>
            </div>
            <div className='mt-2'>
              <input type='time'
              className='report-crime-textbox ps-3'
              name='incidenttime'
            //   onChange={handleChange}
              value={caseDetails.incidenttime}
              ></input>
              {/* {errors.incidenttime && <div className="text-danger">{errors.incidenttime}</div>} */}

            </div>
            <div className='mt-3'>
              <label>City</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='incidentcity'
            //   onChange={handleChange}
              value={caseDetails.incidentcity}
              ></input>
            </div>
          </div>
        </div>
        <div className=' text-center '>
            <div className='report-crime-victim  mt-4 pt-2'>
                <span className='report-crime-victim-span'>Crime  Details</span>
            </div>
        </div>
        <div className='row container'>
          <div className='col mt-3'>
            <div>
              <label>Select Type </label>
            </div>
            <div className='mt-2'>
              <select type='text'
              className='report-crime-textbox ps-3'
              name='crimetype'
            //   onChange={handleChange}
              value={caseDetails.crimetype}
              >
                <option selected>Open this select menu</option>
                <option value='theft'>Theft</option>
                <option value='burglary'>Burglary</option>
                <option value='robbery'>Robbery</option>
                <option value='assault'>Assault</option>
                <option value='vandalism'>Vandalism</option>
                <option value='fraud'>Fraud</option>
              </select>
              {/* {errors.crimetype && <div className="text-danger">{errors.crimetype}</div>} */}

            </div>
          </div>
          <div className='col mt-3'>
          <div>
              <label>Item Stolen  </label>
            </div>
            <div className='mt-2'>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='crimeitem'
            //   onChange={handleChange}
              value={caseDetails.crimeitem}
              ></input>
            </div>
          </div>
        </div>
        <div className=' text-center '>
            <div className='report-crime-victim  mt-4 pt-2'>
                <span className='report-crime-victim-span'>Evidence Details</span>
            </div>
        </div>
        <div className='row container'>
          <div className='col mt-3'>
            <div>
              <label>Upload Audio</label>
            </div>
            <div className='mt-2'>
              <input type='file'
              className='report-crime-textbox file_border ps-3 p-1'
              name='audioevidence'
              ></input>
            </div>
            <div className='mt-3'>
              <label>Upload Photos</label>
            </div>
            <div>
              <input type='file'
              className='report-crime-textbox file_border ps-3 p-1'
              name='photoevidence'
              ></input>
            </div>
          </div>
          <div className='col mt-3'>
          <div>
              <label>Upload Video</label>
            </div>
            <div className='mt-2'>
              <input type='file'
              className='report-crime-textbox file_border ps-3 p-1'
              name='videoevidence'
              ></input>
            </div>
            <div className='mt-3'>
              <label>Description</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='evidencedescription'
            //   onChange={handleChange}
              value={caseDetails.evidencedescription}
              ></input>
            </div>
          </div>
        </div>
        <div className=' text-center '>
            <div className='report-crime-victim  mt-4 pt-2'>
                <span className='report-crime-victim-span'>Witness Details</span>
            </div>
        </div>
        <div className='row container'>
          <div className='col mt-3'>
            <div>
              <label>Witness Name</label>
            </div>
            <div className='mt-2'>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='witnessname'
            //   onChange={handleChange}
              value={caseDetails.witnessname}
              ></input>
            </div>
            <div className='mt-3'>
              <label>Address</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='witnessaddress'
            //   onChange={handleChange}
              value={caseDetails.witnessaddress}
              ></input>
            </div>
          </div>
          <div className='col mt-3'>
          <div>
              <label>Contact</label>
            </div>
            <div className='mt-2'>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='witnesscontact'
            //   onChange={handleChange}
              value={caseDetails.witnesscontact}
              ></input>
              {/* {errors.witnesscontact && <div className="text-danger">{errors.witnesscontact}</div>} */}

            </div>
            <div className='mt-3'>
              <label>Witness Statement</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='witnessstatement'
            //   onChange={handleChange}
              value={caseDetails.witnessstatement}
              ></input>
            </div>
          </div>
        </div>
        <div className=' text-center '>
            <div className='report-crime-victim  mt-4 pt-2'>
                <span className='report-crime-victim-span'>Suspect Information</span>
            </div>
        </div>
        <div className='row container'>
          <div className='col mt-3'>
            <div>
              <label>No of Supects</label>
            </div>
            <div className='mt-2'>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='numofsuspect'
            //   onChange={handleChange}
              value={caseDetails.numofsuspect}
              ></input>
            </div>
          </div>
          <div className='col mt-3'>
          <div>
              <label>Physical Description</label>
            </div>
            <div className='mt-2'>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='physicaldescription'
            //   onChange={handleChange}
              value={caseDetails.physicaldescription}
              ></input>
            </div>
          </div>
        </div>
        <div className=' text-center '>
            <div className='report-crime-victim  mt-4 pt-2'>
                <span className='report-crime-victim-span'>Additional Inforamtion</span>
            </div>
        </div>
        <div className='container mt-4'>
          <div>
            <label>Comments</label>
          </div>
          <div>
            <input type='text'
            className='report-crime-textbox1 mt-2 ps-3'
            name='comments'
            // onChange={handleChange}
            value={caseDetails.comments}
            ></input>
          </div>
        </div>
        <div className='text-center mt-5'>
          <button type='submit' className='report-crime-crimebtn'>Add Crime</button>
        </div>
      </div>
      </form>
    </div>
    </div>
  )
}

export default UpdateCrimeReport