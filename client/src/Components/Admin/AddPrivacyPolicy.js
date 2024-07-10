import React from 'react'
import '../../Assets/Styles/PrivacyPolicy.css'

function AddPrivacyPolicy() {
  return (
    <div className='container'>
        <div className='pt-5'>
          <h4 className='admin-dash-h4'>Welcome Admin</h4>
          <p className='admin-dash-para'>All System are running smoothly</p>
        </div>
        <div className="privacy_policy_form_container container">
            <div className='row'>
                <div className='col-md-2'>
                    <label className='privacy_policy_label' htmlFor="content">Content</label>
                </div>
                <div className='col-md-1'>
                    <label className='privacy_policy_label' htmlFor="content">:</label>
                </div>
                <div className='col-md-9'>
                    <textarea id="content" className="privacy_policy_content-textarea"></textarea>
                    <button type="submit" className="privacy_policy_submit-button">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPrivacyPolicy