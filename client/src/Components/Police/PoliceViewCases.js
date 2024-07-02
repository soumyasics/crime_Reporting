import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoMdEye } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import './Police.css'
function PoliceViewCases() {
  return (
    <div className='container mb-5'>
      <div className='container ms-5 mt-5 text-danger'>
         <h4>Recent Cases</h4>
      </div>
      <div>
        <table class="table table-striped border">
            <thead>
                <tr>
                <th>Victim Name</th>
                <th>Type of Crime</th>
                <th>Witness Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>No of Suspects</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Murder</td>
                <td>Galis</td>
                <td>22/06/2023</td>
                <td>Delhi</td>
                <td>2</td>
                <td>
                    <button className='policeview-cases-cross'><RxCross2/></button>
                    <button className='policeview-cases-tick ms-3'><TiTick/></button>
                    <button className='policeview-cases-eye ms-3'><IoMdEye/></button>
                </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default PoliceViewCases
