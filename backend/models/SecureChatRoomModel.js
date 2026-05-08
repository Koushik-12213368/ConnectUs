const mongoose = require("mongoose");

const secureChatRoomSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

secureChatRoomSchema.index({ doctorId: 1, patientId: 1 }, { unique: true });

module.exports = mongoose.model("SecureChatRoom", secureChatRoomSchema);

