import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login';
import AdminLogin from './components/Pages/AdminLogin';

function App() {
  return (
    <div>
      <Router> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
