import React, { useEffect, useState } from 'react'
import '../../Assets/Styles/CitizenLogin.css'
import axiosInstance from '../Constants/BaseUrl'
function ReportCrime() {
  const [data, setData] = useState({
    policestationname: '',
    victimname: '',
    victimgender: '',
    victimemail: '',
    victimaddress: '',
    incidentdate: '',
    incidenttime: '',
    incidentlocation: '',
    incidentcity: '',
    crimetype: '',
    crimeitem: '',
    witnessname: '',
    witnesscontact: '',
    witnessaddress: '',
    witnessstatement: '',
    numofsuspect: '',
    physicaldescription: '',
    evidencedescription: '',
    comments: '',
    audioevidence: null,
    videoevidence: null,
    photoevidence: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };
  console.log(data)

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    // for (const key in data) {
    //   formData.append(key, data[key]);
    // }
    // for (const key in formData) {
    //   formData.append(key, formData[key]);
    // }
    if(formIsValid){
      const formData = new FormData();
      data.append("policestationname",data.policestationname)
      data.append("victimname",data.victimname)
      data.append("victimgender",data.victimgender)
      data.append("victimemail",data.victimemail)
      data.append("victimaddress",data.victimaddress)
      data.append("incidentdate",data.incidentdate)
      data.append("incidenttime",data.incidenttime)
      data.append("incidentlocation",data.incidentlocation)
      data.append("incidentcity",data.incidentcity)
      data.append("crimetype",data.crimetype)
      data.append("crimeitem",data.crimeitem)
      data.append("witnessname",data.witnessname)
      data.append("witnesscontact",data.witnesscontact)
      data.append("witnessaddress",data.witnessaddress)
      data.append("witnessstatement",data.witnessstatement)
      data.append("numofsuspect",data.numofsuspect)
      data.append("physicaldescription",data.physicaldescription)
      data.append("evidencedescription",data.evidencedescription)
      data.append("comments",data.comments)
      data.append("audioevidence",data.audioevidence)
      data.append("videoevidence",data.videoevidence)
      data.append("photoevidence",data.photoevidence)
    }

    try {
      const response = await axiosInstance.post('/addcrime', formData);
      console.log(response.data);
      alert("Cases Added Successfully")
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className='mb-5'>
      <form onSubmit={handleSubmit}>
      <div className='text-center text-danger mt-5 mb-5'>
        <h4 className='report-crime-h4'>Report a Crime</h4>
      </div>
      <div className='report-crime-box container mt-5'>
        <div className='container mt-5'>
            <input type='text'
            className='report-crime-textbox ps-3'
            placeholder='Select a Police Station '
            name='policestationname'
            onChange={handleChange}
            value={data.policestationname}
            ></input>
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
              onChange={handleChange}
              value={data.victimname}
              ></input>
            </div>
            <div className='mt-3'>
              <label>Email</label>
            </div>
            <div>
              <input type='email'
              className='report-crime-textbox ps-3'
              name='victimemail'
              onChange={handleChange}
              value={data.victimemail}
              ></input>
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
              onChange={handleChange}
              value={data.victimgender}>
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
              onChange={handleChange}
              value={data.victimaddress}
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
              onChange={handleChange}
              value={data.incidentdate}
              ></input>
            </div>
            <div className='mt-3'>
              <label>Location</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='incidentlocation'
              onChange={handleChange}
              value={data.incidentlocation}
              ></input>
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
              onChange={handleChange}
              value={data.incidenttime}
              ></input>
            </div>
            <div className='mt-3'>
              <label>City</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='incidentcity'
              onChange={handleChange}
              value={data.incidentcity}
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
              onChange={handleChange}
              value={data.crimetype}>
                <option selected>Open this select menu</option>
                <option value='theft'>Theft</option>
                <option value='burglary'>Burglary</option>
                <option value='robbery'>Robbery</option>
                <option value='assault'>Assault</option>
                <option value='vandalism'>Vandalism</option>
                <option value='fraud'>Fraud</option>
              </select>
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
              onChange={handleChange}
              value={data.crimeitem}
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
              onChange={handleChange}
              value={data.evidencedescription}
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
              onChange={handleChange}
              value={data.witnessname}
              ></input>
            </div>
            <div className='mt-3'>
              <label>Address</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='witnessaddress'
              onChange={handleChange}
              value={data.witnessaddress}
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
              onChange={handleChange}
              value={data.witnesscontact}
              ></input>
            </div>
            <div className='mt-3'>
              <label>Witness Statement</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              name='witnessstatement'
              onChange={handleChange}
              value={data.witnessstatement}
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
              onChange={handleChange}
              value={data.numofsuspect}
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
              onChange={handleChange}
              value={data.physicaldescription}
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
            onChange={handleChange}
            value={data.comments}
            ></input>
          </div>
        </div>
        <div className='text-center mt-5'>
          <button type='submit' className='report-crime-crimebtn'>Add Crime</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default ReportCrime
