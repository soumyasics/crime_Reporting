import React from "react";
import "../../Assets/Styles/AdminSidebar.css";
import icon1 from "../../Assets/Images/dashIcon1.png";
import icon2 from "../../Assets/Images/dashIcon2.png";
import icon3 from "../../Assets/Images/dashIcon3.png";
import icon4 from "../../Assets/Images/dashIcon3.png";
import icon5 from "../../Assets/Images/dashIcon5.png";
import icon6 from "../../Assets/Images/dashIcon6.png";

function AdminSidebar() {
  const menuDetails = [
    { icon: icon1, title: "Dashboard" },
    { icon: icon2, title: "Crime Alerts" },
    { icon: icon3, title: "Police Station" },
    { icon: icon3, title: "Police Station Request" },
    { icon: icon4, title: "New Police Stataion" },
    { icon: icon5, title: "Complaints" },
    { icon: icon6, title: "Case Reports" },
  ];

  return (
    <div>
      <div className="admin_sidebar">
        <div className="admin_container">
          <div className="admin_title_container" >
            <div>icon</div>
            <div>Dashboard</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
