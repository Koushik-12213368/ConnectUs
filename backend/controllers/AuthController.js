const User = require("../models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

// ======================================
// SIGNUP
// ======================================

module.exports.Signup = async (req, res) => {

  try {

    const { email, password, fullName, role } = req.body;

    const normalizedRole = role || "student";

    const doctorVerificationStatus =
      normalizedRole === "doctor" ||
      normalizedRole === "professional"
        ? "not_submitted"
        : "not_required";

    // CHECK EXISTING USER
    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "User already exists"
      });

    }

    // CREATE USER
    const user = await User.create({
      email,
      password,
      fullName,
      role: normalizedRole,
      doctorVerificationStatus
    });

    // CREATE TOKEN
    const token = createSecretToken(user._id);

    // SAFE USER
    const { password: _, ...safeUser } = user._doc;

    // RESPONSE
    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
      token: token,
      user: safeUser
    });

  } catch (error) {

    console.log("SIGNUP ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

};

// ======================================
// LOGIN
// ======================================

module.exports.Login = async (req, res) => {

  try {

    const {
      email,
      password,
      loginAsDoctor,
      loginAsAdmin
    } = req.body;

    // FIND USER
    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });

    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });

    }

    // DOCTOR LOGIN CHECK
    const isDoctorAccount =
      user.role === "doctor" ||
      user.role === "professional";

    if (loginAsDoctor && !isDoctorAccount) {

      return res.status(403).json({
        success: false,
        message: "This account is not registered as a doctor."
      });

    }

    // ADMIN LOGIN CHECK
    if (loginAsAdmin && user.role !== "admin") {

      return res.status(403).json({
        success: false,
        message: "This account is not an admin account."
      });

    }

    // CREATE TOKEN
    const token = createSecretToken(user._id);

    // SAFE USER
    const { password: _, ...safeUser } = user._doc;

    // RESPONSE
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      user: safeUser
    });

  } catch (error) {

    console.log("LOGIN ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

};

// ======================================
// CURRENT USER
// ======================================

module.exports.Me = async (req, res) => {

  return res.status(200).json({
    success: true,
    user: req.user
  });

};

// ======================================
// REQUEST DOCTOR VERIFICATION
// ======================================

module.exports.RequestDoctorVerification = async (req, res) => {

  try {

    const isDoctorAccount =
      req.user.role === "doctor" ||
      req.user.role === "professional";

    if (!isDoctorAccount) {

      return res.status(403).json({
        success: false,
        message: "Only doctors can request verification"
      });

    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        doctorVerificationStatus: "pending"
      },
      {
        new: true
      }
    ).select("-password");

    return res.status(200).json({
      success: true,
      message: "Verification request submitted",
      user: updatedUser
    });

  } catch (error) {

    console.log("VERIFICATION ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

};

// ======================================
// UPDATE PUBLIC KEY
// ======================================

module.exports.UpdatePublicKey = async (req, res) => {

  try {

    const { encryptionPublicKey } = req.body;

    if (
      !encryptionPublicKey ||
      typeof encryptionPublicKey !== "string"
    ) {

      return res.status(400).json({
        success: false,
        message: "Valid public key is required"
      });

    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        encryptionPublicKey
      },
      {
        new: true
      }
    ).select("-password");

    return res.status(200).json({
      success: true,
      message: "Public key saved",
      user: updatedUser
    });

  } catch (error) {

    console.log("PUBLIC KEY ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

};