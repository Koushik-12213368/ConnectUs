import React from "react";

function Testimonial() {
    return (
        <div className="container border-top mb-5">
            <div className="row mt-5 p-5">
                <h1 className="text-center mb-5 p-3">Student Testimonials</h1>
                
                <div className="row mb-5 p-5">
                    {/* Testimonial 1 */}
                    <div className="col-md-4 ">
                        <div className="testimonial-card">
                            <span className="stars">⭐⭐⭐⭐⭐</span>
                            <h4 className="testimonial-text">
                                "This platform helped me find support during my hardest semester"
                            </h4>
                            <p className="testimonial-author">- Alex, Junior</p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="col-md-4">
                        <div className="testimonial-card">
                            <span className="stars">⭐⭐⭐⭐⭐</span>
                            <h4 className="testimonial-text">
                                "The resources and community made a huge difference in my daily life"
                            </h4>
                            <p className="testimonial-author">- Sarah, Senior</p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="col-md-4 ">
                        <div className="testimonial-card">
                            <span className="stars">⭐⭐⭐⭐⭐</span>
                            <h4 className="testimonial-text">
                                "Finally a place that understands student mental health"
                            </h4>
                            <p className="testimonial-author">- Michael, Grad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;