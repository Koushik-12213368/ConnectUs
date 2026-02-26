import React from "react";
import { Link } from "react-router-dom";

function Resource() {
    return (
        <div className="container mt-4 p-5">
            <h1 className="text-center mt-5">Popular Resources For Students</h1>
            <div className="row p-3">
                {/* Single Card Design */}
                <div className="stress-card mt-5">
                    <div className="stress-card-content">
                        <h3 className="stress-title">📘 Managing Exam Stress & Academic Anxiety</h3>
                        <p className="stress-description">
                            Evidence-based strategies for finals preparation
                        </p>
                        <button className="stress-btn">
                            Read More →
                        </button>
                    </div>
                </div>

                <div className="stress-card mt-5">
                    <div className="stress-card-content">
                        <h3 className="stress-title">😴 Sleep Hygiene for College Students  </h3>
                        <p className="stress-description">
                            How to improve sleep quality during busy semesters 
                        </p>
                        <button className="stress-btn">
                            Read More →
                        </button>
                    </div>
                </div>

                <div className="stress-card mt-5">
                    <div className="stress-card-content">
                        <h3 className="stress-title">🎓 Overcoming Imposter Syndrome  </h3>
                        <p className="stress-description">
                            "I don't belong here" - You're not alone
                        </p>
                        <button className="stress-btn">
                            Read More →
                        </button>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <Link className="stress-btn mb-5" to="/resources" style={{textDecoration: "none"}}>
                        View All →
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Resource;