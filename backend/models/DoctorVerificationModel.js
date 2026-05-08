const mongoose = require("mongoose");

const doctorVerificationSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    documents: [
      {
        name: { type: String, required: true },
        mimeType: { type: String, required: true },
        size: { type: Number, required: true },
        dataUrl: { type: String, required: true }
      }
    ],
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    },
    adminNotes: {
      type: String,
      default: ""
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    reviewedAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("DoctorVerification", doctorVerificationSchema);

