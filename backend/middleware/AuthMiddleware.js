// const jwt = require("jsonwebtoken");
// const User = require("../models/UserModel");

// // ===============================
// // REQUIRE AUTH
// // ===============================

// module.exports.requireAuth = async (req, res, next) => {

//   try {

//     // GET AUTH HEADER
//     const authHeader = req.headers.authorization;

//     // CHECK HEADER
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {

//       return res.status(401).json({
//         success: false,
//         message: "Unauthorized"
//       });

//     }

//     // EXTRACT TOKEN
//     const token = authHeader.split(" ")[1];

//     // VERIFY TOKEN
//     const payload = jwt.verify(token, process.env.TOKEN_KEY);

//     // FIND USER
//     const user = await User.findById(payload.id).select("-password");

//     // CHECK USER
//     if (!user) {

//       return res.status(401).json({
//         success: false,
//         message: "User not found"
//       });

//     }

//     // STORE USER
//     req.user = user;

//     // NEXT
//     next();

//   } catch (error) {

//     console.log("AUTH ERROR:", error);

//     return res.status(401).json({
//       success: false,
//       message: "Invalid or expired token"
//     });

//   }

// };

// // ===============================
// // REQUIRE VERIFIED DOCTOR
// // ===============================

// module.exports.requireVerifiedDoctor = (req, res, next) => {

//   try {

//     const isDoctor =
//       req.user?.role === "doctor" ||
//       req.user?.role === "professional";

//     // ONLY CHECK DOCTOR VERIFICATION
//     if (
//       isDoctor &&
//       req.user?.doctorVerificationStatus !== "approved"
//     ) {

//       return res.status(403).json({
//         success: false,
//         message:
//           "Doctor account is not verified yet. Please wait for admin approval."
//       });

//     }

//     next();

//   } catch (error) {

//     console.log("DOCTOR VERIFY ERROR:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Server error"
//     });

//   }

// };

// // ===============================
// // REQUIRE ADMIN
// // ===============================

// module.exports.requireAdmin = (req, res, next) => {

//   try {

//     // CHECK ADMIN
//     if (req.user?.role !== "admin") {

//       return res.status(403).json({
//         success: false,
//         message: "Admin access required"
//       });

//     }

//     next();

//   } catch (error) {

//     console.log("ADMIN AUTH ERROR:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Server error"
//     });

//   }

// };




const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

module.exports.requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Missing token"
      });
    }

    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(payload.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not found"
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("AUTH ERROR:", error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or expired token"
    });
  }
};

module.exports.requireVerifiedDoctor = (req, res, next) => {
  try {
    const isDoctor =
      req.user?.role === "doctor" ||
      req.user?.role === "professional";

    if (isDoctor && req.user?.doctorVerificationStatus !== "approved") {
      return res.status(403).json({
        success: false,
        message:
          "Doctor account is not verified yet. Please wait for admin approval."
      });
    }

    next();
  } catch (error) {
    console.log("DOCTOR VERIFY ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

module.exports.requireAdmin = (req, res, next) => {
  try {
    if (req.user?.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access required"
      });
    }

    next();
  } catch (error) {
    console.log("ADMIN AUTH ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};