import React, { useEffect, useState } from 'react';
import axiosInstance from '../Constants/BaseUrl';
import { Link } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";

function ScrbGenerateCrimeAlert() {
    const [data, setData] = useState([]);
    const [district, setDistrict] = useState([]);
    const [policeStations, setPoliceStations] = useState([]);
    const [caseTypes, setCaseTypes] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedPoliceStation, setSelectedPoliceStation] = useState('');
    const [selectedCaseType, setSelectedCaseType] = useState('');

    const getData = () => {
        axiosInstance.post("/viewallcrime", {
            district: selectedDistrict,
            policeStation: selectedPoliceStation,
            caseType: selectedCaseType
        })
        .then((res) => {
            console.log(res);
            if (res.data.status === 200) {
                setData(res.data.data || []);
            } else {
                setData([]);
            }
        })
        .catch((err) => {
            console.log("Error", err);
        });
    };

    const getDistricts = () => {
        axiosInstance.post("/viewallcrime")
        .then((res) => {
            if (res.data.status === 200) {
                setDistrict(res.data.data || []);
            }
        })
        .catch((err) => {
            console.log("Error", err);
        });
    };

    const getPoliceStations = () => {
        axiosInstance.post(`/viewallcrime`)
        .then((res) => {
            if (res.data.status === 200) {
                setPoliceStations(res.data.data || []);
            }
        })
        .catch((err) => {
            console.log("Error", err);
        });
    };

    const getCaseTypes = () => {
        axiosInstance.post("/viewallcrime")
        .then((res) => {
            if (res.data.status === 200) {
                setCaseTypes(res.data.data || []);
            }
        })
        .catch((err) => {
            console.log("Error", err);
        });
    };

    useEffect(() => {
        getData();
        getDistricts();
        getCaseTypes();
    }, []);

    useEffect(() => {
        if (selectedDistrict) {
            getPoliceStations(selectedDistrict);
        } else {
            setPoliceStations([]);
        }
        getData();
    }, [selectedDistrict, selectedPoliceStation, selectedCaseType]);

    return (
        <div>
            <div className='container'>
                <div className='pt-5'>
                    <h4 className='scrb-dash-h4'>Welcome SCRB</h4>
                    <p className='scrb-dash-para'>All Systems are running smoothly</p>
                </div>
                <div className='text-center mt-5 text-danger'>
                    <div className='row'>
                        <h5>View All Cases</h5>
                    </div>
                    <div className='row m-3'>
                        <div className='col-md-3 text-black align-left'>
                            Filter by
                        </div>
                        <div className='col-md-3'>
                            <select className="form-select text-black" onChange={(e) => setSelectedDistrict(e.target.value)}>
                                <option value="">Select District</option>
                                {district.map(district => (
                                    <option key={district._id} value={district._id}>{district.district}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <select className="form-select" onChange={(e) => setSelectedPoliceStation(e.target.value)}>
                                <option value="">Select Police Station</option>
                                {policeStations.map(station => (
                                    <option key={station._id} value={station._id}>{station.psId.policestationname}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <select className="form-select" onChange={(e) => setSelectedCaseType(e.target.value)}>
                                <option value="">Case Type</option>
                                {caseTypes.map(caseType => (
                                    <option key={caseType._id} value={caseType._id}>{caseType.caseType}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-md-6 text-black'>Filtered Case Details({data.length})</div>
                        <div className='col-md-6'>
                            <button className='btn btn-danger'>Generate Alert</button>
                        </div>
                    </div>
                </div>
                <div>
                    {data.length === 0 && (
                        <h1>No Data Found</h1>
                    )}
                    {data.length > 0 && (
                        <table className="table table-bordered table-striped mt-4">
                            <thead className='text-center newpolice-stationreq-thead'>
                                <tr>
                                    <th scope="col">Sl/No</th>
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
                                {data.map((caseview, index) => (
                                    <tr key={caseview._id}>
                                        <th>{index + 1}</th>
                                        <td>{caseview.psId.policestationname}</td>
                                        <td>{caseview.victimName}</td>
                                        <td>{caseview.caseType}</td>
                                        <td>{caseview.witnessName}</td>
                                        <td>{caseview.incidentDate.slice(0, 10)}</td>
                                        <td>{caseview.incidentLocation}</td>
                                        <td>
                                            <Link to={`/scrb_viewcasedetails/${caseview._id}`}>
                                                <button className='viewallpolicest_icon'>
                                                    <IoEyeSharp />
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
    );
}

export default ScrbGenerateCrimeAlert;
