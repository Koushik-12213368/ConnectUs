const mongoose = require("mongoose");

const assesmentResultSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },

    answers:{
        type: Object,
        required: true  
    },

    totalScore:{
        type: Number,
        required: true
    },

    stressLevel:{
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("AssesmentResult", assesmentResultSchema);