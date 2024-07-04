import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'
import AdminLogin from './AdminLogin'
import PoliceRegister from '../Police/PoliceRegister'
import NewPoliceStationReq from '../Police/NewPoliceStationReq'
import ViewAllPoliceStation from '../Police/ViewAllPoliceStation'
import ViewProfile_Policestation from '../Police/ViewProfile_Policestation'
import ViewProfile_PoliceReq from '../Police/ViewProfile_PoliceReq'
import ViewAllCases from './ViewAllCases'
import ViewCaseDetails from './ViewCaseDetails'

function AdminMain({data}) {
  return (
    <div>
      <div>
        <div className='row'>
          <div className='col-3'>
              <AdminSidebar/>
          </div>
          <div className='col-9'>
           {data === "admindashboard" ? (
            <AdminDashboard/>
           ):data === "newpolicestationreq" ?(
            <NewPoliceStationReq/>
           ):data === "viewallpolicestation" ?(
            <ViewAllPoliceStation/>
           ):data === "viewallpoliceprofile" ?(
              <ViewProfile_Policestation/>
           ):data === "viewallpolicereqprofile" ?(
              <ViewProfile_PoliceReq/>
           ):data === "adminviewallcasedetails" ?(
            <ViewAllCases/>
           ):data === "adminvieweachcasedetails" ?(
            <ViewCaseDetails />
           ):
           <AdminDashboard/>
           }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMain
