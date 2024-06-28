import React from 'react'
import '../../Assets/Styles/CitizenLogin.css'
function ReportCrime() {
  return (
    <div className='mb-5'>
      <div className='text-center text-danger mt-5 mb-5'>
        <h4 className='report-crime-h4'>Report a Crime</h4>
      </div>
      <div className='report-crime-box container mt-5'>
        <div className='container mt-5'>
            <input type='text'
            className='report-crime-textbox ps-3'
            placeholder='Select a Police Station '
            ></input>
        </div>
        <div className=' text-center '>
            <div className='report-crime-victim  mt-4 pt-2'>
                <span className='report-crime-victim-span'>Victim Information (If not you)</span>
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
              ></input>
            </div>
            <div className='mt-3'>
              <label>Email</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              ></input>
            </div>
          </div>
          <div className='col mt-3'>
          <div>
              <label>Gender</label>
            </div>
            <div className='mt-2'>
              <input type='text'
              className='report-crime-textbox ps-3'
              ></input>
            </div>
            <div className='mt-3'>
              <label>Address</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
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
              <input type='text'
              className='report-crime-textbox ps-3'
              ></input>
            </div>
            <div className='mt-3'>
              <label>Location</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              ></input>
            </div>
          </div>
          <div className='col mt-3'>
          <div>
              <label>Time</label>
            </div>
            <div className='mt-2'>
              <input type='text'
              className='report-crime-textbox ps-3'
              ></input>
            </div>
            <div className='mt-3'>
              <label>City</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
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
              <input type='text'
              className='report-crime-textbox ps-3'
              ></input>
            </div>
          </div>
          <div className='col mt-3'>
          <div>
              <label>Item Stolen  </label>
            </div>
            <div className='mt-2'>
              <input type='text'
              className='report-crime-textbox ps-3'
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
              <input type='text'
              className='report-crime-textbox ps-3'
              ></input>
            </div>
            <div className='mt-3'>
              <label>Upload Photos</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
              ></input>
            </div>
          </div>
          <div className='col mt-3'>
          <div>
              <label>Upload Video</label>
            </div>
            <div className='mt-2'>
              <input type='text'
              className='report-crime-textbox ps-3'
              ></input>
            </div>
            <div className='mt-3'>
              <label>Description</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
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
              ></input>
            </div>
            <div className='mt-3'>
              <label>Address</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
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
              ></input>
            </div>
            <div className='mt-3'>
              <label>Witness Statement</label>
            </div>
            <div>
              <input type='text'
              className='report-crime-textbox ps-3'
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
            ></input>
          </div>
        </div>
        <div className='text-center mt-5'>
          <button className='report-crime-crimebtn'>Add Crime</button>
        </div>
      </div>
    </div>
  )
}

export default ReportCrime
