import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login';
import AdminLogin from './components/Pages/AdminLogin';
import ServiceDetails from './components/Pages/ServiceDetails';
import Header from './components/Pages/Header';
import AdminDashboard from './components/Pages/AdminDashboard';

function App() {
  return (
    <div>
      <Router> 
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/service" element={<ServiceDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
