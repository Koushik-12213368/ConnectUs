import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Hero(){
    return(
        <div className="container mt-5 p-4">
            {/* Header */}
            <div className="row text-center mb-4">
                <div className="col-12">
                    <h1 className="display-5 fw-bold">
                        📚 RESOURCES & GUIDES
                    </h1>
                    <h4 className="text-secondary mt-3 p-3 fw-normal">
                        Learn and grow with expert mental health resources
                    </h4>
                </div>
            </div>

            {/* Carousel with Search Overlay */}
            <div className="row justify-content-center mt-5 p-5">
                <div className="col-12 col-lg-10">
                    <div className="position-relative">
                        {/* Bootstrap Carousel change image in 3 second*/}
                        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                            {/* Indicators */}
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
                            </div>

                            {/* Carousel Items */}
                            <div className="carousel-inner rounded-4 shadow">
                                <div className="carousel-item active">
                                    <img 
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                                        className="d-block w-100" 
                                        alt="Students studying together"
                                        style={{ height: "450px", objectFit: "cover" }}
                                    />
                                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                                        <h3 className="fw-bold">Student Mental Health Matters</h3>
                                        <p>Access free resources designed for academic success</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img 
                                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1520&q=80" 
                                        className="d-block w-100" 
                                        alt="Meditation and mindfulness"
                                        style={{ height: "450px", objectFit: "cover" }}
                                    />
                                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                                        <h3 className="fw-bold">Mindfulness for Focus</h3>
                                        <p>5-minute exercises to reduce stress and boost concentration</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img 
                                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                        className="d-block w-100" 
                                        alt="Student studying"
                                        style={{ height: "450px", objectFit: "cover" }}
                                    />
                                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                                        <h3 className="fw-bold">Study Smarter, Not Harder</h3>
                                        <p>Evidence-based techniques that actually work</p>
                                    </div>
                                </div>
                            </div>

                            {/* Controls */}
                            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        {/* Search Bar - Positioned Absolutely on Carousel */}
                        <div className="position-absolute top-50 start-50 translate-middle w-75 px-4" style={{ zIndex: 10 }}>
                            <div className="search-premium mx-auto">
                                <input 
                                    type="search" 
                                    className="search-input-premium" 
                                    placeholder="Try 'anxiety', 'meditation', 'counseling'..." 
                                />
                                <i className="fas fa-search premium-icon"></i>
                                <span className="search-hint">⌘K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Topics - Below Carousel */}
            <div className="row mt-5 pt-4 text-center border-top ">
                <div className="col-12 p-5">
                    <h2 className="h3 fw-bold mb-4">Popular Topics</h2>
                </div>
                <div className="col-12">
                    <div className="row g-3 justify-content-center">
                        <div className="col-6 col-md-3">
                            <div className="topic-pill">
                                <span className="fw-medium">😰 Anxiety</span>
                                <span className="topic-count">12</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="topic-pill">
                                <span className="fw-medium">😔 Depression</span>
                                <span className="topic-count">8</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="topic-pill">
                                <span className="fw-medium">😫 Stress</span>
                                <span className="topic-count">15</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="topic-pill">
                                <span className="fw-medium">😴 Sleep</span>
                                <span className="topic-count">6</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="topic-pill">
                                <span className="fw-medium">🧘 Meditation</span>
                                <span className="topic-count">9</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="topic-pill">
                                <span className="fw-medium">📚 Study Tips</span>
                                <span className="topic-count">14</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .search-premium {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    max-width: 650px;
                    background: white;
                    border-radius: 50px;
                    padding: 6px 20px;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                    backdrop-filter: blur(10px);
                    background: rgba(255, 255, 255, 0.95);
                    transition: all 0.3s ease;
                }

                .search-premium:focus-within {
                    border-color: #0d6efd;
                    box-shadow: 0 15px 35px rgba(13, 110, 253, 0.2);
                    background: white;
                    transform: scale(1.02);
                }

                .premium-icon {
                    color: #0d6efd;
                    font-size: 18px;
                    margin-left: 15px;
                    margin-right: 10px;
                    opacity: 0.8;
                }

                .search-input-premium {
                    flex: 1;
                    border: none;
                    padding: 16px 0;
                    font-size: 16px;
                    background: transparent;
                    outline: none;
                }

                .search-input-premium::placeholder {
                    color: #6c757d;
                    font-weight: 400;
                    font-size: 15px;
                    opacity: 0.8;
                }

                .search-hint {
                    color: #6c757d;
                    font-size: 13px;
                    background: #f8f9fa;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                    border: 1px solid #e9ecef;
                }

                .topic-pill {
                    background: white;
                    border: 1px solid #e9ecef;
                    border-radius: 50px;
                    padding: 12px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    transition: all 0.2s ease;
                    cursor: pointer;
                }

                .topic-pill:hover {
                    background: #f8f9fa;
                    border-color: #0d6efd;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(13, 110, 253, 0.1);
                }

                .topic-count {
                    background: #e7f1ff;
                    color: #0d6efd;
                    padding: 2px 10px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 600;
                }

                /* Custom carousel caption styling */
                .carousel-caption {
                    bottom: 30px;
                    left: 30px;
                    right: 30px;
                    text-align: left;
                    background: rgba(0, 0, 0, 0.6);
                    backdrop-filter: blur(5px);
                    border-radius: 16px;
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .search-premium {
                        max-width: 100%;
                        padding: 4px 15px;
                    }
                    
                    .search-input-premium {
                        padding: 12px 0;
                        font-size: 14px;
                    }
                    
                    .carousel-item img {
                        height: 350px !important;
                    }
                    
                    .topic-pill {
                        padding: 10px 15px;
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Hero;