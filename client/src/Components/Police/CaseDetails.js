import React, { useEffect, useState } from "react";
import evidenceIcon from "../../Assets/Images/evidence.png"; // Adjusted import path for evidence icon
import "./Police.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import { imageUrl } from "../Constants/Image_Url";

function CaseDetails({type}) {
  const [caseDetails, setCaseDetails] = useState({
    evidenceFiles: [{ file: { filename: "" } }],incidentDate:''
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedEvidence, setSelectedEvidence] = useState(null);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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

  const handleApprove = (id) => {
    axiosInstance
      .post(`/acceptCrimeById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setData(
            data.map((caseDetails) =>
              caseDetails._id === id
                ? { ...caseDetails, adminApproved: true }
                : caseDetails
            )
          );
          navigate("/policeviewcases");
          window.location.reload();
        } else {
          console.error("Failed to approve");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleReject = (id) => {
    axiosInstance
      .post(`/rejectCrimeById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          navigate("/policeviewcases");
          window.location.reload();
        } else {
          console.error("Failed to reject");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

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
    } else if (["mp4"].includes(fileExtension)) {
      return (
        <video controls className="img-fluid">
          <source src={fileUrl} type="video/mp4" />
        </video>
      );
    } else if (["webm"].includes(fileExtension)) {
      return (
        <video controls className="img-fluid">
          <source src={fileUrl} type="video/webm" />
        </video>
      );
    } else if (["ogg"].includes(fileExtension)) {
      return (
        <video controls className="img-fluid">
          <source src={fileUrl} type="video/ogg" />
        </video>
      );
    } else if (["mp3"].includes(fileExtension)) {
      return (
        <audio controls className="w-100">
          <source src={fileUrl} type="audio/mpeg" />
        </audio>
      );
    } else if (["wav"].includes(fileExtension)) {
      return (
        <audio controls className="w-100">
          <source src={fileUrl} type="audio/wav" />
        </audio>
      );
    } else if (["ogg"].includes(fileExtension)) {
      return (
        <audio controls className="w-100">
          <source src={fileUrl} type="audio/ogg" />
        </audio>
      );
    } else {
      return <p>Unsupported file type.</p>;
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="case-details-h6 text-center pt-3">
        <span>Case No: 203 </span>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="case-details-span">
            <span>Victim Information</span>
          </div>
          <div className="mt-4 container ms-4">
            <div className="row">
              <div className="col-3 case-details-victim">
                <div>
                  <label>Name </label>
                </div>
                <div>
                  <label>Gender </label>
                </div>
                <div>
                  <label>Email </label>
                </div>
                <div>
                  <label>Address </label>
                </div>
              </div>
              <div className="col-5 case-details-victim1">
                <div>
                  <span>{caseDetails.victimName}</span>
                </div>
                <div>
                  <span>{caseDetails.victimGender}</span>
                </div>
                <div>
                  <span>{caseDetails.victimEmail} </span>
                </div>
                <div>
                  <span>{caseDetails.victimAddress}</span>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="case-details-span">
            <span>Incident Details</span>
          </div>
          <div className="mt-4 container ms-4">
            <div className="row">
              <div className="col-3 case-details-victim">
                <div>
                  <label>Date </label>
                </div>
                <div>
                  <label>Time </label>
                </div>
                <div>
                  <label>Location </label>
                </div>
                <div>
                  <label>City </label>
                </div>
              </div>
              <div className="col-5 case-details-victim1">
                <div>
                  <span>{caseDetails.incidentDate.slice(0,10)}</span>
                </div>
                <div>
                  <span>{caseDetails.incidentTime}</span>
                </div>
                <div>
                  <span>{caseDetails.incidentLocation} </span>
                </div>
                <div>
                  <span>{caseDetails.incidentCity}</span>
                </div>
              </div>
              <div className="col-4"></div>
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
              <div className="col-3 case-details-victim">
                <div>
                  <label>Name</label>
                </div>
                <div>
                  <label>Contact </label>
                </div>
                <div>
                  <label>Address </label>
                </div>
                <div>
                  <label>Statement </label>
                </div>
              </div>
              <div className="col-5 case-details-victim1">
                <div>
                  <span>{caseDetails.witnessName}</span>
                </div>
                <div>
                  <span>{caseDetails.witnessContact}</span>
                </div>
                <div>
                  <span>{caseDetails.witnessAddress} </span>
                </div>
                <div>
                  <span>{caseDetails.witnessStatement}</span>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="case-details-span">
            <span>Case Details</span>
          </div>
          <div className="mt-4 container ms-4">
            <div className="row">
              <div className="col-3 case-details-victim">
                <div>
                  <label> Crime Type </label>
                </div>
                <div>
                  <label>Description </label>
                </div>
              </div>
              <div className="col-5 case-details-victim1">
                <div>
                  <span>{caseDetails.caseType}</span>
                </div>
                <div>
                  <span>{caseDetails.caseDescription}</span>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
      </div>
      



      <div className="row mt-5">

      <div className="col">
          <div className="case-details-span ">
            <span>Case Information</span>
          </div>
          <div className="mt-4 container ms-4">
            <div className="row">
              <div className="col-3 case-details-victim">
                {caseDetails.caseType == "Theft" ? (
                  <>
                    <div>
                      <label>Stolen Items</label>
                    </div>
                    <div>
                      <label>Suspected Perpetrator (Description)</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Assault" ? (
                  <>
                    <div>
                      <label>Injuries Sustained (Description)</label>
                    </div>
                    <div>
                      <label>Medical Attention</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Vandalism" ? (
                  <>
                    <div>
                      <label>Description of Damage</label>
                    </div>
                    <div>
                      <label>Estimated Cost of Damage</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Missing Person" ? (
                  <>
                    <div>
                      <label>Missing Person Name</label>
                    </div>
                    <div>
                      <label>Description of Missing Person</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Domestic Violence" ? (
                  <>
                    <div>
                      <label>Describe the Incident</label>
                    </div>
                    <div>
                      <label>Injuries Sustained (if any)</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Fraud" ? (
                  <>
                    <div>
                      <label>Description of Fraud</label>
                    </div>
                    <div>
                      <label>Estimated Financial Loss</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Others" ? (
                  <>
                    <div>
                      <label>Case Description</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="col-5 case-details-victim1">
                {caseDetails.caseType == "Theft" ? (
                  <>
                    <div>
                      <label>{caseDetails.theftStolenItems}</label>
                    </div>
                    <div>
                      <label>{caseDetails.theftStolenSuspected}</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Assault" ? (
                  <>
                    <div>
                      <label>{caseDetails.assaultInjuries}</label>
                    </div>
                    <div>
                      <label>{caseDetails.assaultMedicalAttention}</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Vandalism" ? (
                  <>
                    <div>
                      <label>{caseDetails.vandalismDescription}</label>
                    </div>
                    <div>
                      <label>{caseDetails.vandalismCostOfDamage}</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Missing Person" ? (
                  <>
                    <div>
                      <label>{caseDetails.missingPersonName}</label>
                    </div>
                    <div>
                      <label>{caseDetails.missingPersonDescription}</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Domestic Violence" ? (
                  <>
                    <div>
                      <label>{caseDetails.domesticViolenceDescription}</label>
                    </div>
                    <div>
                      <label>{caseDetails.domesticViolenceInjuries}</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Fraud" ? (
                  <>
                    <div>
                      <label>{caseDetails.fraudDescription}</label>
                    </div>
                    <div>
                      <label>{caseDetails.fraudFinancialLoss}</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {caseDetails.caseType == "Others" ? (
                  <>
                    <div>
                      <label>{caseDetails.others}</label>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="col-4"></div>
            </div>
          </div>
          </div>
        
        <div className="col">
          <div className="case-details-span">
            <span>Incident Details</span>
          </div>
          <div className="mt-4 container ms-4">
            <div className="row">
              <div className="col-3 case-details-victim">
                {caseDetails.evidenceFiles.map((evidence, index) => (
                  <div key={index}>
                    <img
                      src={evidenceIcon}
                      alt="Evidence Icon"
                      className="img-thumbnail"
                    />
                    <Link
                      className="mx-3"
                      onClick={() => handleViewEvidence(evidence)}
                    >
                      View
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        type=='request'?<div className="text-center mt-4">
        <button
          className="btn btn-success me-2"
          onClick={() => handleApprove(caseDetails._id)}
        >
          Approve
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleReject(caseDetails._id)}
        >
          Reject
        </button>
      </div>:<div className="text-center mt-4">
        <button
          className="btn btn-danger me-2"
          
        >
          Add Updates
        </button>
        
      </div>
      }
      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Evidence Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedEvidence && getMediaElement(selectedEvidence.file)}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CaseDetails;
