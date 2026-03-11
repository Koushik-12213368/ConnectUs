import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="about-container">

      {/* Top Section */}
      <div className="hero-top text-center">
        <h1 className="about-title">About Us</h1>
        <p className="hero-tagline">
          Supporting Students Through 
          <span> Stress & Growth</span>
        </p>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <h3>Our Mission 💚</h3>
        <p>
          We created this platform to provide a safe, supportive space 
          for students facing stress, anxiety, and academic pressure.
        </p>
      </div>

      {/* Why Us Section */}
      <div className="why-section">
        <h3>Why Choose Us?</h3>

        <div className="features">
          <div className="feature-card">
            <h5>🕶 Anonymous Sharing</h5>
            <p>Express freely without fear of judgment.</p>
          </div>

          <div className="feature-card">
            <h5>📝 Self Assessments</h5>
            <p>Understand your mental well-being better.</p>
          </div>

          <div className="feature-card">
            <h5>🌿 Wellness Resources</h5>
            <p>Practical tools to manage stress and anxiety.</p>
          </div>

          <div className="feature-card">
            <h5>🤝 Peer Support</h5>
            <p>Connect with others who truly understand.</p>
          </div>
        </div>
      </div>


        {/* ================= SECTION 3 – HOW IT HELPS ================= */}

        <div className="how-section">
        <h2 className="section-title">How It Helps</h2>

        <div className="help-grid">

            <Link to="/assesment" className="help-card link-card">
                <div className="icon">📊</div>
                <h5>Assessments</h5>
                <p>Understand your emotional and mental well-being clearly.</p>
            </Link>

            <Link to="/community" className="help-card link-card">
                <div className="icon">💬</div>
                <h5>Community</h5>
                <p>Share your experiences and grow with others.</p>
            </Link>

            <div className="help-card">
                <div className="icon">🧘</div>
                <h5>Wellness</h5>
                <p>Guided tools and exercises to reduce stress.</p>
            </div>

            <div className="help-card crisis">
                <div className="icon">🆘</div>
                <h5>Crisis Help</h5>
                <p>Immediate resources when you need urgent support.</p>
            </div>

            </div>
        </div>


        {/* ================= SECTION 4 – PERSONAL MESSAGE ================= */}

        <div className="message-section">
        <h2>🌱 A Message From Us</h2>
        <div className="message-box">
            <p>You are not weak.</p>
            <p>You are not behind.</p>
            <p className="strong-line">You are not alone.</p>
        </div>
        </div>


    </div>
  );
}

export default Hero;