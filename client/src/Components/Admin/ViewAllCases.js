import React, { useEffect, useState } from 'react'
import axiosInstance from '../Constants/BaseUrl';
import { Link } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";

function ViewAllCases() {
    const[data,setData]=useState([])
    const getData=()=>{
        axiosInstance.post("/viewallcrime")
        .then((res) => {
            console.log(res);
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
    }
        useEffect (() => {
        getData()
        },[])
  return (
    <div>
<div className='container'>
            <div className=' text-center mt-5 text-danger'>
                <h5>View All Cases</h5>
            </div>
            <div>
                {data.length === 0 && (
                    <h1>No Data Found</h1>
                )}
                {data.length > 0 && (
                    <table  class="table table-bordered table-striped mt-4">
                    <thead className='text-center newpolice-stationreq-thead'>
                        <tr className=''>
                        <th scope="col">S/No</th>
                        <th scope="col">PoliceStation Name</th>
                        <th scope="col">Victim Name</th>
                        <th scope="col">Type of Crime</th>
                        <th scope="col">Witness Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Location</th>
                        <th scope="col">View Details</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map ((caseview,index) => (
                            <tr>
                            <th>{index +1}</th>
                            <td>{caseview.policestationname}</td>
                            <td>{caseview.victimname}</td>
                            <td>{caseview.crimetype}</td>
                            <td>{caseview.witnessname}</td>
                            <td>{caseview.incidentdate}</td>
                            <td>{caseview.incidentlocation}</td>
                            <td >
                                <Link to={`/admin_viewcasedetails/${caseview._id}`}>
                                <button className='viewallpolicest_icon'>
                                    <IoEyeSharp/>
                                </button>
                                </Link>
                                                              
                            </td>
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

export default ViewAllCases