import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PersonalDetails from './components/PersonalDetails';
import QRCodePage from './components/QRCodePage';
import QRCodeReader from './components/QRCodeReader';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/scan">Scan QR Code</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<PersonalDetails />} />
          <Route path="/qr" element={<QRCodePage />} />
          <Route path="/scan" element={<QRCodeReader />} />
          <Route path="/" element={<h2>Welcome to the QR Code Generator App</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
