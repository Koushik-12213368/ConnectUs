import React from "react";

function Help() {
    return (
        <div className="container mb-5 border-top">
            <div className="row mt-5 p-5">
                <h1 className="mb-5 text-center">Need Immediate Help?</h1>
            
                <div className="bg-white p-5 rounded-4 shadow-lg border border-danger border-opacity-25 mx-auto" style={{ maxWidth: "800px" }}>
                    <h4 className="text-center text-danger mb-4">
                        ⚠️ If this is a medical emergency in India, please call 112
                    </h4>

                    <div className="bg-light p-4 rounded-3 mb-4">
                        <p className="fs-5 mb-3">🧠 Tele-MANAS: <span className="text-danger fw-bold fs-4">14416</span> (24/7)</p>
                        <p className="fs-5 mb-3">📞 Toll-Free: <span className="text-danger fw-bold">1-800-891-4416</span></p>
                        <p className="fs-5 mb-0">🏥 Ambulance (India): <span className="text-danger fw-bold">108</span></p>
                    </div>

                    {/* <div className="text-center d-flex justify-content-center gap-3">
                        <button className="btn btn-danger rounded-pill px-4 py-2 fw-semibold">
                            💬 Start Anonymous Chat
                        </button>
                        <button className="btn btn-outline-danger rounded-pill px-4 py-2 fw-semibold">
                            📞 Call Now
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Help;