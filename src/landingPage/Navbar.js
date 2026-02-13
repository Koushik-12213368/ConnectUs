import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="Images/logo1.png" 
            alt="MindWell" 
            style={{ width: "15%", marginRight: "10px" }}
          />
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto navLink"   style={{
                marginLeft: "50px",  
                display: "flex",
                gap: "30px"  
            }}>  
            <li className="nav-item">
              <Link className="nav-link active NavLink" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active NavLink" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active NavLink" to="/community">Community</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active NavLink" to="/about" style={{whiteSpace: "nowrap"}}>About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active NavLink" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active NavLink" to="/signup" style={{whiteSpace: "nowrap"}}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;