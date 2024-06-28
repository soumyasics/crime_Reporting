import React from 'react'
import ScrbDashboard from './ScrbDashboard'
import ScrbSidebar from './ScrbSidebar'
import AdminDashboard from '../Admin/AdminDashboard'

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
