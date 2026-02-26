import React, { useState } from "react";

function PostFeed() {
  const currentUser = "You";

  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(true);
  const [commentText, setCommentText] = useState({});
  const [posts, setPosts] = useState([]);

  // Share Story
  const handleSubmit = () => {
    if (!content.trim()) return;

    const newPost = {
      id: Date.now(),
      author: anonymous ? "Anonymous" : currentUser,
      content,
      likes: 0,
      comments: [],
      time: "Just now",
      owner: currentUser  
    };

    setPosts([newPost, ...posts]);
    setContent("");
    setAnonymous(true);
  };

  // Like
  const handleLike = (id) => {
    setPosts(
      posts.map(post =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  // Delete
  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // Comment
  const handleComment = (id) => {
    if (!commentText[id]?.trim()) return;

    setPosts(
      posts.map(post =>
        post.id === id
          ? {
              ...post,
              comments: [...post.comments, commentText[id]]
            }
          : post
      )
    );

    setCommentText({ ...commentText, [id]: "" });
  };

  return (
    <div className="community-wrapper">

      <div className="community-container">

        {/* Share Section */}
        <div className="share-card">
          <h2>💚 Share Your Journey</h2>
          <p className="subtitle">
            If this community helped you, share your experience and inspire others.
          </p>

          <div className="share-row">
            <textarea
              placeholder="How did this community help you?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <div className="share-side">
              <label className="anonymous-check">
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                />
                Anonymous
              </label>

              <button
                className="share-btn"
                onClick={handleSubmit}
                disabled={!content.trim()}
              >
                ✨ Share
              </button>
            </div>
          </div>
        </div>

        {/* Stories */}
        <div className="stories-section">
          {posts.map(post => (
            <div key={post.id} className="story-card">

              <div className="story-header">
                <div>
                  <strong>👤 {post.author}</strong>
                  <div className="time">{post.time}</div>
                </div>

                {post.owner === currentUser && (
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(post.id)}
                  >
                    🗑
                  </button>
                )}
              </div>

              <p>{post.content}</p>

              <div className="story-stats">
                ❤️ {post.likes} &nbsp; 💬 {post.comments.length}
              </div>

              <div className="story-actions">
                <button onClick={() => handleLike(post.id)}>
                  ❤️ Like
                </button>
              </div>

              <div className="comment-section">
                <input
                  type="text"
                  placeholder="Write something supportive..."
                  value={commentText[post.id] || ""}
                  onChange={(e) =>
                    setCommentText({
                      ...commentText,
                      [post.id]: e.target.value
                    })
                  }
                />
                <button onClick={() => handleComment(post.id)}>
                  Comment
                </button>
              </div>

              {post.comments.length > 0 && (
                <div className="comment-list">
                  {post.comments.map((c, index) => (
                    <div key={index} className="comment">
                      💬 {c}
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default PostFeed;