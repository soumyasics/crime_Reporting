import React, { useEffect } from 'react'
import Banner from '../Common/Banner'
import { useNavigate } from 'react-router-dom';

function CitizenLandingPage() {

  const navigate=useNavigate();

  useEffect(() => {
    if (localStorage.getItem("citizenToken") == null) {
      navigate("/");
    }
  });

  return (
    <div>
      {/* <Banner/> */}
      hi
    </div>
  )
}

export default CitizenLandingPage
