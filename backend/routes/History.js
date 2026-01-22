// routes/quoteRoutes.js

const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", async (req, res) => {
  try {
   const result = await db.query(`
  SELECT
    id,
    wpm,
    accuracy,
    total_chars,
    correct_chars,
    time_taken,
    created_at
  FROM typing_tests
  ORDER BY created_at DESC
  LIMIT 50
`);
    

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch history" });
  }
});

module.exports = router;
