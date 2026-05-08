const router = require("express").Router();
const { requireAuth } = require("../middleware/AuthMiddleware");
const User = require("../models/UserModel");
const SecureChatRoom = require("../models/SecureChatRoomModel");
const SecureMessage = require("../models/SecureMessageModel");

const isDoctor = (role) => role === "doctor" || role === "professional";

// Secure chat is allowed for authenticated doctor and patient users.
router.use(requireAuth);

router.get("/users", async (req, res) => {
  try {
    const role = req.query.role;

    let query = { _id: { $ne: req.user._id } };
    if (role === "doctor") {
      query.role = { $in: ["doctor", "professional"] };
    } else if (role === "patient") {
      query.role = { $in: ["student", "parent"] };
    }

    const users = await User.find(query).select(
      "_id fullName email role encryptionPublicKey"
    );
    return res.json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch users" });
  }
});

router.post("/rooms", async (req, res) => {
  try {
    const { otherUserId } = req.body;
    const otherUser = await User.findById(otherUserId);
    if (!otherUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const currentIsDoctor = isDoctor(req.user.role);
    const otherIsDoctor = isDoctor(otherUser.role);

    if (currentIsDoctor === otherIsDoctor) {
      return res
        .status(400)
        .json({ message: "Chat rooms require one doctor and one patient" });
    }

    const doctorId = currentIsDoctor ? req.user._id : otherUser._id;
    const patientId = currentIsDoctor ? otherUser._id : req.user._id;

    const room = await SecureChatRoom.findOneAndUpdate(
      { doctorId, patientId },
      { doctorId, patientId },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .populate("doctorId", "_id fullName role encryptionPublicKey")
      .populate("patientId", "_id fullName role encryptionPublicKey");

    return res.json({ success: true, room });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create room" });
  }
});

router.get("/rooms", async (req, res) => {
  try {
    const currentIsDoctor = isDoctor(req.user.role);
    const filter = currentIsDoctor
      ? { doctorId: req.user._id }
      : { patientId: req.user._id };

    const rooms = await SecureChatRoom.find(filter)
      .populate("doctorId", "_id fullName role encryptionPublicKey")
      .populate("patientId", "_id fullName role encryptionPublicKey")
      .sort({ updatedAt: -1 });

    return res.json({ success: true, rooms });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch rooms" });
  }
});

router.get("/messages/:roomId", async (req, res) => {
  try {
    const room = await SecureChatRoom.findById(req.params.roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    const canAccess =
      room.doctorId.toString() === req.user._id.toString() ||
      room.patientId.toString() === req.user._id.toString();

    if (!canAccess) return res.status(403).json({ message: "Forbidden" });

    const messages = await SecureMessage.find({ roomId: room._id })
      .select("_id senderId encryptedForDoctor encryptedForPatient createdAt")
      .sort({ createdAt: 1 });

    return res.json({ success: true, messages });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch messages" });
  }
});

router.post("/messages", async (req, res) => {
  try {
    const { roomId, encryptedForDoctor, encryptedForPatient } = req.body;

    if (!encryptedForDoctor || !encryptedForPatient) {
      return res.status(400).json({ message: "Encrypted payload is required" });
    }

    const room = await SecureChatRoom.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    const canAccess =
      room.doctorId.toString() === req.user._id.toString() ||
      room.patientId.toString() === req.user._id.toString();
    if (!canAccess) return res.status(403).json({ message: "Forbidden" });

    const message = await SecureMessage.create({
      roomId: room._id,
      senderId: req.user._id,
      encryptedForDoctor,
      encryptedForPatient
    });

    return res.status(201).json({ success: true, message });
  } catch (error) {
    return res.status(500).json({ message: "Failed to send message" });
  }
});

module.exports = router;

