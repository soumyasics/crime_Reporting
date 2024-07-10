import React, { useEffect, useState } from 'react';
import '../../Assets/Styles/PrivacyPolicy.css';
import axiosInstance from '../Constants/BaseUrl';

function EditPrivacyPolicy() {
  const [content, setContent] = useState('');

  const getData = () => {
    axiosInstance.post('/viewpolicy')
      .then((res) => {
        if (res.data.status === 200) {
          setContent(res.data.data || '');
        } else {
          setContent('');
        }
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUpdate = () => {
    
    console.log('Content updated:', content);
  };

  const handleCancel = () => {
    
    getData();
  };

  return (
    <div className="container">
      <div className="pt-5">
        <h4 className="admin-dash-h4">Welcome Admin</h4>
        <p className="admin-dash-para">All systems are running smoothly</p>
      </div>
      <div className="privacy_policy_form_container container-fluid">
        <div className="row">
          <div className="col-md-2">
            <label className="privacy_policy_label" htmlFor="content">Content</label>
          </div>
          <div className="col-md-1">
            <label className="privacy_policy_label" htmlFor="content">:</label>
          </div>
          <div className="col-md-9">
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              className="privacy_policy_content-textarea text-justify"
            ></textarea>
            <button type="button" onClick={handleUpdate} className="btn btn-success m-3">Update</button>
            <button type="button" onClick={handleCancel} className="btn btn-danger m-3">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPrivacyPolicy;
