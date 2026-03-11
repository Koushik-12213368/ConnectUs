import React, { useState } from "react";
import { Link } from "react-router-dom";

function AllResources() {

    const resources = [
        {
            id: "timeManagement",
            title: "⏰ Time Management Mastery",
            category: "Articles",
            description: "Master your schedule with proven time management techniques.",
            link: "/timemanagment"
        },
        {
            id: "mindfulness",
            title: "🧘 Daily Mindfulness Guide",
            category: "Podcasts",
            description: "5-minute mindfulness exercises for busy students.",
            link: "/dailymindfullness"
        },
        {
            id: "studyTips",
            title: "📝 Active Recall Techniques",
            category: "Videos",
            description: "How to use active recall to memorize faster and retain longer.",
            link: "/activerecall"
        },
        {
            id: "examAnxiety",
            title: "🌿 Exam Anxiety Coping Kit",
            category: "Guides",
            description: "Practical strategies to stay calm and focused during exams.",
            link: "/examanxietycopingkit"
        },
        {
            id: "careerGuide",
            title: "💼 Resume Writing Masterclass",
            category: "Videos",
            description: "Create a standout resume that gets you hired.",
            link: "/resumewritting"
        }
    ];

    const [reactions, setReactions] = useState({
        timeManagement: { likes: 45, dislikes: 2, userReaction: null },
        mindfulness: { likes: 78, dislikes: 5, userReaction: null },
        studyTips: { likes: 112, dislikes: 8, userReaction: null },
        examAnxiety: { likes: 67, dislikes: 3, userReaction: null },
        careerGuide: { likes: 34, dislikes: 1, userReaction: null }
    });

    const [selectedFilter, setSelectedFilter] = useState("All");

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

    const filteredResources =
        selectedFilter === "All"
            ? resources
            : resources.filter(resource => resource.category === selectedFilter);

    return (
       <div id="all-resources-section" className="container mt-5">

            <div className="text-center mb-5 border-top p-3">
                <h1 className="fw-bold mt-4">📋 View All Resources</h1>
                <p className="text-muted">
                    Browse our complete collection of mental health and study resources
                </p>
            </div>

            <div className="row mb-5">
                <div className="col-md-6 mx-auto">
                    <select
                        className="form-select"
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                    >
                        <option value="All">All Resources</option>
                        <option value="Articles">📄 Articles</option>
                        <option value="Videos">🎥 Videos</option>
                        <option value="Guides">📚 Guides</option>
                        <option value="Podcasts">🎧 Podcasts</option>
                    </select>
                </div>
            </div>

            <div className="row g-4">

                {filteredResources.length === 0 ? (
                    <div className="col-12 text-center mt-5">
                        <h4 className="text-muted">
                            🚫 No resources available in "{selectedFilter}" category.
                        </h4>
                    </div>
                ) : (
                    filteredResources.map(resource => (
                        <div className="col-lg-4 col-md-6 mb-5 " key={resource.id}>
                            <div className="resource-card">

                                <span className="resource-category">
                                    {resource.category}
                                </span>

                                <h5 className="resource-title">
                                    {resource.title}
                                </h5>

                                <p className="resource-description">
                                    {resource.description}
                                </p>

                                <div className="resource-footer">

                                    <div className="reaction-group">

                                        <button
                                            onClick={() => handleLike(resource.id)}
                                            className={`reaction-btn ${
                                                reactions[resource.id].userReaction === "like"
                                                    ? "active-like"
                                                    : ""
                                            }`}
                                        >
                                            ❤️ {reactions[resource.id].likes}
                                        </button>

                                        <button
                                            onClick={() => handleDislike(resource.id)}
                                            className={`reaction-btn ${
                                                reactions[resource.id].userReaction === "dislike"
                                                    ? "active-dislike"
                                                    : ""
                                            }`}
                                        >
                                            👎 {reactions[resource.id].dislikes}
                                        </button>

                                    </div>

                                    {resource.link ? (
                                        <Link
                                            to={resource.link}
                                            className="open-btn"
                                            style={{ textDecoration: "none" }}
                                        >
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
                    ))
                )}
            </div>

        </div>
    );
}

export default AllResources;