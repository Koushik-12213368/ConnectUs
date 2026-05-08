const mongoose = require("mongoose");

const secureMessageSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SecureChatRoom",
      required: true
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    encryptedForDoctor: {
      type: String,
      required: true
    },
    encryptedForPatient: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SecureMessage", secureMessageSchema);

