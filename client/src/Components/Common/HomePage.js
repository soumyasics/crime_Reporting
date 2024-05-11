import React from "react";
import "../../Assets/Styles/HomePage.css";
import img from "../../Assets/Images/landingmain.jpg";

function HomePage() {
  return (
    <div>
      <div className="home_page">
        <div className="home_page_head">
          <p className="home_page_head_title">
            Secure Neighborhoods:
            <br />
            Unveiling the Crime Reporting System
          </p>
          <p className="home_page_head_para">
            Be the catalyst for change—report, engage, and build a secure future
            for your community with the Crime Reporting System.
          </p>
        </div>

        <div className="col-12 home_page_img mt-3">
          <img src={img} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
