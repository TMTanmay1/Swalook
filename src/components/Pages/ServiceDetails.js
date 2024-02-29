import React , {useState} from 'react'
import '../Styles/ServiceDetails.css'
import Header from './Header'
import AddServicePopup from './AddServicePopup';

function ServiceDetails() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className='admin_service_container'>
        <div className="service_details_header">
        <h1>Service Details</h1>
        <div>
        <button className="add_service_button" onClick={togglePopup}>Add Service</button>
        <button className="delete_service_button" >Delete Service</button>
        </div>
        </div>
        <div className="horizontal_line_container">
        <hr className="horizontal_line" />
        </div>
        <div className="admin_service_table_container">
        <table className="admin_service_table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows here */}
          </tbody>
        </table>
      </div>
      {isPopupOpen && <AddServicePopup onClose={togglePopup} />}
    </div>
  )
}

export default ServiceDetails