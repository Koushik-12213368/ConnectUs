import React from "react";

function Feeling() {
    return(
        <div className="container mt-5">  
            <div className="row text-center">
                <h3 className="mt-5">How Are You Feeling Today?</h3>  
                
                {/* Feelings Row */}
                <div className="d-flex justify-content-center gap-4 flex-wrap mt-5">
                    {/* Great */}
                    <div className="feeling-card">
                        <div className="emoji">😊</div>
                        <p className="feeling-text">Great</p>
                    </div>

                    {/* Okay */}
                    <div className="feeling-card">
                        <div className="emoji">🙂</div>
                        <p className="feeling-text">Okay</p>
                    </div>

                    {/* Sad */}
                    <div className="feeling-card">
                        <div className="emoji">😔</div>
                        <p className="feeling-text">Sad</p>
                    </div>

                    {/* Anxious */}
                    <div className="feeling-card">
                        <div className="emoji">😰</div>
                        <p className="feeling-text">Anxious</p>
                    </div>

                    {/* Stressed */}
                    <div className="feeling-card">
                        <div className="emoji">😫</div>
                        <p className="feeling-text">Stressed</p>
                    </div>
                </div>

                {/* Assessment Button */}
                <div className="mt-5">
                    <button className="assessment-btn">
                        Take Full Assessment Now!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Feeling;