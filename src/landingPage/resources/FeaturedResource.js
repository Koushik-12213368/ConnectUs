import React, { useState } from "react";

function FeaturedResources(){
    // State for each card's likes and dislikes with user reaction tracking
    const [reactions, setReactions] = useState({
        examAnxiety: { likes: 234, dislikes: 12, userReaction: null },
        studyTips: { likes: 156, dislikes: 8, userReaction: null },
        sleepHygiene: { likes: 89, dislikes: 3, userReaction: null },
        mindfulness: { likes: 312, dislikes: 15, userReaction: null },
        timeManagement: { likes: 45, dislikes: 2, userReaction: null }
    });

    // Function to handle like button click with toggle functionality
    const handleLike = (card) => {
        setReactions(prev => {
            const currentReaction = prev[card].userReaction;
            
            // If already liked -> remove like
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
            // If disliked -> remove dislike and add like
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
            // If no reaction -> add like
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

    // Function to handle dislike button click with toggle functionality
    const handleDislike = (card) => {
        setReactions(prev => {
            const currentReaction = prev[card].userReaction;
            
            // If already disliked -> remove dislike
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
            // If liked -> remove like and add dislike
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
            // If no reaction -> add dislike
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

    return(
        <div className="container mt-5 p-5 border-top border-dark border-3">
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h1 className="display-5 fw-bold">
                        Featured Resources <i className="fa-solid fa-arrow-trend-up"></i>
                    </h1>
                    <p className="text-secondary mt-3 fs-5">
                        Discover our most popular mental health resources
                    </p>
                </div>
            </div>

            <div className="row g-4">
                {/* Card 1 - Exam Anxiety */}
                <div className="col-lg-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                                    📚 Academic Stress
                                </span>
                                <span className="text-muted">⏱️ 5 min read</span>
                            </div>
                            <h3 className="card-title h4 mb-3">
                                🌿 Understanding Exam Anxiety
                            </h3>
                            <p className="card-text text-secondary mb-3">
                                A Practical guide for students facing academic pressure. Learn proven techniques to manage stress and perform better.
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <div className="d-flex align-items-center gap-3">
                                    <span className="badge bg-light text-dark px-3 py-2">
                                        📈 Beginner
                                    </span>
                                    <div className="d-flex align-items-center gap-2">
                                        {/* Like Button */}
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
                                        {/* Dislike Button */}
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
                                </div>
                                <button className="btn btn-primary">
                                    Read Now <i className="fas fa-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Study Tips */}
                <div className="col-lg-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className="badge bg-success bg-opacity-10 text-success px-3 py-2">
                                    📖 Study Skills
                                </span>
                                <span className="text-muted">⏱️ 8 min read</span>
                            </div>
                            <h3 className="card-title h4 mb-3">
                                📝 Smart Study Techniques
                            </h3>
                            <p className="card-text text-secondary mb-3">
                                Evidence-based study methods that actually work. From active recall to spaced repetition.
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <div className="d-flex align-items-center gap-3">
                                    <span className="badge bg-light text-dark px-3 py-2">
                                        📊 Intermediate
                                    </span>
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
                                </div>
                                <button className="btn btn-primary">
                                    Read Now <i className="fas fa-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 - Sleep Hygiene */}
                <div className="col-lg-4">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className="badge bg-info bg-opacity-10 text-info px-3 py-2">
                                    😴 Sleep
                                </span>
                                <span className="text-muted">⏱️ 6 min read</span>
                            </div>
                            <h3 className="card-title h5 mb-3">
                                😴 Sleep Hygiene for Students
                            </h3>
                            <p className="card-text text-secondary mb-3">
                                How to improve your sleep quality and boost academic performance.
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="badge bg-light text-dark">
                                        🌱 Beginner
                                    </span>
                                    <div className="d-flex align-items-center gap-2">
                                        <button 
                                            onClick={() => handleLike('sleepHygiene')}
                                            className={`btn btn-sm d-flex align-items-center gap-2 ${
                                                reactions.sleepHygiene.userReaction === 'like' 
                                                    ? 'btn-danger' 
                                                    : 'btn-outline-danger'
                                            }`}
                                        >
                                            <i className={`fa-heart ${
                                                reactions.sleepHygiene.userReaction === 'like' 
                                                    ? 'fas' 
                                                    : 'far'
                                            }`}></i>
                                            <span>{reactions.sleepHygiene.likes}</span>
                                        </button>
                                        <button 
                                            onClick={() => handleDislike('sleepHygiene')}
                                            className={`btn btn-sm d-flex align-items-center gap-2 ${
                                                reactions.sleepHygiene.userReaction === 'dislike' 
                                                    ? 'btn-secondary' 
                                                    : 'btn-outline-secondary'
                                            }`}
                                        >
                                            <i className="fas fa-thumbs-down"></i>
                                            <span>{reactions.sleepHygiene.dislikes}</span>
                                        </button>
                                    </div>
                                </div>
                                <button className="btn btn-outline-primary btn-sm">
                                    Read →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4 - Mindfulness */}
                <div className="col-lg-4">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2">
                                    🧘 Mental Health
                                </span>
                                <span className="text-muted">⏱️ 10 min read</span>
                            </div>
                            <h3 className="card-title h5 mb-3">
                                🧘 Mindfulness Basics
                            </h3>
                            <p className="card-text text-secondary mb-3">
                                Simple mindfulness exercises to reduce stress and increase focus.
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="badge bg-light text-dark">
                                        🌱 Beginner
                                    </span>
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
                                </div>
                                <button className="btn btn-outline-primary btn-sm">
                                    Read →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 5 - Time Management */}
                <div className="col-lg-4">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2">
                                    ⏰ Productivity
                                </span>
                                <span className="text-muted">⏱️ 7 min read</span>
                            </div>
                            <h3 className="card-title h5 mb-3">
                                ⏰ Time Management Mastery
                            </h3>
                            <p className="card-text text-secondary mb-3">
                                Master your schedule with proven time management techniques.
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="badge bg-light text-dark">
                                        📊 Intermediate
                                    </span>
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
                                </div>
                                <button className="btn btn-outline-primary btn-sm">
                                    Read →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* View All Button */}
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <button className="btn btn-outline-secondary btn-lg px-5">
                        View All Featured Resources <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedResources;