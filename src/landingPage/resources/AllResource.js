import React, { useState } from "react";

function AllResources() {
    // State for reactions (with toggle functionality)
    const [reactions, setReactions] = useState({
        timeManagement: { likes: 45, dislikes: 2, userReaction: null },
        mindfulness: { likes: 78, dislikes: 5, userReaction: null },
        studyTips: { likes: 112, dislikes: 8, userReaction: null },
        examAnxiety: { likes: 67, dislikes: 3, userReaction: null },
        careerGuide: { likes: 34, dislikes: 1, userReaction: null }
    });

    // Filter state
    const [selectedFilter, setSelectedFilter] = useState("All");

    // Handle like with toggle
    const handleLike = (card) => {
        setReactions(prev => {
            const currentReaction = prev[card].userReaction;
            
            if (currentReaction === 'like') {
                return {
                    ...prev,
                    [card]: {
                        ...prev[card],
                        likes: prev[card].likes - 1,
                        userReaction: null
                    }
                };
            }
            else if (currentReaction === 'dislike') {
                return {
                    ...prev,
                    [card]: {
                        ...prev[card],
                        likes: prev[card].likes + 1,
                        dislikes: prev[card].dislikes - 1,
                        userReaction: 'like'
                    }
                };
            }
            else {
                return {
                    ...prev,
                    [card]: {
                        ...prev[card],
                        likes: prev[card].likes + 1,
                        userReaction: 'like'
                    }
                };
            }
        });
    };

    // Handle dislike with toggle
    const handleDislike = (card) => {
        setReactions(prev => {
            const currentReaction = prev[card].userReaction;
            
            if (currentReaction === 'dislike') {
                return {
                    ...prev,
                    [card]: {
                        ...prev[card],
                        dislikes: prev[card].dislikes - 1,
                        userReaction: null
                    }
                };
            }
            else if (currentReaction === 'like') {
                return {
                    ...prev,
                    [card]: {
                        ...prev[card],
                        likes: prev[card].likes - 1,
                        dislikes: prev[card].dislikes + 1,
                        userReaction: 'dislike'
                    }
                };
            }
            else {
                return {
                    ...prev,
                    [card]: {
                        ...prev[card],
                        dislikes: prev[card].dislikes + 1,
                        userReaction: 'dislike'
                    }
                };
            }
        });
    };

    // Handle filter change
    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    return (
        <div className="container mt-5 p-5 border-top border-dark border-3">
            {/* Header */}
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <h1 className="display-5 fw-bold">
                        📋 View All Resources
                    </h1>
                    <p className="text-secondary mt-3 fs-5">
                        Browse our complete collection of mental health and study resources
                    </p>
                </div>
            </div>

            {/* Filters Row */}
            <div className="row mt-3 mb-4">
                <div className="col-md-6 mx-auto">
                    <div className="d-flex gap-3">
                        <select 
                            className="form-select" 
                            aria-label="Filter resources"
                            value={selectedFilter}
                            onChange={handleFilterChange}
                        >
                            <option value="All">All Resources</option>
                            <option value="Articles">📄 Articles</option>
                            <option value="Videos">🎥 Videos</option>
                            <option value="Guides">📚 Guides</option>
                            <option value="Podcasts">🎧 Podcasts</option>
                        </select>
                        
                        <select className="form-select" aria-label="Sort by">
                            <option value="popular">Most Popular</option>
                            <option value="recent">Most Recent</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Resources Grid - 5 Cards */}
            <div className="row g-4 mt-2">
                {/* Card 1 - Time Management */}
                <div className="col-lg-4 col-md-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2">
                                    ⏰ Productivity
                                </span>
                                <span className="text-muted">⏱️ 7 min</span>
                            </div>
                            <h3 className="card-title h5 mb-2">
                                ⏰ Time Management Mastery
                            </h3>
                            <p className="card-text text-secondary small mb-2">
                                Master your schedule with proven time management techniques.
                            </p>
                            <div className="mb-3">
                                <span className="badge bg-light text-dark me-2">📊 Intermediate</span>
                                <span className="badge bg-light text-dark">📄 Article</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center gap-2">
                                    <button 
                                        onClick={() => handleLike('timeManagement')}
                                        className={`btn btn-sm d-flex align-items-center gap-2 ${
                                            reactions.timeManagement.userReaction === 'like' 
                                                ? 'btn-danger' 
                                                : 'btn-outline-danger'
                                        }`}
                                    >
                                        <i className={`fa-heart ${
                                            reactions.timeManagement.userReaction === 'like' 
                                                ? 'fas' 
                                                : 'far'
                                        }`}></i>
                                        <span>{reactions.timeManagement.likes}</span>
                                    </button>
                                    <button 
                                        onClick={() => handleDislike('timeManagement')}
                                        className={`btn btn-sm d-flex align-items-center gap-2 ${
                                            reactions.timeManagement.userReaction === 'dislike' 
                                                ? 'btn-secondary' 
                                                : 'btn-outline-secondary'
                                        }`}
                                    >
                                        <i className="fas fa-thumbs-down"></i>
                                        <span>{reactions.timeManagement.dislikes}</span>
                                    </button>
                                </div>
                                <button className="btn btn-outline-primary btn-sm">
                                    Read Now →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Mindfulness */}
                <div className="col-lg-4 col-md-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2">
                                    🧘 Mental Health
                                </span>
                                <span className="text-muted">⏱️ 10 min</span>
                            </div>
                            <h3 className="card-title h5 mb-2">
                                🧘 Daily Mindfulness Guide
                            </h3>
                            <p className="card-text text-secondary small mb-2">
                                5-minute mindfulness exercises for busy students.
                            </p>
                            <div className="mb-3">
                                <span className="badge bg-light text-dark me-2">🌱 Beginner</span>
                                <span className="badge bg-light text-dark">🎧 Podcast</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center gap-2">
                                    <button 
                                        onClick={() => handleLike('mindfulness')}
                                        className={`btn btn-sm d-flex align-items-center gap-2 ${
                                            reactions.mindfulness.userReaction === 'like' 
                                                ? 'btn-danger' 
                                                : 'btn-outline-danger'
                                        }`}
                                    >
                                        <i className={`fa-heart ${
                                            reactions.mindfulness.userReaction === 'like' 
                                                ? 'fas' 
                                                : 'far'
                                        }`}></i>
                                        <span>{reactions.mindfulness.likes}</span>
                                    </button>
                                    <button 
                                        onClick={() => handleDislike('mindfulness')}
                                        className={`btn btn-sm d-flex align-items-center gap-2 ${
                                            reactions.mindfulness.userReaction === 'dislike' 
                                                ? 'btn-secondary' 
                                                : 'btn-outline-secondary'
                                        }`}
                                    >
                                        <i className="fas fa-thumbs-down"></i>
                                        <span>{reactions.mindfulness.dislikes}</span>
                                    </button>
                                </div>
                                <button className="btn btn-outline-primary btn-sm">
                                    Listen Now →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 - Study Tips */}
                <div className="col-lg-4 col-md-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className="badge bg-success bg-opacity-10 text-success px-3 py-2">
                                    📖 Study Skills
                                </span>
                                <span className="text-muted">⏱️ 8 min</span>
                            </div>
                            <h3 className="card-title h5 mb-2">
                                📝 Active Recall Techniques
                            </h3>
                            <p className="card-text text-secondary small mb-2">
                                How to use active recall to memorize faster and retain longer.
                            </p>
                            <div className="mb-3">
                                <span className="badge bg-light text-dark me-2">📊 Intermediate</span>
                                <span className="badge bg-light text-dark">🎥 Video</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center gap-2">
                                    <button 
                                        onClick={() => handleLike('studyTips')}
                                        className={`btn btn-sm d-flex align-items-center gap-2 ${
                                            reactions.studyTips.userReaction === 'like' 
                                                ? 'btn-danger' 
                                                : 'btn-outline-danger'
                                        }`}
                                    >
                                        <i className={`fa-heart ${
                                            reactions.studyTips.userReaction === 'like' 
                                                ? 'fas' 
                                                : 'far'
                                        }`}></i>
                                        <span>{reactions.studyTips.likes}</span>
                                    </button>
                                    <button 
                                        onClick={() => handleDislike('studyTips')}
                                        className={`btn btn-sm d-flex align-items-center gap-2 ${
                                            reactions.studyTips.userReaction === 'dislike' 
                                                ? 'btn-secondary' 
                                                : 'btn-outline-secondary'
                                        }`}
                                    >
                                        <i className="fas fa-thumbs-down"></i>
                                        <span>{reactions.studyTips.dislikes}</span>
                                    </button>
                                </div>
                                <button className="btn btn-outline-primary btn-sm">
                                    Watch Now →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4 - Exam Anxiety */}
                <div className="col-lg-4 col-md-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                                    📚 Academic Stress
                                </span>
                                <span className="text-muted">⏱️ 6 min</span>
                            </div>
                            <h3 className="card-title h5 mb-2">
                                🌿 Exam Anxiety Coping Kit
                            </h3>
                            <p className="card-text text-secondary small mb-2">
                                Practical strategies to stay calm and focused during exams.
                            </p>
                            <div className="mb-3">
                                <span className="badge bg-light text-dark me-2">🌱 Beginner</span>
                                <span className="badge bg-light text-dark">📚 Guide</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center gap-2">
                                    <button 
                                        onClick={() => handleLike('examAnxiety')}
                                        className={`btn btn-sm d-flex align-items-center gap-2 ${
                                            reactions.examAnxiety.userReaction === 'like' 
                                                ? 'btn-danger' 
                                                : 'btn-outline-danger'
                                        }`}
                                    >
                                        <i className={`fa-heart ${
                                            reactions.examAnxiety.userReaction === 'like' 
                                                ? 'fas' 
                                                : 'far'
                                        }`}></i>
                                        <span>{reactions.examAnxiety.likes}</span>
                                    </button>
                                    <button 
                                        onClick={() => handleDislike('examAnxiety')}
                                        className={`btn btn-sm d-flex align-items-center gap-2 ${
                                            reactions.examAnxiety.userReaction === 'dislike' 
                                                ? 'btn-secondary' 
                                                : 'btn-outline-secondary'
                                        }`}
                                    >
                                        <i className="fas fa-thumbs-down"></i>
                                        <span>{reactions.examAnxiety.dislikes}</span>
                                    </button>
                                </div>
                                <button className="btn btn-outline-primary btn-sm">
                                    Read Now →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 5 - Career Guide */}
                <div className="col-lg-4 col-md-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className="badge bg-info bg-opacity-10 text-info px-3 py-2">
                                    💼 Career
                                </span>
                                <span className="text-muted">⏱️ 12 min</span>
                            </div>
                            <h3 className="card-title h5 mb-2">
                                💼 Resume Writing Masterclass
                            </h3>
                            <p className="card-text text-secondary small mb-2">
                                Create a standout resume that gets you hired.
                            </p>
                            <div className="mb-3">
                                <span className="badge bg-light text-dark me-2">📊 Advanced</span>
                                <span className="badge bg-light text-dark">🎥 Video</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center gap-2">
                                    <button 
                                        onClick={() => handleLike('careerGuide')}
                                        className={`btn btn-sm d-flex align-items-center gap-2 ${
                                            reactions.careerGuide.userReaction === 'like' 
                                                ? 'btn-danger' 
                                                : 'btn-outline-danger'
                                        }`}
                                    >
                                        <i className={`fa-heart ${
                                            reactions.careerGuide.userReaction === 'like' 
                                                ? 'fas' 
                                                : 'far'
                                        }`}></i>
                                        <span>{reactions.careerGuide.likes}</span>
                                    </button>
                                    <button 
                                        onClick={() => handleDislike('careerGuide')}
                                        className={`btn btn-sm d-flex align-items-center gap-2 ${
                                            reactions.careerGuide.userReaction === 'dislike' 
                                                ? 'btn-secondary' 
                                                : 'btn-outline-secondary'
                                        }`}
                                    >
                                        <i className="fas fa-thumbs-down"></i>
                                        <span>{reactions.careerGuide.dislikes}</span>
                                    </button>
                                </div>
                                <button className="btn btn-outline-primary btn-sm">
                                    Watch Now →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <nav aria-label="Page navigation" className="mt-5 pt-4">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>

            {/* Results count */}
            <div className="row mt-3">
                <div className="col-12 text-center text-muted">
                    <small>Showing 1-5 of 24 resources</small>
                </div>
            </div>
        </div>
    );
}

export default AllResources;