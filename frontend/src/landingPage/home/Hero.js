import { Link } from "react-router-dom";
import React from "react";


function Hero() {
    return(
       <div className="container-fluid p-0 hero-shell">
            <div 
                className="d-flex align-items-center justify-content-center text-center hero-banner"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Images/hero2.jpg')`,
                    color: "white",
                }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold hero-title-main">Your Mental Health Matters</h1>
                    
                    <p className="fs-4 fst-italic mt-3 hero-subtext">
                        "You do not have to struggle in silence."
                    </p>
                    
                    <p className="fs-6 text-light-emphasis">Supportive tools for students, anytime.</p>

                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Link className="btn btn-primary btn-lg px-4 hero-btn-primary" to="/login">Start Check-In</Link>
                        <Link className="btn btn-outline-light btn-lg px-4 hero-btn-secondary" to="/resources">Explore Resources</Link>
                    </div>

                    <div className="mt-4 ">
                        <span className="badge bg-white text-dark p-3 fs-6 hero-pill">
                            Trusted by students for daily wellness support
                        </span>
                    </div>
                    
                </div>
            </div>
       </div>
    );
}

export default Hero;