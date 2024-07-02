import React from 'react'
import './Police.css'
import evidence from '../../Assets/Images/evidence.png'
function CaseDetails() {
  return (
    <div className='container mt-5 mb-5'>
        <div className=' case-details-h6 text-center pt-3'>
            <span>Case No: 203 </span>
        </div>
        <div className='row mt-5'>
            <div className='col'>
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
                            <div><span>Arthy Prenisha</span></div>
                            <div><span>Female</span></div>
                            <div><span>arthy@gmail.com </span></div>
                            <div><span>Thiruvananthapuram</span></div>   
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
            <div className='col'>
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
                            <div><span>Sanju</span></div>
                            <div><span>10.00 a.m</span></div>
                            <div><span>Near hify mart </span></div>
                            <div><span>Kazhakootam</span></div>   
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col'>
                <div className='case-details-span '>
                    <span>Victim Information</span>
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
                            <div><span>Lifney Thresh</span></div>
                            <div><span>9889988998</span></div>
                            <div><span>Knayakumari </span></div>
                            <div><span>ENJHJFJRKRKNGTKNKGNNFK
                                <br></br>JHISHKRNLERFMKLREMLRM.
                                FWELRM,VRL,DFNV,NE,ṄNRT,ṬṄNE,R̥NGHGKERL</span></div>   
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
            <div className='col'>
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
                            <div><span>Theft</span></div>
                            <div><span>Theft</span></div>
                              
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col'>
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
                            <div><span>2</span></div>
                            <div><span>THJTYROPKYUJP5;54UJYOLUTOL3UJTOL4
                                <br></br>OUJJ5TLO45LP4 </span></div> 
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
            <div className='col'>
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
                            <div className='mt-5 pt-4'><span>nfkrnfjdehnrgtkjdntkjbnrtkjnkjjjwndkejnvfms bxdfm bfk
                            n fmnvkjejkjfghjrngjkrnfjgnirjolsmljferjglrntkjg</span></div>
                              
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col container'>
                <div className='case-details-span '>
                    <span>Additional  Information</span>
                </div>
                <div className='row'>
                    <div className='col-3 case-details-victim container'>
                        <div className='container ms-4'><label>Comments</label></div>
                    </div>
                    <div className='col-5 case-details-victim1'>
                        <div><span>NDSHFJR9YU0IU6I0YEU5YIOE5Y<br></br>JEOMLBMNKPYOKT
                        PTYJK</span></div>
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
            <div className='col mt-5 '>
                <div className='text-center'>
                    <button className='case-details-acceptbtn'>Accept</button>
                    <button className='case-details-rejectbtn ms-5'>Reject</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CaseDetails
