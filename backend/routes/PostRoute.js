const express = require("express");
const router = express.Router();

const Post = require("../models/PostModel");


// Create post
router.post("/add", async (req,res)=>{

  try{

    const { author, content } = req.body;

    const newPost = new Post({
      author,
      content
    });

    await newPost.save();

    res.status(201).json({
      message:"Post created",
      post:newPost
    });

  }catch(error){

    res.status(500).json({
      message:"Error creating post"
    });

  }

});


// Get all posts
router.get("/all", async (req,res)=>{

  try{

    const posts = await Post.find()
    .sort({ createdAt:-1 });

    res.json(posts);

  }catch(error){

    res.status(500).json({
      message:"Error fetching posts"
    });

  }

});


// Like post
router.put("/like/:id", async (req,res)=>{

  const post = await Post.findById(req.params.id);

  post.likes += 1;

  await post.save();

  res.json(post);

});


// Add comment
router.put("/comment/:id", async (req,res)=>{

  const { text } = req.body;

  const post = await Post.findById(req.params.id);

  post.comments.push({ text });

  await post.save();

  res.json(post);

});


module.exports = router;