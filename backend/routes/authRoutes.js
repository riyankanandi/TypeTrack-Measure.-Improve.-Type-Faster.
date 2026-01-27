const express = require("express");
const router = express.Router();
const { register, login, logout, me } = require("../controllers/authController");
const authMiddleware = require("../utils/authMiddleware");

router.get("/me", authMiddleware, async (req, res) => {
  res.json({
    userId: req.userId,
    authenticated: true,
  });
});


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
module.exports = router;
