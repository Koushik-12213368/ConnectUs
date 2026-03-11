import React from "react";


function Event() {
    return (
        <div className="event-section">

            <h1 className="event-heading">
                Upcoming Wellness Events ✨
            </h1>

            <div className="event-grid">

                {/* Event 1 */}
                <div className="event-card">
                    <h3 className="event-title">
                        🧘 Mindfulness for Exam Season
                    </h3>

                    <div className="event-date">
                        📅 Tomorrow • 3:00 PM • Virtual
                    </div>

                    <button className="event-btn">
                        Join Live →
                    </button>
                </div>

                {/* Event 2 */}
                <div className="event-card">
                    <h3 className="event-title">
                        👥 Peer Support Circle
                    </h3>

                    <div className="event-date">
                        📅 Every Thursday • 4:00 PM • Student Union
                    </div>

                    <button className="event-btn">
                        RSVP →
                    </button>
                </div>

                {/* Event 3 */}
                <div className="event-card">
                    <h3 className="event-title">
                        📊 Understanding Your Mental Health
                    </h3>

                    <div className="event-date">
                        Workshop Series • Starting Monday
                    </div>

                    <button className="event-btn">
                        RSVP →
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Event;