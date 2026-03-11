import React from "react";

function Footer() {
    return (
        <footer className="bg-light border-top mt-5">
            <div className="container py-5">
                <div className="row">
                    {/* Brand Section */}
                    <div className="col-md-4 mb-4">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            
                            <img src="/Images/ConnectUs.png" alt="ConnectUS"  className="me-2" style={{width: "15%"}}/>
                            
                            <span className="fw-bold fs-4">ConnectUs</span>
                        </div>
                        <p className="text-secondary">
                            Supporting student wellness on campus and beyond
                        </p>
                        <p className="text-secondary small">
                            © 2024 Mental Health Awareness System for Higher Education
                        </p>
                    </div>

                    {/* Quick Links & Social */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-semibold mb-3">Quick Links</h5>
                        <div className="d-flex flex-wrap gap-4 mb-4">
                            <a href="/about" className="text-secondary text-decoration-none QuickLinks">About</a>
                            <a href="/privacy" className="text-secondary text-decoration-none QuickLinks">Privacy</a>
                            <a href="/terms" className="text-secondary text-decoration-none QuickLinks">Terms</a>
                            <a href="/contact" className="text-secondary text-decoration-none QuickLinks">Contact</a>
                        </div>
                        
                        <h5 className="fw-semibold mb-3">Follow Us</h5>
                        <div className="d-flex gap-3 fs-3 ">
                            <i class="fa-brands fa-facebook ftrLink"></i>
                            <i class="fa-brands fa-instagram ftrLink"></i>
                            <i class="fa-brands fa-x-twitter ftrLink"></i>
                            <i class="fa-brands fa-youtube ftrLink"></i>
                        </div>
                    </div>

                    {/* Crisis Support */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-semibold mb-3">Crisis Support</h5>
                        <div className="bg-white p-4 rounded-3 border">
                            <p className="mb-2">
                                <span className="fw-bold">Emergency: </span> 
                                <span className="fw-bold">988</span> 
                                <span className="text-secondary ms-2">(24/7)</span>
                            </p>
                            <p className="mb-2">
                                <span className="fw-bold">Campus:</span> 
                                <span className="text-secondary ms-2">(555) 123-4567</span>
                            </p>
                            <p className="mb-0">
                                <span className="fw-bold">Email:</span> 
                                <span className="text-secondary ms-2">help@ConnectUs.edu</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="row mt-4 pt-4 border-top">
                    <div className="col-12 text-center">
                        <p className="small text-secondary mb-0">
                            © 2024 Mental Health Awareness System for Higher Education. 
                            Made with 💚 for student wellness
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;