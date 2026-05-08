const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

module.exports.requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const payload = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(payload.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports.requireVerifiedDoctor = (req, res, next) => {
  const isDoctor = req.user?.role === "doctor" || req.user?.role === "professional";
  if (isDoctor && req.user?.doctorVerificationStatus !== "approved") {
    return res.status(403).json({
      message:
        "Doctor account is not verified yet. Please complete verification and wait for admin approval."
    });
  }
  return next();
};

module.exports.requireAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }
  return next();
};

