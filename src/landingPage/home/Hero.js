import React from "react";

function Hero() {
    return(
       <div className="container-fluid p-0 ">
            <div 
                className="d-flex align-items-center justify-content-center text-center "
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Images/hero2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "600px",
                    width: "100%",
                    color: "white"
                }}
            >
                <div className="container">
                    <h1 className="display-3 fw-bold">YOUR MENTAL HEALTH MATTERS</h1>
                    
                    <p className="fs-3 fst-italic mt-3">
                        "You don't have to struggle in silence"
                    </p>
                    
                    <p className="fs-5">- Anonymous Student</p>

                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <button className="btn btn-primary btn-lg px-4">Check-In</button>
                        <button className="btn btn-outline-light btn-lg px-4">Explore Resources</button>
                    </div>

                    <div className="mt-4 ">
                        <span className="badge bg-white text-dark p-3 fs-6">
                            How are you? 😊 😐 😔
                        </span>
                    </div>
                    
                </div>
            </div>
       </div>
    );
}

export default Hero;