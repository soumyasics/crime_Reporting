import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'
import AdminLogin from './AdminLogin'
import PoliceRegister from '../Police/PoliceRegister'

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
           ):(
           <AdminDashboard/>
           )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMain
