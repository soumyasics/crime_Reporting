import React from "react";
import "../../Assets/Styles/AdminSidebar.css";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaBuildingShield } from "react-icons/fa6";
import { FaPoll } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdLocalPolice } from "react-icons/md";


function AdminSidebar() {


  return (  
  
    <div>
      <div className="admin-sidebar-background">
        <div className="pt-5 ms-5 admin-sidebar-h4">
          <Link to="/admin-dashboard" className="admin-dash-link"><h5 className="pt-5"><MdDashboard/> Dashboard</h5></Link>
          <Link to='' className="admin-dash-link"><h5 className="pt-4"><IoIosNotifications/> Crime Alerts</h5></Link>
          <Link to='/viewallpolicestation' className="admin-dash-link"><h5 className="pt-4"><FaBuildingShield/> Police Station</h5></Link>
          <Link to='/newpolicestationreq' className="admin-dash-link"><h5 className="pt-4"><FaBuildingShield/> Police Station Request</h5></Link>
          <Link to='/viewcitizens' className="admin-dash-link"><h5 className="pt-4"><MdLocalPolice /> Citizen Details</h5></Link>
          <Link to='/admin-viewallcases' className="admin-dash-link"><h5 className="pt-4"><FaPoll/> Complaints</h5></Link>
          <Link to='' className="admin-dash-link"><h5 className="pt-4"><FaLock/> Change Password</h5></Link>
          <Link to='' className="admin-dash-link"><h5 className="pt-4"><RiGitRepositoryFill/> Case Report</h5></Link>
          <Link to='/' className="admin-dash-link"><h5 className="pt-4"><MdOutlineLogout/> Logout</h5></Link>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
