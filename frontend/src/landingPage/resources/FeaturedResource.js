import React, { useState } from "react";
import { Link } from "react-router-dom";


function FeaturedResources() {

  const featuredData = {
    examAnxiety: {
      title: "🌿 Understanding Exam Anxiety",
      category: "📚 Academic Stress",
      description:
        "A practical guide for students facing academic pressure. Learn proven techniques to manage stress and perform better.",
      level: "📈 Beginner",
      link: "/examanxiety"
    },
    studyTips: {
      title: "📝 Smart Study Techniques",
      category: "📖 Study Skills",
      description:
        "Evidence-based study methods that actually work. From active recall to spaced repetition.",
      level: "📊 Intermediate",
      link: "/smartstudy"
    },
    sleepHygiene: {
      title: "😴 Sleep Hygiene for Students",
      category: "😴 Sleep",
      description:
        "Improve your sleep quality and boost academic performance with better habits.",
      level: "🌱 Beginner",
      link: "/sleephygine"
    },
    mindfulness: {
      title: "🧘 Mindfulness Basics",
      category: "🧘 Mental Health",
      description:
        "Simple mindfulness exercises to reduce stress and increase focus.",
      level: "🌱 Beginner",
      link: "/mindfull"
    },
    timeManagement: {
      title: "⏰ Time Management Mastery",
      category: "⏰ Productivity",
      description:
        "Master your schedule with proven time management techniques.",
      level: "📊 Intermediate",
      link: "/timemanagment"
    }
  };

  const [reactions, setReactions] = useState({
    examAnxiety: { likes: 234, dislikes: 12, userReaction: null },
    studyTips: { likes: 156, dislikes: 8, userReaction: null },
    sleepHygiene: { likes: 89, dislikes: 3, userReaction: null },
    mindfulness: { likes: 312, dislikes: 15, userReaction: null },
    timeManagement: { likes: 45, dislikes: 2, userReaction: null }
  });

  const handleLike = (id) => {
    setReactions(prev => {
      const current = prev[id].userReaction;

      if (current === "like") {
        return {
          ...prev,
          [id]: { ...prev[id], likes: prev[id].likes - 1, userReaction: null }
        };
      } else if (current === "dislike") {
        return {
          ...prev,
          [id]: {
            ...prev[id],
            likes: prev[id].likes + 1,
            dislikes: prev[id].dislikes - 1,
            userReaction: "like"
          }
        };
      } else {
        return {
          ...prev,
          [id]: { ...prev[id], likes: prev[id].likes + 1, userReaction: "like" }
        };
      }
    });
  };

  const handleDislike = (id) => {
    setReactions(prev => {
      const current = prev[id].userReaction;

      if (current === "dislike") {
        return {
          ...prev,
          [id]: { ...prev[id], dislikes: prev[id].dislikes - 1, userReaction: null }
        };
      } else if (current === "like") {
        return {
          ...prev,
          [id]: {
            ...prev[id],
            likes: prev[id].likes - 1,
            dislikes: prev[id].dislikes + 1,
            userReaction: "dislike"
          }
        };
      } else {
        return {
          ...prev,
          [id]: { ...prev[id], dislikes: prev[id].dislikes + 1, userReaction: "dislike" }
        };
      }
    });
  };

  return (
    <div className="featured-container border-top mt-4">

      <div className="featured-header">
        <h1>Featured Resources 📈</h1>
        <p>Discover our most popular mental health resources</p>
      </div>

      <div className="row g-4">

        {Object.keys(featuredData).map((key) => {

          const item = featuredData[key];

          return (
            <div className="col-lg-4 col-md-6" key={key}>
              <div className="resource-card">

                <span className="resource-category">
                  {item.category}
                </span>

                <h5 className="resource-title">
                  {item.title}
                </h5>

                <p className="resource-description">
                  {item.description}
                </p>

                <div className="resource-footer">

                  <div className="left-footer">

                    <span className="level-badge">
                      {item.level}
                    </span>

                    <div className="reaction-group">

                      <button
                        onClick={() => handleLike(key)}
                        className={`reaction-btn ${
                          reactions[key].userReaction === "like"
                            ? "active-like"
                            : ""
                        }`}
                      >
                        ❤️ {reactions[key].likes}
                      </button>

                      <button
                        onClick={() => handleDislike(key)}
                        className={`reaction-btn ${
                          reactions[key].userReaction === "dislike"
                            ? "active-dislike"
                            : ""
                        }`}
                      >
                        👎 {reactions[key].dislikes}
                      </button>

                    </div>

                  </div>

                 {item.link ? (
                      <Link to={item.link} className="open-btn" style={{ textDecoration: "none" }}>
                        Read →
                      </Link>
                    ) : (
                      <button className="open-btn">
                        Read →
                      </button>
                  )}

                </div>

              </div>
            </div>
          );
        })}

      </div>

      <div className="view-all-section">
       <button
            className="view-all-btn"
            onClick={() => {
                const section = document.getElementById("all-resources-section");
                section?.scrollIntoView({ behavior: "smooth" });
            }}
            >
            View All Featured Resources →
        </button>
      </div>

    </div>
  );
}

export default FeaturedResources;