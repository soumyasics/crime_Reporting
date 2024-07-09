import React from 'react';
import '../../Assets/Styles/AddCaseUpdate.css'; 

function AddCaseUpdate() {
  return (
    <div className='police_add_case_Update_main_div'>
        <div className='text-center'> <label className='add_update_label'>Add Case Update</label></div>
      
      <div className='container police_addcase_update'>
        <div className='row police_add_case_row'>
          <div className='col-4'><p className='police_add_case_update_label'>Case Number</p></div>
          <div className='col-1'>:</div>
          <div className='col-7'>
            <input type='text' className='form-control'/>
          </div>
        </div>
        <div className='row police_add_case_row'>
          <div className='col-4'><p className='police_add_case_update_label'>Office Incharge</p></div>
          <div className='col-1'>:</div>
          <div className='col-7'>
            <input type='text' className='form-control'/>
          </div>
        </div>
        <div className='row police_add_case_row'>
          <div className='col-4'><p className='police_add_case_update_label'>Date of Update</p></div>
          <div className='col-1'>:</div>
          <div className='col-7'>
            <input type='date' className='form-control'/>
          </div>
        </div>
        <div className='row police_add_case_row'>
          <div className='col-4'><p className='police_add_case_update_label'>Current Status</p></div>
          <div className='col-1'>:</div>
          <div className='col-7'>
            <input type='text' className='form-control'/>
          </div>
        </div>
        <div className='row police_add_case_row'>
          <div className='col-4'><p className='police_add_case_update_label'>Progress Description</p></div>
          <div className='col-1'>:</div>
          <div className='col-7'>
            <textarea type='text' className='form-control' rows={5}/>
          </div>
        </div>
        <div className='row police_add_case_row'>
          <div className='col-4'></div>
          <div className='col-1'></div>
          <div className='col-7'>
                <button className="btn btn-danger mb-3 add_update_button" type="submit">
                  Submit
                </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AddCaseUpdate;
