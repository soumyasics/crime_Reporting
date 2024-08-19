import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { Modal } from 'react-bootstrap';
import evidenceIcon from '../../Assets/Images/evidence.png';
import { toast } from 'react-toastify';
import { imageUrl } from '../Constants/Image_Url';

function ViewCrimeStatus() {
    const [caseDetails, setCaseDetails] = useState({
        evidenceFiles: [{ file: { filename: "" } }],
        incidentDate: '',_id:''
      });
      const [showModal, setShowModal] = useState(false);
      const [selectedEvidence, setSelectedEvidence] = useState(null);
      const [caseUpdate,setCaseUpdate]=useState('')
      const { id } = useParams();
      const navigate = useNavigate();
    
      useEffect(() => {
        axiosInstance
          .post(`/viewCrimeById/${id}`)
          .then((res) => {
            console.log(res);
            
            if (res.data.status === 200) {
              setCaseDetails(res.data.data);
            }
          })
          .catch((err) => {
            toast.error("Failed to fetch user details");
          });

        axiosInstance
          .post(`/viewPoliceCaseByCrimeIdForCitizen/${id}`)
          .then((res) => {
            console.log(res);
            
            if (res.data.status === 200) {
              setCaseUpdate(res.data.data[0]);
            }
          })
          .catch((err) => {
            toast.error("Failed to fetch user details");
          });
      }, [id]);
    
      const handleViewEvidence = (evidence) => {
        setSelectedEvidence(evidence);
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
        setSelectedEvidence(null);
      };
    
      const getMediaElement = (file) => {
        if (!file || !file.filename) return <p>File not found.</p>; 
    
        const fileExtension = file.filename.split(".").pop().toLowerCase();
        const fileUrl = `${imageUrl}/${file.filename}`;
    
        if (["jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
          return <img src={fileUrl} alt="Evidence" className="img-fluid" />;
        } else if (["mp4", "webm", "ogg"].includes(fileExtension)) {
          return (
            <video controls className="img-fluid">
              <source src={fileUrl} type={`video/${fileExtension}`} />
            </video>
          );
        } else if (["mp3", "wav", "ogg"].includes(fileExtension)) {
          return (
            <audio controls className="w-100">
              <source src={fileUrl} type={`audio/${fileExtension}`} />
            </audio>
          );
        } else {
          return <p>Unsupported file type.</p>;
        }
      };

  return (
    <div>
        <div className="container mt-5 mb-5">
      <div className="case-details-h6 text-center pt-3">
        <span>Case No: ID{caseDetails._id.slice(19,24)} </span>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="case-details-span">
            <span>Victim Information</span>
          </div>
          <div className="mt-4 container ms-4">
          <div className="row">
            <table className="case-details-table">
                <tbody>
                <tr>
                    <td className="case-details-victim">
                    <label>Name</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.victimName}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Gender</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.victimGender}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Email</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.victimEmail}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Address</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.victimAddress}</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="case-details-span">
            <span>Incident Details</span>
          </div>
          <div className="mt-4 container ms-4">
          <div className="row">
            <table className="case-details-table">
                <tbody>
                <tr>
                    <td className="case-details-victim">
                    <label>Date</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.incidentDate.slice(0, 10)}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Time</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.incidentTime}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Location</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.incidentLocation}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>City</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.incidentCity}</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="case-details-span">
            <span>Witness Information</span>
          </div>
          <div className="mt-4 container ms-4">
          <div className="row">
            <table className="case-details-table">
                <tbody>
                <tr>
                    <td className="case-details-victim">
                    <label>Name</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.witnessName}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Contact</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.witnessContact}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Address</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.witnessAddress}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Statement</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.witnessStatement}</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="case-details-span">
            <span>Case Details</span>
          </div>
          <div className="mt-4 container ms-4">
          <div className="row">
            <table className="case-details-table">
                <tbody>
                <tr>
                    <td className="case-details-victim">
                    <label>Crime Type</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.caseType}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Description</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.caseDescription}</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>

      
      <div className='row mt-5'>
        <div className='col'>
          <div className='case-details-span'>
            <span>Case Information</span>
          </div>
          <div className='mt-4 container ms-4'>
          <div className='row'>
            <div className='col-8 case-details-victim'>
                <table>
                <tbody>
                    {caseDetails.caseType === 'Theft' && (
                    <>
                        <tr>
                        <td><label>Stolen Items</label></td>
                        <td><span className="case-details-victim1">{caseDetails.theftStolenItems}</span></td>
                        </tr>
                        <tr>
                        <td><label>Suspected Perpetrator (Description)</label></td>
                        <td><span className="case-details-victim1">{caseDetails.theftStolenSuspected}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.caseType === 'Assault' && (
                    <>
                        <tr>
                        <td><label>Injuries Sustained (Description)</label></td>
                        <td><span className="case-details-victim1">{caseDetails.assaultInjuries}</span></td>
                        </tr>
                        <tr>
                        <td><label>Medical Attention</label></td>
                        <td><span className="case-details-victim1">{caseDetails.assaultMedicalAttention}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.caseType === 'Vandalism' && (
                    <>
                        <tr>
                        <td><label>Description of Damage</label></td>
                        <td><span className="case-details-victim1">{caseDetails.vandalismDescription}</span></td>
                        </tr>
                        <tr>
                        <td><label>Estimated Cost of Damage</label></td>
                        <td><span className="case-details-victim1">{caseDetails.vandalismCostOfDamage}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.caseType === 'Missing Person' && (
                    <>
                        <tr>
                        <td><label>Missing Person Name</label></td>
                        <td><span className="case-details-victim1">{caseDetails.missingPersonName}</span></td>
                        </tr>
                        <tr>
                        <td><label>Description of Missing Person</label></td>
                        <td><span className="case-details-victim1">{caseDetails.missingPersonDescription}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.caseType === 'Domestic Violence' && (
                    <>
                        <tr>
                        <td><label>Describe the Incident</label></td>
                        <td><span className="case-details-victim1">{caseDetails.domesticViolenceDescription}</span></td>
                        </tr>
                        <tr>
                        <td><label>Injuries Sustained (if any)</label></td>
                        <td><span className="case-details-victim1">{caseDetails.domesticViolenceInjuries}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.caseType === 'Fraud' && (
                    <>
                        <tr>
                        <td><label>Description of Fraud</label></td>
                        <td><span className="case-details-victim1">{caseDetails.fraudDescription}</span></td>
                        </tr>
                        <tr>
                        <td><label>Amount of Money Involved</label></td>
                        <td><span className="case-details-victim1">{caseDetails.fraudFinancialLoss}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.caseType === 'Others' && (
                    <>
                        <tr>
                        <td colSpan="2"><label>Case Description</label></td>
                        </tr>
                        <tr>
                        <td colSpan="2"><span className="case-details-victim1">{caseDetails.others}</span></td>
                        </tr>
                    </>
                    )}
                </tbody>
                </table>
            </div>
            <div className='col-4 case-details-victim1'>
            </div>
            
            </div>
          </div>
        </div>

        <div className="col">
          <div className="case-details-span">
            <span>Evidence Files</span>
          </div>
          <div className="container ms-4 mt-4">
            <div className="row">
              {caseDetails.evidenceFiles.map((evidence, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body text-center">
                      <img
                        src={evidenceIcon}
                        alt="Evidence Icon"
                        style={{ width: '50px', height: '50px' }}
                      />
                      <Link 
                        onClick={() => handleViewEvidence(evidence.file)}
                      >
                        View 
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      <div className='row'>
        <div className='col-6'></div>
        <div className='col-6 text-center'>
            <div className='req_status_citizen'>
              <h4>Status : { }
                {/* {caseDetails.approvalStatus === "approved" && (
                      <label className='text-success font_style_status'>{caseDetails.approvalStatus}</label>
                )}
                {caseDetails.approvalStatus === "pending" && (
                      <label className='text-warning font_style_status'>{caseDetails.approvalStatus}</label>
                )}
                {caseDetails.approvalStatus === "rejected" && (
                      <label className='text-danger font_style_status'>{caseDetails.approvalStatus}</label>
                )} */}
                {caseUpdate?.status?caseUpdate.status:caseDetails.approvalStatus}
            </h4>
            </div>
            </div>
        </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Evidence File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvidence && getMediaElement(selectedEvidence)}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  )
}

export default ViewCrimeStatus