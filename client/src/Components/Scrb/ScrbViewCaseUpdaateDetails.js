import React, { useEffect, useState } from 'react';
import evidenceIcon from '../../Assets/Images/evidence.png';
// import './Police.css';
import { useParams, Link } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { toast } from 'react-toastify';
import { Modal } from 'react-bootstrap';
import { imageUrl } from '../Constants/Image_Url';

function ScrbViewCaseUpdaateDetails() {
    const [caseDetails, setCaseDetails] = useState({
        evidenceFiles: [{ file: { filename: '' } }],
        incidentDate: ''
      });
      const [showModal, setShowModal] = useState(false);
      const [selectedEvidence, setSelectedEvidence] = useState(null);
      const { id } = useParams();
    
      useEffect(() => {
        axiosInstance
          .post(`/viewpolicecase/${id}`)
          .then((res) => {
            if (res.data.status === 200) {
              setCaseDetails(res.data.data);
            }
          })
          .catch((err) => {
            toast.error('Failed to fetch case details');
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
    
        const fileExtension = file.filename.split('.').pop().toLowerCase();
        const fileUrl = `${imageUrl}/${file.filename}`;
    
        if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
          return <img src={fileUrl} alt='Evidence' className='img-fluid' />;
        } else if (['mp4', 'webm', 'ogg'].includes(fileExtension)) {
          return (
            <video controls className='img-fluid'>
              <source src={fileUrl} type={`video/${fileExtension}`} />
            </video>
          );
        } else if (['mp3', 'wav', 'ogg'].includes(fileExtension)) {
          return (
            <audio controls className='w-100'>
              <source src={fileUrl} type={`audio/${fileExtension}`} />
            </audio>
          );
        } else {
          return <p>Unsupported file type.</p>;
        }
      };
  return (
    <div>
        <div className='container'>
        <div className='pt-5'>
          <h4 className='scrb-dash-h4'>Welcome SCRB</h4>
          <p className='scrb-dash-para'>All System are running smoothly</p>
        </div>
        <div className='container mt-5 mb-5'>
      <div className='case-details-h6 text-center pt-3'>
        <span>Case No: 203 </span>
      </div>
      <div className='row'>
        <div className='col text-center'>
        <div className='case-details-span mt-5'>
            <span>Updated Details</span>
        </div>
            <span className='case-details-victim'>Office Incharge: </span><span className='case-details-victim1'>{caseDetails.officeInCharge}</span><br/>
            <span className='case-details-victim'>Date of Update: </span><span className='case-details-victim1'>{caseDetails.date?.slice(0,10)}</span><br/>
            <span className='case-details-victim'>Current Status: </span><span className='case-details-victim1'>{caseDetails.status}</span><br/>
            <span className='case-details-victim'>Description: </span><span className='case-details-victim1'>{caseDetails.description}</span><br/>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col'>
          <div className='case-details-span'>
            <span>Victim Information</span>
          </div>
          <div className='mt-4 container ms-4'>
          <div className="row">
            <table className="case-details-table">
                <tbody>
                <tr>
                    <td className="case-details-victim">
                    <label>Name</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.victimName}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Gender</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.victimGender}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Email</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.victimEmail}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Address</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.victimAddress}</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='case-details-span'>
            <span>Incident Details</span>
          </div>
          <div className='mt-4 container ms-4'>
          <div className="row">
            <table className="case-details-table">
                <tbody>
                <tr>
                    <td className="case-details-victim">
                    <label>Date</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.incidentDate.slice(0, 10)}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Time</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.incidentTime}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Location</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.incidentLocation}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>City</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.incidentCity}</span>
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
            <span>Witness Information</span>
          </div>
          <div className='mt-4 container ms-4'>
            <div className="row">
            <table className="case-details-table">
                <tbody>
                <tr>
                    <td className="case-details-victim">
                    <label>Name</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.witnessName}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Contact</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.witnessContact}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Address</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.witnessAddress}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Statement</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.witnessStatement}</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='case-details-span'>
            <span>Case Details</span>
          </div>
          <div className='mt-4 container ms-4'>
            <div className="row">
            <table className="case-details-table">
                <tbody>
                <tr>
                    <td className="case-details-victim">
                    <label>Crime Type</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.caseType}</span>
                    </td>
                </tr>
                <tr>
                    <td className="case-details-victim">
                    <label>Description</label>
                    </td>
                    <td className="case-details-victim1">
                    <span>{caseDetails.crimeId?.caseDescription}</span>
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
                    {caseDetails.crimeId?.caseType === 'Theft' && (
                    <>
                        <tr>
                        <td><label>Stolen Items</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.theftStolenItems}</span></td>
                        </tr>
                        <tr>
                        <td><label>Suspected Perpetrator (Description)</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.theftStolenSuspected}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.crimeId?.caseType === 'Assault' && (
                    <>
                        <tr>
                        <td><label>Injuries Sustained (Description)</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.assaultInjuries}</span></td>
                        </tr>
                        <tr>
                        <td><label>Medical Attention</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.assaultMedicalAttention}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.crimeId?.caseType === 'Vandalism' && (
                    <>
                        <tr>
                        <td><label>Description of Damage</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.vandalismDescription}</span></td>
                        </tr>
                        <tr>
                        <td><label>Estimated Cost of Damage</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.vandalismCostOfDamage}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.crimeId?.caseType === 'Missing Person' && (
                    <>
                        <tr>
                        <td><label>Missing Person Name</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.missingPersonName}</span></td>
                        </tr>
                        <tr>
                        <td><label>Description of Missing Person</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.missingPersonDescription}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.crimeId?.caseType === 'Domestic Violence' && (
                    <>
                        <tr>
                        <td><label>Describe the Incident</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.domesticViolenceDescription}</span></td>
                        </tr>
                        <tr>
                        <td><label>Injuries Sustained (if any)</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.domesticViolenceInjuries}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.crimeId?.caseType === 'Fraud' && (
                    <>
                        <tr>
                        <td><label>Description of Fraud</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.fraudDescription}</span></td>
                        </tr>
                        <tr>
                        <td><label>Amount of Money Involved</label></td>
                        <td><span className="case-details-victim1">{caseDetails.crimeId?.fraudFinancialLoss}</span></td>
                        </tr>
                    </>
                    )}
                    {caseDetails.crimeId?.caseType === 'Others' && (
                    <>
                        <tr>
                        <td colSpan="2"><label>Case Description</label></td>
                        </tr>
                        <tr>
                        <td colSpan="2"><span className="case-details-victim1">{caseDetails.crimeId?.others}</span></td>
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
        <div className='col'>
          <div className='case-details-span'>
            <span>Case Evidence</span>
          </div>
          <div className='mt-4 container ms-4'>
            <div className='row'>
              <div className='col'>
                {caseDetails.crimeId?.evidenceFiles.map((evidence, index) => (
                  <div key={index} className='mb-3'>
                    <div className='evidence-item'>
                      <img
                        src={evidenceIcon}
                        alt='Evidence Icon'
                        className='evidence-icon'
                        onClick={() => handleViewEvidence(evidence)}
                      />
                      <span className='evidence-label'>{evidence.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>View Evidence</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvidence ? getMediaElement(selectedEvidence.file) : <p>No evidence selected.</p>}
        </Modal.Body>
      </Modal>
    </div>
    </div>
    </div>
  )
}

export default ScrbViewCaseUpdaateDetails