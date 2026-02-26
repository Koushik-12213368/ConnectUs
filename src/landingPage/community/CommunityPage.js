import React, { useState } from "react";
import Hero from "./Hero";
import InfoCards from "./InfoCard";
import PostsFeed from "./PostFeed";
import Review from "./Review";

function CommunityPage() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Rahul",
      content: "Preparing for exams 😓",
      likes: 12,
      comments: [],
      time: "2m ago"
    },
    {
      id: 2,
      author: "Priya",
      content: "Anyone for DSA study group?",
      likes: 8,
      comments: [],
      time: "10m ago"
    }
  ]);

  const handleNewPost = (content, anonymous) => {
    const newPost = {
      id: Date.now(),
      author: anonymous ? "Anonymous" : "You",
      content,
      likes: 0,
      comments: [],
      time: "Just now"
    };

    setPosts(prev => [newPost, ...prev]);
  };

  return (
    <>
      <Hero />
      <InfoCards />

      

      <PostsFeed posts={posts} setPosts={setPosts} />

      <Review />
    </>
  );
}

export default CommunityPage;