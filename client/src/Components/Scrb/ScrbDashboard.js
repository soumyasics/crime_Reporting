import React, { useState } from 'react'

function ScrbDashboard() {

    const[citizen,setCitizen]=useState([]);
    const[policeStation,setPoliceStation]=useState([]);
    const[complaints,setComplaints]=useState([]);
    const[crimes,setCrimes]=useState([]);

  return (
    <div>
      <div className='container'>
        <div className='pt-5'>
          <h4 className='scrb-dash-h4'>Welcome SCRB</h4>
          <p className='scrb-dash-para'>All System are running smoothly</p>
        </div>
        <div className='row pt-4'>

          <div className='col-12 col-sm-6 col-md-3 mb-4'>
            <div className='scrb-dash-revenue-box pt-5  '>
              <div className='text-center'>
                <span className='scrb-dash-span'>Citizen</span>
              </div>
              <div className='pt-5 ms-4'>
                <span className='scrb-dash-span'>{(citizen.length)>0?citizen.length:0}</span>
                <span className='scrb-dash-span ms-5'>Active</span>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-6 col-md-3 mb-4'>
            <div className='scrb-dash-revenue-box pt-5 '>
              <div className='text-center'>
                <span className='scrb-dash-span'>Police Station</span>
              </div>
              <div className='pt-5 ms-4'>
                <span className='scrb-dash-span'>{(policeStation.length)>0?policeStation.length:0}</span>
                <span className='scrb-dash-span ms-5'>Active</span>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-6 col-md-3 mb-4'>
            <div className='scrb-dash-revenue-box pt-5 '>
              <div className='text-center'>
               <span className='scrb-dash-span'></span>
              </div>
              <div className='pt-5 ms-4'>
                <span className='scrb-dash-span'></span>
                <span className='scrb-dash-span ms-5'></span>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-6 col-md-3 mb-4'>
            <div className='scrb-dash-revenue-box pt-5 text-center'>
              <div>
                <span className='scrb-dash-span'>Crimes</span>
              </div>
              <div className='pt-5 ms-4'>
                <span className='scrb-dash-span'>0</span>
                <span className='scrb-dash-span ms-5'>Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrbDashboard
