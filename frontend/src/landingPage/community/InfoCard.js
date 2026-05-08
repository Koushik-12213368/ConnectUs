import React from "react";
import { Link } from "react-router-dom";

function InfoCards() {
  const cards = [
    {
      icon: "📊",
      title: "Self Assessments",
      description: "Check your mental wellbeing with simple tools",
      color: "#667eea",
      link: "/assesment"   // MUST match route exactly
    },
    {
      icon: "🧘",
      title: "Wellness Activities",
      description: "Guided meditations and breathing exercises",
      color: "#764ba2"
    },
    {
      icon: "👥",
      title: "Peer Support",
      description: "Connect with others anonymously",
      color: "#48bb78"
    },
    {
      icon: "🆘",
      title: "Crisis Help",
      description: "24/7 emergency support",
      color: "#f56565"
    }
  ];

  return (
    <div className="info-cards mt-5 p-5">
      <h2 className="text-center mt-5 p-5">How We Support You</h2>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ borderTop: `4px solid ${card.color}` }}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>

            {card.link ? (
              <Link
                to={card.link}
                className="card-btn"
                style={{
                  color: card.color,
                  textDecoration: "none",
                  display: "inline-block",
                  fontWeight: "500"
                }}
              >
                Learn More →
              </Link>
            ) : (
              <span
                className="card-btn"
                style={{
                  color: card.color,
                  fontWeight: "500",
                  cursor: "pointer"
                }}
              >
                Learn More →
              </span>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoCards;