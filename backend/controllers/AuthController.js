const User = require("../models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

// SIGNUP

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, fullName, role } = req.body;
    const normalizedRole = role || "student";
    const doctorVerificationStatus =
      normalizedRole === "doctor" || normalizedRole === "professional"
        ? "not_submitted"
        : "not_required";

    // check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }
      // create user
      const user = await User.create({
      email,
      password,
      fullName,
      role: normalizedRole,
      doctorVerificationStatus
    });

    // create JWT token
    const token = createSecretToken(user._id);
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    };

    res.cookie("token", token, cookieOptions);

    const { password: _, ...safeUser } = user._doc;

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: safeUser
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error. Check database connection and try again."
    });
  }
};


// LOGIN

module.exports.Login = async (req, res) => {
  try {

    const { email, password, loginAsDoctor, loginAsAdmin } = req.body;

    // check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const isDoctorAccount = user.role === "doctor" || user.role === "professional";
    if (loginAsDoctor && !isDoctorAccount) {
      return res.status(403).json({
        message: "This account is not registered as a doctor."
      });
    }
    if (loginAsAdmin && user.role !== "admin") {
      return res.status(403).json({
        message: "This account is not an admin account."
      });
    }

    // create token
    const token = createSecretToken(user._id);
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000
    };

    res.cookie("token", token, cookieOptions);

    const { password: _, ...safeUser } = user._doc;

    res.status(200).json({
      message: "Login successful",
      success: true,
      user: safeUser
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error. Check database connection and try again."
    });
  }
};

module.exports.RequestDoctorVerification = async (req, res) => {
  try {
    const isDoctorAccount =
      req.user.role === "doctor" || req.user.role === "professional";
    if (!isDoctorAccount) {
      return res.status(403).json({ message: "Only doctors can request verification" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { doctorVerificationStatus: "pending" },
      { new: true }
    ).select("-password");

    return res.status(200).json({
      success: true,
      message: "Verification request submitted",
      user: updatedUser
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// CURRENT USER
module.exports.Me = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user
  });
};

// UPDATE PUBLIC KEY FOR E2E CHAT
module.exports.UpdatePublicKey = async (req, res) => {
  try {
    const { encryptionPublicKey } = req.body;

    if (!encryptionPublicKey || typeof encryptionPublicKey !== "string") {
      return res.status(400).json({ message: "Valid public key is required" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { encryptionPublicKey },
      { new: true }
    ).select("-password");

    return res.status(200).json({
      success: true,
      message: "Public key saved",
      user: updatedUser
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};