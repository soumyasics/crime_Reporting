import React from 'react'

function ViewComplaints() {
    const crimeAlerts = [
        { id: 1, Username: 'beninsha r', Date: '10/12/2023', Message: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaa",},
        { id: 2, Username: 'beninsha r', Date: '10/12/2023', Message: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaa",},
        { id: 3, Username: 'beninsha r', Date: '10/12/2023', Message: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaa",},
        { id: 4, Username: 'beninsha r', Date: '10/12/2023', Message: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaa",},
        { id: 5, Username: 'beninsha r', Date: '10/12/2023', Message: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaa",},
        { id: 6, Username: 'beninsha r', Date: '10/12/2023', Message: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaa",},

      ];
  return (
    <div className='container'>
      <div className='pt-5'>
          <h4 className='admin-dash-h4'>Welcome Admin</h4>
          <p className='admin-dash-para'>All System are running smoothly</p>
        </div>
    <div className="crime-alerts-table container">
      <h2 className='crime_alerts_h2'>Complaints</h2>
      <table className='crime-alerts-table_tab'>
        <thead>
          <tr>
            <th className='crime-alerts-table-th-td'>Sl/No</th>
            <th className='crime-alerts-table-th-td'>Username</th>
            <th className='crime-alerts-table-th-td'>Date</th>
            <th className='crime-alerts-table-th-td'> Message</th>
          </tr>
        </thead>
        <tbody>
          {crimeAlerts.map(alert => (
            <tr key={alert.id}>
              <td className='crime-alerts-table-th-td'>{alert.id}</td>
              <td className='crime-alerts-table-th-td'>{alert.Username}</td>
              <td className='crime-alerts-table-th-td'>{alert.Date}</td>
              <td className='crime-alerts-table-th-td'>{alert.Message}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ViewComplaints