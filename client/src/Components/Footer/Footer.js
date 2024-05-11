import React from "react";
import "../../Assets/Styles/Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer ">
        <div className="container footer_box">
          <div>
            <p className="footer_name" >Crime Reporting</p>
            </div>
          <div>
            <p className="footer_title" >Terms & Policies</p>
            <p className="footer_content" >Terms of Service</p>
            <p className="footer_content" >Privacy Policy</p>
          </div>
          <div>
            <p className="footer_title" >Contact</p>
            <p className="footer_content" >(+91)1234567890</p>
            <p className="footer_content" >crimereporting@gmail.com</p>
          </div>
          <div>
            <p className="footer_title" >Location</p>
            <p className="footer_content" >abc building</p>
            <p className="footer_content" >aaa</p>
            <p className="footer_content" >crimereporting@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
