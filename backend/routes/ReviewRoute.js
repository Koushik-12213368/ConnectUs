const express = require("express");
const router = express.Router();

const Review = require("../models/ReviewModel");


// Save review
router.post("/add", async (req, res) => {

  try {

    const { userId, userName, reviewText, rating } = req.body;

    if (!reviewText) {
      return res.status(400).json({
        message: "Review text is required"
      });
    }

    const newReview = new Review({
      userId,
      userName,
      reviewText,
      rating
    });

    await newReview.save();

    res.status(201).json({
      message: "Review saved successfully",
      review: newReview
    });

  } catch (error) {

    console.error("Error saving review:", error);

    res.status(500).json({
      message: "Error saving review"
    });

  }

});


// Get all reviews
router.get("/all", async (req, res) => {

  try {

    const reviews = await Review.find()
      .sort({ createdAt: -1 });

    res.status(200).json(reviews);

  } catch (error) {

    console.error("Error fetching reviews:", error);

    res.status(500).json({
      message: "Error fetching reviews"
    });

  }

});


module.exports = router;