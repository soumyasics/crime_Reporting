import React from 'react'
import { Link } from 'react-router-dom';

function ViewNotificationDetails() {
    const crimeAlerts = [
        { id: 1, station: 'Wayanad Police Station', victim: 'Saro', crime: 'theft', witness: 'Sowmi', date: '23/03/2022', district: 'Wayanad' },
        { id: 1, station: 'Wayanad Police Station', victim: 'Saro', crime: 'theft', witness: 'Sowmi', date: '23/03/2022', district: 'Wayanad' },
        { id: 1, station: 'Wayanad Police Station', victim: 'Saro', crime: 'theft', witness: 'Sowmi', date: '23/03/2022', district: 'Wayanad' },
        { id: 1, station: 'Wayanad Police Station', victim: 'Saro', crime: 'theft', witness: 'Sowmi', date: '23/03/2022', district: 'Wayanad' },
        { id: 1, station: 'Wayanad Police Station', victim: 'Saro', crime: 'theft', witness: 'Sowmi', date: '23/03/2022', district: 'Wayanad' },
        { id: 1, station: 'Wayanad Police Station', victim: 'Saro', crime: 'theft', witness: 'Sowmi', date: '23/03/2022', district: 'Wayanad' },
        { id: 1, station: 'Wayanad Police Station', victim: 'Saro', crime: 'theft', witness: 'Sowmi', date: '23/03/2022', district: 'Wayanad' },
        { id: 1, station: 'Wayanad Police Station', victim: 'Saro', crime: 'theft', witness: 'Sowmi', date: '23/03/2022', district: 'Wayanad' },
        { id: 1, station: 'Wayanad Police Station', victim: 'Saro', crime: 'theft', witness: 'Sowmi', date: '23/03/2022', district: 'Wayanad' },
        { id: 1, station: 'Wayanad Police Station', victim: 'Saro', crime: 'theft', witness: 'Sowmi', date: '23/03/2022', district: 'Wayanad' },

      ];
  return (
    <div className='container'>
      <div className='pt-5'>
          <h4 className='admin-dash-h4'>Welcome Admin</h4>
          <p className='admin-dash-para'>All System are running smoothly</p>
        </div>
        <div className="crime-alerts-container">
      <h2 className="title">Crime Alerts</h2>
      <table className="crime-alerts-table">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Police Station Name</th>
            <th>Victim Name</th>
            <th>Type of Crime</th>
            <th>Witness Name</th>
            <th>Date</th>
            <th>District</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {crimeAlerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>{alert.station}</td>
              <td>{alert.victim}</td>
              <td>{alert.crime}</td>
              <td>{alert.witness}</td>
              <td>{alert.date}</td>
              <td>{alert.district}</td>
              <td>
                <Link to="/admin-vieweachNotification">
                <button className="view-not-det-details-button">View Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ViewNotificationDetails