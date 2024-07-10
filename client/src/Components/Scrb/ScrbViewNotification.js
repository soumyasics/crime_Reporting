import React from 'react'
import { Link } from 'react-router-dom';

function ScrbViewNotification() {
    const crimeAlerts = [
        { id: 1, policeStation: 'Meenangadi Police Station', district: 'Wayanad', count: 13, crimeType: 'Kidnapping', date: '23/03/2023' },
        { id: 2, policeStation: 'Aryancode Police Station', district: 'Varkala', count: 8, crimeType: 'Theft', date: '09/04/2023' },
        { id: 3, policeStation: 'Ernakulam Police Station', district: 'Kochi', count: 4, crimeType: 'Burglary', date: '09/04/2023' },
        { id: 4, policeStation: 'Munnar Police Station', district: 'Idukki', count: 6, crimeType: 'Robbery', date: '12/06/2024' },
        { id: 5, policeStation: 'Kollam West Police Station', district: 'Kollam', count: 5, crimeType: 'Arson', date: '15/04/2024' },
        { id: 6, policeStation: 'Adimali Police Station', district: 'Thiruvananthapuram', count: 3, crimeType: 'Theft', date: '23/04/2024' },
      ];
  return (
    <div className='container'>
      <div className='pt-5'>
          <h4 className='scrb-dash-h4'>Welcome SCRB</h4>
          <p className='scrb-dash-para'>All System are running smoothly</p>
        </div>
        <div className="crime-alerts-table container">
      <h2 className='crime_alerts_h2'>Crime Alerts</h2>
      <table className='crime-alerts-table_tab'>
        <thead>
          <tr>
            <th className='crime-alerts-table-th-td'>Police Station Name</th>
            <th className='crime-alerts-table-th-td'>District</th>
            <th className='crime-alerts-table-th-td'>Count</th>
            <th className='crime-alerts-table-th-td'>Crime Type</th>
            <th className='crime-alerts-table-th-td'>Date</th>
            <th className='crime-alerts-table-th-td'>Alerts</th>
          </tr>
        </thead>
        <tbody>
          {crimeAlerts.map(alert => (
            <tr key={alert.id}>
              <td className='crime-alerts-table-th-td'>{alert.policeStation}</td>
              <td className='crime-alerts-table-th-td'>{alert.district}</td>
              <td className='crime-alerts-table-th-td'>{alert.count}</td>
              <td className='crime-alerts-table-th-td'>{alert.crimeType}</td>
              <td className='crime-alerts-table-th-td'>{alert.date}</td>
              <td className='crime-alerts-table-th-td'><Link to='/scrb-viewNotificationdetails'><button className="view-notification-details-btn">View Details</button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ScrbViewNotification