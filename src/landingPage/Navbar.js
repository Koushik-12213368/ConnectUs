import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img 
            src="Images/logo1.png" 
            alt="MindWell" 
            style={{ width: "15%", marginRight: "10px" }}
          />
        </a>

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
              <a className="nav-link active NavLink" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active NavLink" href="/resources">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active NavLink" href="/community">Community</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active NavLink" href="/about" style={{whiteSpace: "nowrap"}}>About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active NavLink" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active NavLink" href="/signup" style={{whiteSpace: "nowrap"}}>Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;