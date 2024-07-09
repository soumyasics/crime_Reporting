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

function ScrbMain({data}) {
  return (
    <div>
      <div>
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
