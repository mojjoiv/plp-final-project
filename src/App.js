// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PersonalDetails from './components/PersonalDetails';
import QRCodePage from './components/QRCodePage';

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
          </ul>
        </nav>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/details">
            <PersonalDetails />
          </Route>
          <Route path="/qr">
            <QRCodePage />
          </Route>
          <Route path="/">
            <h2>Welcome to the QR Code Generator App</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
