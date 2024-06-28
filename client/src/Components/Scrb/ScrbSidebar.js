import React from 'react'
import '../../Assets/Styles/Scrb.css'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { PiNotepadFill } from "react-icons/pi";
import { FaPoll } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
function ScrbSidebar() {
  return (
    <div>
      <div className='scrb-sidebar-backgroundcolor'>
        <div className="pt-5 ms-5 ">
            <Link className='scrb-sidebar-h5'><h5 className="pt-5"><MdDashboard/> Dashboard</h5></Link>
            <Link className='scrb-sidebar-h5'><h5 className="pt-4"><IoIosNotifications/> Crime Alerts</h5></Link>
            <Link className='scrb-sidebar-h5'><h5 className="pt-4"><FaCalendarAlt/> Date  of Crime</h5></Link>
            <Link className='scrb-sidebar-h5'><h5 className="pt-4"><FaSearch/> Search</h5></Link>
            <Link className='scrb-sidebar-h5'><h5 className="pt-4"><MdLock/> Change Password</h5></Link>
            <Link className='scrb-sidebar-h5'><h5 className="pt-4"><PiNotepadFill/> Privacy Policy</h5></Link>
            <Link className='scrb-sidebar-h5'><h5 className="pt-4"><FaPoll/> Reports</h5></Link>
            <Link className='scrb-sidebar-h5'><h5 className="pt-4"><MdOutlineLogout/> Logout</h5></Link>
        </div>
      </div>
    </div>
  )
}

export default ScrbSidebar
