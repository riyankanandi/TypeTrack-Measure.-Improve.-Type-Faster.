const express = require("express");
const router = express.Router();
const { addScore, getMyScores } = require("../controllers/scoreController");
const authMiddleware = require("../utils/authMiddleware");

router.post("/", authMiddleware, addScore);
router.get("/", authMiddleware, getMyScores);

module.exports = router;
