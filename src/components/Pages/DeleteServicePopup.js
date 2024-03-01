import React,{useState} from 'react'
import '../Styles/DeleteServicePopup.css'

function DeleteServicePopup({onClose}) { 
  return (
    <div className='DS_overlay'>
        <div className='DS_container'>
        <div className="DS_header">
        <div className='DSh3'>
        <h3>Delete Service</h3>
        </div>
            <button className="close_button" onClick={onClose}>X</button>
        </div>
        <hr></hr>
        <div className="DS_dropdown-container">
          <select className="DS_select">
            <option value="" >Select service to delete</option>       
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
          </select> 
        </div>
        <button className="delete_button">Delete</button>
        </div>
    </div>
  )
}

export default DeleteServicePopup