const {
  Signup,
  Login,
  Me,
  UpdatePublicKey,
  RequestDoctorVerification
} = require("../controllers/AuthController");
const router = require("express").Router();
const { requireAuth } = require("../middleware/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/me", requireAuth, Me);
router.put("/public-key", requireAuth, UpdatePublicKey);
router.post("/doctor-verification/request", requireAuth, RequestDoctorVerification);

module.exports = router;