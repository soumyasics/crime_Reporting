import React, { useEffect, useState } from 'react'
import axiosInstance from '../Constants/BaseUrl'

function NewPoliceStationReq() {

    const[data,setData]=useState([])

    useEffect (() => {
        axiosInstance.post("/viewPolices")
        .then((res) => {
            if(res.data.status === 200){
                setData(res.data.data || [])
            }
            else{
                setData([])
            }
        })
        .catch((err) =>{
            console.log("Error",err);
        })
    },[])
  return (
    <div>
        <div className='container'>
            <div className=' text-center mt-5 text-danger'>
                <h5>New Police Station Request</h5>
            </div>
            <div>
                {data.length === 0 && (
                    <h1>No Data Found</h1>
                )}
                {data.length > 0 && (
                    <table  class="table table-bordered mt-4">
                    <thead>
                        <tr className=''>
                        <th scope="col">S/No</th>
                        <th scope="col">PoliceStation Name</th>
                        <th scope="col">PoliceStation Code</th>
                        <th scope="col">District</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map ((policestationreq,index) => (
                            <tr>
                            <th>{policestationreq.index}</th>
                            <td>{policestationreq.policestationname}</td>
                            <td>{policestationreq.policestationcode}</td>
                            <td>{policestationreq.district}</td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default NewPoliceStationReq
