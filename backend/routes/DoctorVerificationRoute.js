const router = require("express").Router();
const { requireAuth, requireAdmin } = require("../middleware/AuthMiddleware");
const DoctorVerification = require("../models/DoctorVerificationModel");
const User = require("../models/UserModel");

const isDoctorRole = (role) => role === "doctor" || role === "professional";

router.post("/submit", requireAuth, async (req, res) => {
  try {
    if (!isDoctorRole(req.user.role)) {
      return res.status(403).json({ message: "Only doctors can submit documents" });
    }

    const { documents } = req.body;
    if (!Array.isArray(documents) || documents.length === 0) {
      return res.status(400).json({ message: "At least one document is required" });
    }

    const sanitizedDocs = documents
      .filter(
        (d) =>
          d &&
          typeof d.name === "string" &&
          typeof d.mimeType === "string" &&
          typeof d.dataUrl === "string" &&
          typeof d.size === "number"
      )
      .slice(0, 5);

    if (!sanitizedDocs.length) {
      return res.status(400).json({ message: "Invalid document payload" });
    }

    const verification = await DoctorVerification.findOneAndUpdate(
      { doctorId: req.user._id },
      {
        doctorId: req.user._id,
        documents: sanitizedDocs,
        status: "pending",
        adminNotes: "",
        reviewedBy: null,
        reviewedAt: null
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { doctorVerificationStatus: "pending" },
      { new: true }
    ).select("-password");

    return res.status(200).json({
      success: true,
      message: "Documents submitted successfully",
      verification,
      user
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to submit documents" });
  }
});

router.get("/my", requireAuth, async (req, res) => {
  try {
    if (!isDoctorRole(req.user.role)) {
      return res.status(403).json({ message: "Only doctors can access this" });
    }

    const verification = await DoctorVerification.findOne({ doctorId: req.user._id });
    return res.json({ success: true, verification });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch verification details" });
  }
});

router.get("/admin/list", requireAuth, requireAdmin, async (req, res) => {
  try {
    const items = await DoctorVerification.find()
      .populate("doctorId", "_id fullName email role doctorVerificationStatus")
      .populate("reviewedBy", "_id fullName email")
      .sort({ updatedAt: -1 });

    return res.json({ success: true, items });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch submissions" });
  }
});

router.patch("/admin/:id/review", requireAuth, requireAdmin, async (req, res) => {
  try {
    const { status, adminNotes } = req.body;
    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const item = await DoctorVerification.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Submission not found" });

    item.status = status;
    item.adminNotes = typeof adminNotes === "string" ? adminNotes : "";
    item.reviewedBy = req.user._id;
    item.reviewedAt = new Date();
    await item.save();

    await User.findByIdAndUpdate(item.doctorId, {
      doctorVerificationStatus: status
    });

    const updated = await DoctorVerification.findById(item._id)
      .populate("doctorId", "_id fullName email role doctorVerificationStatus")
      .populate("reviewedBy", "_id fullName email");

    return res.json({ success: true, item: updated });
  } catch (error) {
    return res.status(500).json({ message: "Failed to review submission" });
  }
});

module.exports = router;

