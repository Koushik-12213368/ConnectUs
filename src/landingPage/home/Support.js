import React from "react";

function Support(){
    return(
        <div className="container mt-5">
            <div className="row text-center ">
                <div className="mt-5"></div>
                <h2 className="mt-5">How We Support You</h2> 
                
                <div className="row mt-5">
                    <div className="col-md-4 mb-4"> 
                        <div className="support-card mt-5">
                            <h4 className="support-title">Assessment</h4> 
                            <ul className="support-list">
                                <li>Self-check</li>
                                <li>Tools & Tracking</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-4 mb-4"> 
                        <div className="support-card mt-5">
                            <h4 className="support-title">Wellness</h4>
                            <ul className="support-list">
                                <li>Guided Meditation</li>
                                <li>Exercise</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-4 mb-4"> 
                        <div className="support-card mt-5">
                            <h4 className="support-title">Peer Support</h4>
                            <ul className="support-list">
                                <li>Anonymous Discussion</li>
                                <li>Forums</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">

                    <div className="col-md-4 mb-4"> 
                        <div className="support-card mt-5">
                            <h4 className="support-title">Resources</h4>
                            <ul className="support-list">
                                <li>Articles</li>
                                <li>Videos</li>
                                <li>Guides</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4"> 
                        <div className="support-card mt-5">
                            <h4 className="support-title">Crisis Help</h4>
                            <ul className="support-list">
                                <li>Emergency</li>
                                <li>Support 24/7</li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4"> 
                        <div className="support-card mt-5">
                            <h4 className="support-title">Workshop</h4>
                            <ul className="support-list">
                                <li>Events</li>
                                <li>Seminar</li>
                                <li>Webinars</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-5"></div>

                </div>

            </div>
        </div>
    )
}

export default Support;