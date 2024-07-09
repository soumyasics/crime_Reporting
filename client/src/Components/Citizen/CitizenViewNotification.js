import React from 'react'
import '../../Assets/Styles/Notification.css'
import { GoAlertFill } from "react-icons/go";


const notifications = [
    { id: 1, date: '12/03/2023', message: 'High Crime Alert! The crime rate in Downtown is currently high. Stay alert and report any suspicious activity immediately', isHighPriority: false },
    { id: 2, date: '21/06/2024', message: 'High Crime Alert! The crime rate in Downtown is currently high. Stay alert and report any suspicious activity immediately', isHighPriority: true },
    { id: 3, date: '12/03/2024', message: 'High Crime Alert! The crime rate in Downtown is currently high. Stay alert and report any suspicious activity immediately', isHighPriority: false },
  ];

function CitizenViewNotification() {
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
            <div className="notification-message">{notification.message}</div>
            <button className="view-details-btn">View Details</button>
            <div className="notification-date">{notification.date}</div>
            </div> 
        ))}
        </div>
    </div>
  )
}

export default CitizenViewNotification