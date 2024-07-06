import React from 'react'
import comp from '../../Assets/Images/addcomplaints.png'
import '../../Assets/Styles/CitizenAddComplaint.css'

function CitizenAddComplaint() {
  return (
    <div>
        <div className='row citizen_add_complaint_row'>
            <div className='col-md-5 col-sm-12'>
                <img src={comp} className='img-fluid citizen_add_complaint_image'/>
            </div>
            <div className='col-md-7 col-sm-12'>
              <div className='citizen_add_complaint_div'>
                <p className='citizen_add_complaint_text'>Complaints :</p>
                  <div className='text-center'>
                      <textarea className='citizen_add_complaint_content_div' rows={7} cols={65}></textarea>
                  </div>
                  <div className='citizen_add_comp_button_div'>
                    <button className='citizen_add_complaint_button'>Post</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CitizenAddComplaint