import React from 'react';
import '../Styles/AddServicePopup.css';

function AddServicePopup({ onClose }) {
  return (
    <div className="popup_overlay">
    <div className="popup_container">
      <div className="popup_header">
       <div className='pph3'>
       <h3>Add Service</h3>
       </div>
        <button className="close_button" onClick={onClose}>X</button>
      </div>
      <hr></hr>
      <div className="sn1">
          <label htmlFor="service_name">Service Name:</label>
          <input type="text" id="service_name" name="service_name" placeholder='Service Name' />
      </div>
      <div className="sn2">
          <label htmlFor="duration">Duration:</label>
          <input type="text" id="duration" name="duration" placeholder="Duration (min)" />
      </div>
      <div className="sn3">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" placeholder="Price" />
      </div>
      <div className="sn_button_container">
          <button className="sn_save_button">Save</button>
        </div>
    </div>
  </div>
  );
}

export default AddServicePopup;
