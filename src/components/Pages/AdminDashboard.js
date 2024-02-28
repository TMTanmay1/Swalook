import React, { useState } from 'react';
import Header from './Header.js';
import '../../components/Styles/AdminDashboard.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DescriptionIcon from '@mui/icons-material/Description';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

function AdminDashboard() {

  const [data, setData] = useState([
    { Name: 'John Doe', Date: '2024-02-28', ServiceTaken: 'Service A', MobileNo: '123-456-7890' },
    { Name: 'kohn', Date: '2024-02-28', ServiceTaken: 'Service A', MobileNo: '123-456-7890' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = data.filter(row =>
    row.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.Date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.ServiceTaken.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.MobileNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='Admin_dash_main'>
      <Header />
      <div className='horizontal-container'>
        <div className='vertical-navigation'>
        <div className='ver_nav'>
          <div className="icon-container">
            <BookOnlineIcon style={{ fontSize: 30, margin: '10px', color: 'white' }} />
            <span className="icon-text">Appointment</span>
          </div>
          <div className="icon-container">
            <DescriptionIcon style={{ fontSize: 30, margin: '10px', color: 'white' }} />
            <span className="icon-text">Invoice</span>
          </div>
          <div className="icon-container">
            <ShowChartIcon style={{ fontSize: 30, margin: '10px', color: 'white' }} />
            <span className="icon-text">Analysis</span>
          </div>
          <div className="icon-container">
            <StorefrontIcon style={{ fontSize: 30, margin: '10px', color: 'white' }} />
            <span className="icon-text">Store</span>
          </div>
        </div>

        </div>
        <div className='main-content'>
          <div className="content-header">
            <h1>Welcome Admin!</h1>
            <input type="text" placeholder="Upcoming Appointments...." value={searchTerm} onChange={handleSearchChange} style={{ fontSize: '16px' }}/>
          </div>

          <div className="content-body">
            <div className="content-box">
              <h3>Sales Graph</h3>
              <img className='sales_img' src="path_to_your_image.jpg" alt="Sales Graph" />
            </div>
            <div className="content-box">
              <h3>User Service</h3>
              <div className='US-con'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Service Taken</th>
                      <th>Mobile No</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRows.map((row, index) => (
                      <tr key={index}>
                        <td>{row.Name}</td>
                        <td>{row.Date}</td>
                        <td>{row.ServiceTaken}</td>
                        <td>{row.MobileNo}</td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="content-footer">
            <h3>Billing Table</h3>
            <div className='BT-con'>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
