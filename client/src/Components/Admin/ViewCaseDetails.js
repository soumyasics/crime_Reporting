import React, { useEffect, useState } from 'react'
import evidence from '../../Assets/Images/evidence.png'
import { useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { toast } from 'react-toastify';


function ViewCaseDetails() {
    const [caseDetails, setCaseDetails] = useState({});
    const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .post(`/viewCrimeById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
            setCaseDetails(res.data.data);
        }
      })
      .catch((err) => {
        toast.error("Failed to fetch user details");
      });
  }, [id]);

  return (
    <div className='container mt-5 mb-5'>
        <div className=' case-details-h6 text-center pt-3'>
            <span>Case No: 203 </span>
        </div>
        <div className='row mt-5'>
            <div className='col-md-6 container'>
                <div className='case-details-span '>
                    <span>Victim Information</span>
                </div>
                <div className='mt-4 container ms-4'>
                    <div className='row'>
                        <div className='col-3 case-details-victim'>
                            <div><label>Name </label></div>
                            <div><label>Gender </label></div>
                            <div><label>Email </label></div>
                            <div><label>Address </label></div>
                        </div>
                        <div className='col-5 case-details-victim1'>
                            <div><span>{caseDetails.victimname}</span></div>
                            <div><span>{caseDetails.victimgender}</span></div>
                            <div><span>{caseDetails.victimemail}</span></div>
                            <div><span>{caseDetails.victimaddress}</span></div>   
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 container'>
                <div className='case-details-span '>
                    <span>Incident Details</span>
                </div>
                <div className='mt-4 container ms-4'>
                    <div className='row'>
                        <div className='col-3 case-details-victim'>
                            <div><label>Date </label></div>
                            <div><label>Time </label></div>
                            <div><label>Location </label></div>
                            <div><label>City </label></div>
                        </div>
                        <div className='col-5 case-details-victim1'>
                            <div><span>{caseDetails.incidentdate}</span></div>
                            <div><span>{caseDetails.incidenttime}</span></div>
                            <div><span>{caseDetails.incidentlocation} </span></div>
                            <div><span>{caseDetails.incidentcity}</span></div>   
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-md-6 container'>
                <div className='case-details-span '>
                    <span>Witness Information</span>
                </div>
                <div className='mt-4 container ms-4'>
                    <div className='row'>
                        <div className='col-3 case-details-victim'>
                            <div><label>Name</label></div>
                            <div><label>Contact  </label></div>
                            <div><label>Address  </label></div>
                            <div><label>Witness Statement  </label></div>
                        </div>
                        <div className='col-5 case-details-victim1'>
                            <div><span>{caseDetails.witnessname}</span></div>
                            <div><span>{caseDetails.witnesscontact}</span></div>
                            <div><span>{caseDetails.witnessaddress} </span></div>
                            <div><span>{caseDetails.witnessstatement} </span></div>   
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 container'>
                <div className='case-details-span '>
                    <span>Incident Details</span>
                </div>
                <div className='mt-4 container ms-4'>
                    <div className='row'>
                        <div className='col-3 case-details-victim'>
                            <div><label> Crime Type    </label></div>
                            <div><label>Item Stolen   </label></div>
                            
                        </div>
                        <div className='col-5 case-details-victim1'>
                            <div><span>{caseDetails.crimetype}</span></div>
                            <div><span>{caseDetails.crimeitem}</span></div>
                              
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-md-6 container'>
                <div className='case-details-span '>
                    <span>Victim Information</span>
                </div>
                <div className='mt-4 container ms-4'>
                    <div className='row'>
                        <div className='col-3 case-details-victim'>
                            <div><label>No of Suspects</label></div>
                            <div><label>Physical Description   </label></div>
                            
                        </div>
                        <div className='col-5 case-details-victim1'>
                            <div><span>{caseDetails.numofsuspect}</span></div>
                            <div><span>{caseDetails.physicaldescription} </span></div> 
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 container'>
                <div className='case-details-span '>
                    <span>Incident Details</span>
                </div>
                <div className='mt-4 container ms-4'>
                    <div className='row'>
                        <div className='col-3 case-details-victim'>
                            <div><img src={evidence} ></img>{" "}<label> Audio File</label></div>
                            <div className='mt-3'><img src={evidence} ></img>{" "}<label>Video File</label></div>
                            <div className='mt-3'><img src={evidence} ></img>{" "}<label>Image File</label></div>
                            <div className='mt-3'><label>Description</label></div>
                        </div>
                        <div className='col-5 case-details-victim1'>
                            <div><span><br></br></span></div>
                            <div><span><br></br></span></div>
                            <div><span><br></br></span></div>
                            <div className='mt-5 pt-4'><span>{caseDetails.evidencedescription}</span></div>
                              
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 container'>
                <div className='case-details-span '>
                    <span>Additional  Information</span>
                </div>
                <div className='row'>
                    <div className='col-3 case-details-victim container'>
                        <div className='container ms-4'><label>Comments</label></div>
                    </div>
                    <div className='col-5 case-details-victim1'>
                        <div><span>{caseDetails.comments}</span></div>
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
            <div className='col-md-6'></div>
        </div>

    </div>
  )
}

export default ViewCaseDetails