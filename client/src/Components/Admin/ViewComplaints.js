import React, { useEffect, useState } from 'react'
import axiosInstance from '../Constants/BaseUrl'
import '../../Assets/Styles/AdminViewNotification.css'

function ViewComplaints() {
    const [complaint, setComplaint]=useState([])
    const getData=()=>{
        axiosInstance.post("/viewAllComplaints")
        .then((res)=>{
            if(res.data.status === 200){
                setComplaint(res.data.data || [])
            }
            else{
                setComplaint([])
            }
        })
        .catch((err)=>{
            console.log("error",err)
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className='container'>
      <div className='pt-5'>
          <h4 className='admin-dash-h4'>Welcome Admin</h4>
          <p className='admin-dash-para'>All System are running smoothly</p>
        </div>
    <div className="crime-alerts-table container">
      <h2 className='crime_alerts_h2'>Complaints</h2>
      {complaint.length === 0 &&(
        <h1>No Complaints Found</h1>
      )}
      {complaint.length > 0 &&(

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
          {complaint.map((alert,index) => (
            <tr>
              <td className='crime-alerts-table-th-td'>{index+1}</td>
              <td className='crime-alerts-table-th-td'>{alert.citizenId.firstname}</td>
              <td className='crime-alerts-table-th-td'>{alert.date.slice(0,10)}</td>
              <td className='crime-alerts-table-th-td' data-bs-toggle="modal" data-bs-target="#exampleModal">{alert.complaint}</td>
              </tr>
          ))}
        </tbody>
      </table>
    )}
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ViewComplaints