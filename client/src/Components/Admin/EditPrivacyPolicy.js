import React from 'react'
import '../../Assets/Styles/PrivacyPolicy.css'

function EditPrivacyPolicy() {
    const privacypolicy="This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you report a crime through our platform. We are committed to protecting your privacy and ensuring the confidentiality of the information you provide. When you report a crime, we may collect personal information such as your name, contact details, and any other information you voluntarily provide. Information related to the crime you are reporting, including descriptions, dates, times, locations, and any other relevant details. Information automatically collected when you use our platform, such as IP address, browser type, and access times. We use the information to investigate and take appropriate actions regarding the crime report. To contact you for additional information or to update you on the status of your report.  To analyze and improve our crime reporting services. To comply with legal requirements and law enforcement requests .We may share your information with law enforcement agencies to facilitate investigations and legal proceedings .We may share information with third-party service providers who assist us in operating our platform and providing services. We may disclose your information to comply with legal obligations, such as responding to subpoenas or court orders. We implement appropriate technical and organizational measures to protect your information against unauthorized access, disclosure, alteration, or destruction. However, no security measures are completely secure, and we cannot guarantee the absolute security of your information.You have the right to request access to the personal information we hold about you. You have the right to request corrections to any inaccurate or incomplete personal information. You have the right to request the deletion of your personal information, subject to certain legal exceptions.You have the right to object to the processing of your personal information. We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our platform. You are advised to review this Privacy Policy periodically for any changes. Make sure to customize this policy according to your specific needs and legal requirements. It's also advisable to consult with a legal professional to ensure compliance with applicable laws and regulations."
  return (
    <div className='container'>
        <div className='pt-5'>
          <h4 className='admin-dash-h4'>Welcome Admin</h4>
          <p className='admin-dash-para'>All System are running smoothly</p>
        </div>
        <div className="privacy_policy_form_container container-fluid">
            <div className='row'>
                <div className='col-md-2'>
                    <label className='privacy_policy_label' htmlFor="content">Content</label>
                </div>
                <div className='col-md-1'>
                    <label className='privacy_policy_label' htmlFor="content">:</label>
                </div>
                <div className='col-md-9'>
                    <textarea id="content" value={privacypolicy} className="privacy_policy_content-textarea text-justify"></textarea>
                    <button type="submit" className=" btn btn-success m-3">Update</button>
                    <button type="submit" className="btn btn-danger m-3">Cancel</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default EditPrivacyPolicy