const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  logout,
  getUser,
  getLoginStatus,
  updateUser,
  updatePhoto,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/getUser", protect, getUser);
router.get("/getLoginStatus", getLoginStatus);

router.patch("/updateuser", protect, updateUser);
router.patch("/updatePhoto", protect, updatePhoto);

module.exports = router;
