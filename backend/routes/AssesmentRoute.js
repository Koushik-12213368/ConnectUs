const express = require("express");
const router = express.Router();

const AssesmentResult = require("../models/AssesmentResult");

// Save assessment
router.post("/save", async (req, res) => {

    try {

        const { userId, answers, totalScore, stressLevel } = req.body;

        const newResult = new AssesmentResult({
            userId,
            answers,
            totalScore,
            stressLevel
        });

        await newResult.save();

        res.status(201).json({
            message: "Assessment Result Saved Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong while saving assessment"
        });

    }

});

// Get history
router.get("/history/:userId", async (req, res) => {

    try {

        const results = await AssesmentResult.find({
            userId: req.params.userId
        }).sort({ createdAt: -1 });

        res.json(results);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching history"
        });

    }

});

module.exports = router;