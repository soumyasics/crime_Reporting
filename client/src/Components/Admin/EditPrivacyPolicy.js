import React, { useEffect, useState } from 'react';
import axiosInstance from '../Constants/BaseUrl';
import { toast } from 'react-toastify';

function EditPrivacyPolicy() {
  const [content, setContent] = useState('');
  const id = "668e2d8930ef662c4c9d6610";

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    axiosInstance.get(`/viewpolicy/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setContent(res.data.data || '');
        } else {
          setContent('');
        }
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUpdate = () => {
    axiosInstance.post(`/editprivacypolicy/${id}`, { content })
      .then((res) => {
        if (res.data.status === 200) {
          toast.success("Updated Successfully");
        } else {
          toast.warning(res.data.msg);
        }
      })
      .catch((err) => {
        toast.error("Update failed");
        console.error('Error updating data:', err);
      });
  };

  const handleCancel = () => {
    getData();
  };

  return (
    <div className="container">
      <div className="pt-5">
        <h4 className="admin-dash-h4">Welcome Admin</h4>
        <p className="admin-dash-para">All System are running smoothly</p>
      </div>
      <div className="privacy_policy_form_container container-fluid">
        <div className="row">
          <div className="col-md-2">
            <label className="privacy_policy_label" htmlFor="content">Content</label>
          </div>
          <div className="col-md-1">
            <label className="privacy_policy_label">:</label>
          </div>
          <div className="col-md-9">
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              className="privacy_policy_content-textarea text-justify"
            />
            <button type="button" onClick={handleUpdate} className="btn btn-success m-3">Update</button>
            <button type="button" onClick={handleCancel} className="btn btn-danger m-3">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPrivacyPolicy;
