import React, { useState } from "react";

// Remove this line if it exists: import "./Review.css";

function Review() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Alex",
      rating: 5,
      comment: "This platform helped me find support during my hardest semester.",
      role: "Junior Student"
    },
    {
      id: 2,
      name: "Priya",
      rating: 5,
      comment: "The anonymous check-in made it easier to reach out.",
      role: "Senior Student"
    },
    {
      id: 3,
      name: "Jordan",
      rating: 4,
      comment: "Finally a space where I can talk without fear.",
      role: "Graduate Student"
    }
  ]);

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "", name: "" });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.comment.trim()) {
      const review = {
        id: reviews.length + 1,
        name: newReview.name || "Anonymous",
        rating: newReview.rating,
        comment: newReview.comment,
        role: "Community Member"
      };
      setReviews([review, ...reviews]);
      setNewReview({ rating: 5, comment: "", name: "" });
      setShowReviewForm(false);
    }
  };

  return (
    <div className="reviews-section">
      <h2 className="mt-3 p-3 text-center">What Students Say</h2>
      
      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="rating">
              {"⭐".repeat(review.rating)}
            </div>
            <p className="review-comment">"{review.comment}"</p>
            <div className="reviewer">
              <strong>— {review.name}</strong>
              <span className="reviewer-role">{review.role}</span>
            </div>
          </div>
        ))}
      </div>

      {!showReviewForm ? (
        <button 
          className="write-review-btn"
          onClick={() => setShowReviewForm(true)}
        >
          ✍️ Write a Review
        </button>
      ) : (
        <div className="review-form-container">
          <h3>Share Your Experience</h3>
          <form onSubmit={handleReviewSubmit}>
            <div className="rating-input">
              <label>Your Rating:</label>
              <select 
                value={newReview.rating}
                onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
              >
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Good</option>
                <option value="3">⭐⭐⭐ Average</option>
                <option value="2">⭐⭐ Below Average</option>
                <option value="1">⭐ Poor</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Your Name (optional):</label>
              <input
                type="text"
                placeholder="Leave blank for anonymous"
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>Your Review:</label>
              <textarea
                placeholder="Tell others about your experience..."
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                rows={3}
                required
              />
            </div>
            
            <div className="form-actions">
              <button type="button" onClick={() => setShowReviewForm(false)}>
                Cancel
              </button>
              <button type="submit" className="submit-review">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Review;