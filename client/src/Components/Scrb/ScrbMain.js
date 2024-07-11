import React from 'react'
import ScrbDashboard from './ScrbDashboard'
import ScrbSidebar from './ScrbSidebar'
import AdminDashboard from '../Admin/AdminDashboard'
import ScrbViewNotification from './ScrbViewNotification'
import ScrbViewNotificationDetail from './ScrbViewNotificationDetail'
import ScrbViewEachNotification from './ScrbViewEachNotification'
import ScrbViewAllPoliceStation from './ScrbViewAllPoliceStation'
import ScrbViewPoliceDetails from './ScrbViewPoliceDetails'
import ScrbViewAllCases from './ScrbViewAllCases'
import ScrbViewCaseDetails from './ScrbViewCaseDetails'
import ScrbGenerateCrimeAlert from './ScrbGenerateCrimeAlert'
import LoginNav from '../Navbar/LoginNav'

function ScrbMain({data}) {
  return (
    <div>
      <div><LoginNav/>
      <div className='row'>
          <div className='col-3'>
              <ScrbSidebar/>
          </div>
          <div className='col-9'>
           {data === "scrbdashboard" ? (
            <ScrbDashboard/>
           ):data === "scrbviewallcasedetails" ?(
            <ScrbViewAllCases/>
           ):data === "scrbvieweachcasedetails" ?(
            <ScrbViewCaseDetails />
           ):data === "scrb-viewallpolicestation" ?(
            <ScrbViewAllPoliceStation />
           ):data === "scrb-viewallpoliceprofile" ?(
              <ScrbViewPoliceDetails />
           ):data === "scrbviewnotification" ?(
            <ScrbViewNotification />
            ):data === "scrbviewnotificationdetails" ?(
              <ScrbViewNotificationDetail />
            ):data === "scrbvieweachnotification" ?(
              <ScrbViewEachNotification />
            ):data === "scrb-generatealert" ?(
              <ScrbGenerateCrimeAlert />
            ):(
           <AdminDashboard/>
           )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrbMain
