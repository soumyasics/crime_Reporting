import '../../Assets/Styles/Notification.css'
import { GoAlertFill } from "react-icons/go";
import React, { useEffect, useState } from "react";
import axiosInstance from "../Constants/BaseUrl";
import { useParams } from "react-router-dom";


const notifications = [
    { id: 1, date: '12/03/2023', message: 'High Crime Alert! The crime rate in Downtown is currently high. Stay alert and report any suspicious activity immediately', isHighPriority: false },
    { id: 2, date: '21/06/2024', message: 'High Crime Alert! The crime rate in Downtown is currently high. Stay alert and report any suspicious activity immediately', isHighPriority: true },
    { id: 3, date: '12/03/2024', message: 'High Crime Alert! The crime rate in Downtown is currently high. Stay alert and report any suspicious activity immediately', isHighPriority: false },
  ];

function CitizenViewNotification() {

  const [data, setData] = useState([]);

  const id=localStorage.getItem('citizenToken')

  const getData = () => {
    axiosInstance
      .post(`/viewNotificationByCitizenId/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setData(res.data.data || []);
        } else {
          setData([]);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className='notification_main_div'>
        <div className="notifications-table">
            <div className='text-center notification_text_style'> <h2>Notifications</h2>  </div>
        
        {notifications.map((notification) => (
            <div
            key={notification.id}
            className={`notification-row ${notification.isHighPriority ? 'high-priority' : ''}`}
            >
            <div className="notification-icon"><GoAlertFill /></div>
            <div className="notification-message">High Crime Alert! The crime rate in Downtown is currently high. Stay alert and report any suspicious activity immediately</div>
            {/* <button className="view-details-btn">View Details</button> */}
            <div className="notification-date">{notification.date}</div>
            </div> 
        ))}
        </div>
    </div>
  )
}

export default CitizenViewNotification