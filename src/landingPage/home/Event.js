import React from "react";

function Event() {
    return (
        <div className="container mt-5 border-top p-5">
            <div className="row text-center mt-5">
                <h1 className="mb-5">Upcoming Wellness Events</h1>

                <div className="col-md-6 mx-auto p-3">
                    <div className="card border-0 shadow p-4 mt-3">
                        <div className="card-body">
                            <h3 className="card-title h4 fw-bold mb-3">
                                🧘 Mindfulness for Exam Season
                            </h3>
                            <p className="text-primary bg-light bg-opacity-50 rounded-pill py-2 px-4 d-inline-block mb-4">
                                📅 Tomorrow • 3:00 PM • Virtual
                            </p>
                            <div>
                                <button className="btn btn-primary rounded-pill px-5 py-2">
                                    Join Live →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* 2nd card:  */}

                <div className="col-md-6 mx-auto p-3">
                    <div className="card border-0 shadow p-4 mt-3">
                        <div className="card-body">
                            <h3 className="card-title h4 fw-bold mb-3">
                                👥 Peer Support Circle  
                            </h3>
                            <p className="text-primary bg-light bg-opacity-50 rounded-pill py-2 px-4 d-inline-block mb-4">
                                📅 Every Thursday • 4:00 PM • Student Union
                            </p>
                            <div>
                                <button className="btn btn-primary rounded-pill px-5 py-2">
                                   RSVP →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mb-5 p-3" >
                    <div className="col-md-6 mx-auto mt-5 p-3">
                        <div className="card border-0 shadow p-4">
                            <div className="card-body">
                                <h3 className="card-title h4 fw-bold mb-3">
                                    📊 Understanding Your Mental Health  
                                </h3>
                                <p className="text-primary bg-light bg-opacity-50 rounded-pill py-2 px-4 d-inline-block mb-4">
                                    Workshop Series • Starting Monday
                                </p>
                                <div>
                                    <button className="btn btn-primary rounded-pill px-5 py-2">
                                    RSVP →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Event;